const mongoose= require('mongoose');
const uniqueValidator=require('mongoose-unique-validator');
const userSchema= mongoose.Schema({
  firstname: {type: String,required:true},
  lastname: {type: String,required:true},
  phoneNumber: {type: Number,required:true,unique:true},
  email: {type: String,required:true,unique:true},
  password: {type: String,required:true},
  usertype: {type: Number,required:true},
  unique_SHOP: {type: String,required:true}
});
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User',userSchema);
