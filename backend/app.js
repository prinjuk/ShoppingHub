const express= require('express');
const List =require('./models/List');
const mongoose=require('mongoose');
const router = express.Router();
const bodyParser = require("body-parser");
var cors = require('cors');
const { ConsoleReporter } = require('jasmine');


const app= express();
app.use(cors());
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//   next();
// });
mongoose.connect('mongodb+srv://adminPK:K8fZUKUGDa0OtXZz@shopping-hub.ilxx0.mongodb.net/Shopping-hub?retryWrites=true&w=majority',{ useNewUrlParser: true })
.then(()=>{
console.log('db connected succesful');

})
.catch(()=>{
  console.log('db failed');

});
// router.post('/', function(req, res) {
// alert("hi");
// });




// app.use((req,res,next)=>{
//       res.setHeader('Access-Control-Allow-Origin','*');
//       res.setHeader(
//         'Access-Control-Allow-Headers',
//       'Origin,X-Requested-With,Content-Type,Accept'
//       );

//       res.setHeader(
//         'Access-Control-Allow-Methods',
//       'GET, POSTS, PATCH, DELETE, OPTIONS');
// next();
// });

//submitting
app.post('/newInvent',(req,res,next) => {
    // console.log(req.body.storeId);
  const passData=new List({

    storeid: req.body.storeid,
    storeName: req.body.storeName,
    barcode:  req.body.barcode,
    productname:  req.body.productname,
    brandName:  req.body.brandName,
    productSize:  req.body.productSize,
    price:  req.body.price,
    quant:  req.body.quant,
    imageurl:  req.body.imageurl,
    remaining: req.body.remaining,

    productSize: req.body.productSize,
 });
 passData.save();
  res.status(200).json({
    message:'success',
    list:passData,
  });
  console.log(passData);
  // passData.save();

});
//retrievingSearch
app.use('/api/searchlist',(req,res,next)=>{
  let searchlist;
  List.find()
  .then((document)=>{
    searchlist=document;
    res.status(200).json({
      message:'success',
      list:searchlist,
    });
  });

});
//searchspecific
app.use('/api/filterSearch/:productname',(req,res,next)=>{
  let searchlist;

  let para=req.params.productname;
  console.log(req.params.productname);
  List.find(
    { productname: { $regex: para }}

  )
  .then((document)=>{
    searchlist=document;
    res.status(200).json({
      message:'success',
      list:searchlist,
    });
  });

});
//deletespecific
app.delete('/api/delete/:id',(req,res,next)=>{
  let searchlist;

  let para=req.params.id;
  console.log(req.params._id);
  List.deleteOne(
    { _id: para}

  )
  .then((document)=>{
    searchlist=document;
    console.log('deleted');
    res.status(200).json({
      message:'success',
      list:searchlist,
    });
  });

});
//updatespecific
app.put('/api/update/:id',(req,res,next)=>{


  let para=req.params.id;
  console.log(req.params._id);
  const passData=new List({
    _id:req.body.id,
    storeid: req.body.id,

    barcode:  req.body.barcode,
    productname:  req.body.productname,
    // brandName:  req.body.brandName,
    productSize:  req.body.productSize,
    price:  req.body.price,
    quant:  req.body.quant,
    imageurl:  req.body.imageurl,
    remaining: req.body.remaining,


 });
  List.updateOne(
    { _id: para},
    passData

  )
  .then((document)=>{
    searchlist=document;
    console.log('passed');
    res.status(200).json({
      message:'success',

    });
  });

});
module.exports = app;
