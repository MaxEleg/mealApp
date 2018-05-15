var models = require("../../../models");

function getMeals (req,res){
  function _sendErr(err) {
    console.log(err);
    res.status(400).send({msg: 'Error occured'});
  }
  models.Order.find({}, function(err, meals){
    if(err){
      _sendErr(err);
      return;
    }
    res.json(meals);
  });
};
function addMeal (req,res){
  var newMeal = new models.Meal(req.body.meal);
  newMeal.createdAt = new Date();

  function _sendErr(err) {
    console.log(err);
    res.status(400).send({msg: 'Error occured'});
  }
  newMeal.save(function(err, meal){
    if(err){
      _sendErr(err);
      return;
    }
    res.json(meal);
  });
};

function deleteMeal (req,res){
  var id = req.params.id;
  function _sendErr(err) {
    console.log(err);
    res.status(400).send({msg: 'Error occured'});
  }
  models.Meal.findByIdAndRemove(id, function(err){
    if(err){
      _sendErr(err);
      return;
    }
    res.json({msg:'ok'});
  });
};

function updateMeal (req,res){
  var id = req.params.id;
  var newMeal = req.body;
  function _sendErr(err) {
    console.log(err);
    res.status(400).send({msg: 'Error occured'});
  }
  models.Meal.update({_id :id},{$set : newMeal} ,function(err){
    if(err){
      _sendErr(err);
      return;
    }
    res.json({msg:'ok'});
  });
};

module.exports = {
  getMeals: getMeals,
  addMeal: addMeal,
  updateMeal: updateMeal,
  deleteMeal: deleteMeal
};