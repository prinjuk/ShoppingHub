const mongoose= require('mongoose');
const uniqueValidator=require('mongoose-unique-validator');
const supplierSchema= mongoose.Schema({
  firstname: {type: String,required:true},
  lastname: {type: String,required:true},
  storename: {type: String,required:true},
  gst: {type: String,required:true,unique:true},
  phoneNumber: {type: Number,required:true,unique:true},
  email: {type: String,required:true,unique:true},
  address1: {type: String,required:true},
  address2: {type: String,required:true},
  city: {type: String,required:true},
  state: {type: String,required:true},
  country: {type: String,required:true},
  zip: {type: String,required:true},
  password: {type: String,required:true},
  usertype: {type: Number,required:true},
  unique_SHOP: {type: String,required:true},
});
supplierSchema.plugin(uniqueValidator);
module.exports = mongoose.model('supplier',supplierSchema);
