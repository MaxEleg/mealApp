var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var promotionSchema = new mongoose.Schema({
  code : { type : String, required : "Merci de préciser le code de la promotion." },
  value : { type : Number, required : "Merci de préciser la réduction de la promotion." },
  status: {
    type: String,
    enum: ['USED', 'UNUSED']
  }
});


module.exports = mongoose.model('promotions', promotionSchema);
