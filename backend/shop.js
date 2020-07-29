// const express= require('express');

// // const User=require('../backend/models/list');
// const bcrypt=require('bcrypt');
// const List =require('./models/List');
// const jwt=require('jsonwebtoken');
// const path = require('path');
// const checkAuth=require('./middleware/check-auth');
// const multer =require('multer');
// const MIME_TYPE_MAP={
//   'image/png':'png',
//   'image/jpg':'jpg',
// }


// const router = express.Router();


// router.use('/images',express.static(path.join('./backend/images'),{fallthrough: false}));
// const storage = multer.diskStorage({
//   // destination:(req,file,cb)=>{
//   //   // const isValid=MIME_TYPE_MAP[file.mimetype];
//   //   // let error = new Error('invalid mime type');
//   //   // if(isValid)
//   //   // {
//   //   //   error =null;
//   //   // }
//   //   cb(error,'backend/images');
//   // },
//   // filename:(req,file,cb)=>{
//   //   const name=file.originalname.toLowerCase().split(' ').join('-');
//   //   const ext=MIME_TYPE_MAP[file.mimetype];
//   //   cb(null,name+'-'+ Date.now()+ '.'+ ext);
//   // }
//   destination: function (req, file, cb) {
//     cb(null, 'backend/images')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now()+'.jpg')
//   }
// });
// //submitting
// router.post('/newInvent',checkAuth,multer({storage,storage}).single('imageurl'),(req,res,next) => {
//  const url=req.protocol+'://'+req.get('host');
// const passData=new List({

//   storeid: req.body.storeid,
//   storeName: req.body.storeName,
//   barcode:  req.body.barcode,
//   productname:  req.body.productname,
//   brandName:  req.body.brandName,
//   productSize:  req.body.productSize,
//   price:  req.body.price,
//   quant:  req.body.quant,
//   imageurl: url+'/images/'+req.file.filename,
//   remaining: req.body.remaining,

//   productSize: req.body.productSize,
//   creator:req.userData.userId
// });

// // passData.save();
// res.status(200).json({
//   message:'success',
//   list:passData,
// });
// console.log(passData.creator);
// // passData.save();

// });
// //retrievingSearch
// router.use('/api/searchlist:query',(req,res,next)=>{
// let searchlist;

//   console.log(req.params.query);
// if(req.params.query == 'Products from ShopHub')
// {
//   List.find(
//     // { productname: { $regex: req.params.query,$options: "i" }}
//   )
//   .then((document)=>{
//     searchlist=document;
//     res.status(200).json({
//       message:'success',
//       list:searchlist,
//     });
//   });
// }
// else{
//   List.find(
//     { productname: { $regex: req.params.query,$options: "i" }}
//   )
//   .then((document)=>{
//     searchlist=document;
//     res.status(200).json({
//       message:'success',
//       list:searchlist,
//     });
//   });
// }


// });
// //searchspecific
// router.use('/api/filterSearch/:productname',(req,res,next)=>{
// let searchlist;

// let para=req.params.productname;

// console.log(req.params.productname);
// List.find(
//   { productname: { $regex: para,$options: "i" }}

// )
// .then((document)=>{
//   searchlist=document;
//   res.status(200).json({
//     message:'success',
//     list:searchlist,
//   });
// });

// });
// //deletespecific
// router.delete('/api/delete/:id',checkAuth,(req,res,next)=>{

// let searchlist;

// let para=req.params.id;
// console.log(req.params._id);
// List.deleteOne(
//   { _id: para}

// )
// .then((document)=>{
//   searchlist=document;
//   console.log('deleted');
//   res.status(200).json({
//     message:'success',
//     list:searchlist,
//   });
// });

// });
// //updatespecific
// router.put('/api/update/:id',(req,res,next)=>{


// let para=req.params.id;
// console.log(req.params._id);
// const passData=new List({
//   _id:req.body.id,
//   storeid: req.body.id,

//   barcode:  req.body.barcode,
//   productname:  req.body.productname,
//   // brandName:  req.body.brandName,
//   productSize:  req.body.productSize,
//   price:  req.body.price,
//   quant:  req.body.quant,
//   imageurl:  req.body.imageurl,
//   remaining: req.body.remaining,


// });
// List.updateOne(
//   { _id: para},
//   passData

// )
// .then((document)=>{
//   searchlist=document;
//   console.log('passed');
//   res.status(200).json({
//     message:'success',

//   });
// });

// });
// //paginator
// router.get('/api/retLimiter/',(req,res,next)=>{

// const pageSize=+req.query.size;
// const currentPage=+req.query.page;
// const postQuery=List.find();
// let fetchData,MaxPost;
// if(pageSize && currentPage)
// {
// postQuery.skip(pageSize*(currentPage-1)).limit(pageSize);
// }
// postQuery.then(docs=>{
// fetchData=docs;

//       return List.countDocuments();
//     }).then(count=>{
//       console.log(count);
//     res.status(200).json({
//     message:'200',
//     list:fetchData,
//     max:count
// });
// });
// });

