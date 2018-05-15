var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new mongoose.Schema({
  meals : [],
  price : { type : Number},
  createdAt 	: { type : Date },
  userId: { type: Schema.Types.ObjectId, ref: 'users' },
  status: {
    type: String,
    enum: ['WAITING', 'READY', 'ERROR']
  },
  enableDelivery:{ type: Boolean, default: false},
  address: { type: String },
  phone: { type: String },
  mail: { type: String },
  promotion: { type: Schema.Types.ObjectId, ref: 'promotions' }
});


module.exports = mongoose.model('orders', orderSchema);
