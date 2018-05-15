var token = require("../../lib/token");
var models = require("../../../models");
var stripe = require("../../lib/payment/stripe");

function  checkout (req,res) {
  function _sendErr(err) {
    res.status(400).json({msg: err});
  }

  var data = req.body;

  if(!data.cart.length){
    res.status(400).json({msg: "Votre panier est vide."});
    return;

  }
  if(data.payment.enableDelivery !== true){
    data.payment.enableDelivery = false;
  }
  // We store meal id in array (for search in db)
  const ids = data.cart.map(function(meal) { return meal._id; });
  var query = {
    _id: {
      $in: ids
    }
  };
  // we verify price from db... NTUI !!!
  models.Meal.find(query, function (err, meals) {
    if (err) {
      console.log(err);
      _sendErr('Une erreur est survenue');
      return;
    }
    var price = 0;

    /*ids.forEach(function (id) {
      var priceFromId = meals.filter(function (meal) { return meal._id.toString() === id; })[0].price;
      price += priceFromId;
    });*/

    for(var i = 0; i < ids.length; i++){
      var id = ids[i];
      var priceFromId = meals.filter(function (meal) { return meal._id.toString() === id; });

      if(!priceFromId.length){
        var mealName = data.cart.filter(function(meal){return meal._id.toString() === id})[0].name;
        res.status(400).json({msg: "Le plat " + mealName + " n'existe plu, merci de le retirer de votre panier."});
        return;
      }

      priceFromId = priceFromId[0].price;
      price += priceFromId;
    }

    var order = new models.Order({
      meals: meals,
      price: price,
      createdAt: new Date(),
      status: 'WAITING',
      enableDelivery: data.payment.enableDelivery,
      address: data.payment.enableDelivery ? data.payment.address : ' '
    });

    function _createOrder() {

      var payment = data.payment;
      var exp = {
        month: payment.cardExpiration.split('/')[0],
        year: payment.cardExpiration.split('/')[1]
      };

      stripe.pay({
        cvc: payment.cvv,
        exp_month: exp.month,
        exp_year: exp.year,
        number: payment.cardNumber,
        price: order.price
      },function (err, result){
        if(err){
          console.log(err);
        }
      });

      var cbSave = function(err, newOrder){
        if(err){
          console.log(err);
          _sendErr('Une erreur est survenue.');
        }else{
          res.json(newOrder);
        }
      };

      if(payment.code){
        models.Promotion.findOne({code:payment.code}, function(err,promo){
          if(promo){
            order.price = order.price - (order.price * (promo.value/100));
            order.promotion = promo._id;
            promo.status = "USED";
            promo.save();
          }else{
            res.status(400).json({msg: 'Le code promotionel est incorrect.'});
          }
          order.save(cbSave)
        });
      }else{
        order.save(cbSave)
      }
    }

    if(data.auth.isAuth) {
      token.decode(data.auth.token, function (err, result) {
        if (err || !result) {
          console.log(err);
          _sendErr('Utilisateur introuvable. Merci de vous reconnecter.');
          return;
        }
        models.User.findById(result._id, function(err, user){
          if(err){
            console.log(err);
            _sendErr('Une erreur est survenue.');
            return;
          }
          if(user.banned){
            res.status(400).json({msg: 'Vous etes banni, il est impossible pour vous de passer votre commande.'});
            return;
          }

          order.userId = user._id;
          _createOrder();
        });
      });
    }else{
      order.mail = data.payment.mail;
      order.phone = data.payment.phone;
      _createOrder();
    }
  });
}
module.exports = checkout;