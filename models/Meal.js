var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mealSchema = new mongoose.Schema({
  name : { type : String, required : "Merci de préciser le nom de l'article." },
  price : { type : Number, required : "Merci de préciser le prix de l'article." },
  image : { type : String, required : false },
  quantity : {type : Number },
  description : {type : String },
  stock : {type : String },
  createdAt 	: { type : Date, required : false }
});


module.exports = mongoose.model('meals', mealSchema);
