const mongoose= require('mongoose');
const uniqueValidator=require('mongoose-unique-validator');
const employeeSchema= mongoose.Schema({
  firstname: {type: String,required:true},
  lastname: {type: String,required:true},
  phoneNumber: {type: Number,required:true,unique:true},
  email: {type: String,required:true,unique:true},
  password: {type: String,required:true},
  usertype: {type: Number,required:true},
  unique_SHOP: {type: Number,required:true},
});
employeeSchema.plugin(uniqueValidator);
module.exports = mongoose.model('employees',employeeSchema);
