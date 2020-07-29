const mongoose= require('mongoose');
const listSchema= mongoose.Schema({
  storeid: {type: String,required:true},
  storeName: {type: String,required:true},
  barcode: {type: String,required:true},
  productname: {type: String,required:true},
  brandName: {type: String,required:true},
  productSize: {type: String,required:true},
  price: {type: String,required:true},
  quant: {type: String,required:true},
  remaining: {type: String,required:true},
  imageurl: {type: String,required:true},
  productSize: {type: String,required:true},
  creator:{type: mongoose.Schema.Types.ObjectId, ref: 'User',required:true}
});

module.exports = mongoose.model('List',listSchema);
