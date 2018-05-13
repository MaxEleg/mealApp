var token = require("../../lib/token");
var models = require("../../../models");
var events = require("events");

function  checkout (req,res) {
  function _sendErr(err) {
    res.status(400).json({msg: err});
  }

  var data = req.body;
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

    ids.forEach(function (id) {
      var priceFromId = meals.filter(function (meal) { return meal._id.toString() === id; })[0].price;
      price += priceFromId;
    });

    var order = new models.Order({
      meals: meals,
      price: price,
      createdAt: new Date(),
      status: 'WAITING',
      enableDelivery: data.payment.enableDelivery,
      address: data.payment.enableDelivery ? data.payment.address : ' '
    });

    function _createOrder() {
      order.save(function(err, newOrder){
        if(err){
          console.log(err);
          _sendErr('Une erreur est survenue.');
          return;
        }else{
          res.json(newOrder);
        }
      })
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