var express = require("express");
var routerMeal = express.Router();
var models = require("../../../models");

routerMeal.get("/", function(req,res){
  models.Meal.find({},function (err,meals){
    if(err){
      console.error(err);
      res.status(400).json({msg:"An error occured"});
      return;
    }
    res.json(meals);
  });
});

module.exports = routerMeal;