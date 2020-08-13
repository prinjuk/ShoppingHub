const mongoose= require('mongoose');
const authentication= mongoose.Schema({
  auth_name: {type: String,required:true},
  auth_token: {type: String,required:true},
  auth_expdate: {type: String,required:true},
  auth_shopId: {type: String,required:true},
  
});
 
module.exports = mongoose.model('authentication',authentication);
