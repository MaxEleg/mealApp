var models = require("../../../models");

function getPromotions (req,res){
  function _sendErr(err) {
    console.log(err);
    res.status(400).send({msg: 'Error occured'});
  }
  models.Promotion.find({}, function(err, promotions){
    if(err){
      _sendErr(err);
      return;
    }
    res.json(promotions);
  });
};

function addPromotion (req,res){
  var newPromo = new models.Promotion(req.body.promotion);
  newPromo.status = "UNUSED";
  function _sendErr(err) {
    console.log(err);
    res.status(400).send({msg: 'Error occured'});
  }
  newPromo.save(function(err, promo){
    if(err){
      _sendErr(err);
      return;
    }
    res.json(promo);
  });
};

function deletePromotion (req,res){
  var id = req.params.id;

  function _sendErr(err) {
    console.log(err);
    res.status(400).send({msg: 'Error occured'});
  }
  models.Promotion.findByIdAndRemove(id, function(err){
    if(err){
      _sendErr(err);
      return;
    }
    res.json({msg:'ok'});
  });
};


module.exports = {
  getPromotions: getPromotions,
  addPromotion: addPromotion,
  deletePromotion: deletePromotion
};