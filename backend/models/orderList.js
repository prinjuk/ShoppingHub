const mongoose= require('mongoose');
const uniqueValidator=require('mongoose-unique-validator');
const orderSchema= mongoose.Schema({
  orderid:{type: String,required:true,uniqueValidator:true},
  creator: {type: String,required:true},
  order:{type:Array,required:true}
});
orderSchema.plugin(uniqueValidator);
module.exports = mongoose.model('orderList',orderSchema);
