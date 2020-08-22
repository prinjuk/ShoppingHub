const mongoose= require('mongoose');
const uniqueValidator=require('mongoose-unique-validator');
const addressSchema= mongoose.Schema({
  firstname: {type: String,required:true},
  lastname: {type: String,required:true},
  phone: {type: Number,required:true,unique:true},
 
  address1: {type: String,required:true},
  address2: {type: String,required:true},
  city: {type: String,required:true},
  state: {type: String,required:true},
  country: {type: String,required:true},
  zip: {type: String,required:true},
  creator: {type: String,required:true,unique:true},
});
addressSchema.plugin(uniqueValidator);
module.exports = mongoose.model('addressCollection',addressSchema);
