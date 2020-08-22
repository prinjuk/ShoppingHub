const List =require('../models/list');
const supplier =require('../models/supplier');
exports.AddProduct=(req,res,next) => {
  
    const url=req.protocol+'://'+req.get('host');
   const passData=new List({
     barcode:  req.body.barcode,
     productname:  req.body.productname,
     brandName:  req.body.brandName,
     productSize:  req.body.productSize,
     price:  req.body.price,
     quant:  req.body.quant,
     imageurl: url+'/images/'+req.file.filename,
     remaining: req.body.remaining,
     productSize: req.body.productSize,
      creator:req.body.creator
  });
  passData.save();
   res.status(200).json({
     message:'success',
     list:passData,
   });
   res.status(500).json({
 message:'Unknown Error'
   });
   // passData.save();
 
 };
 exports.ListPage=(req,res,next)=>{
    let searchlist;
    
     
    if(req.params.query == 'Products from ShopHub')
    {
      List.aggregate([
        
        { $lookup:{
              from: "suppliers",
              localField: "creator",
              foreignField: "unique_SHOP",
              as: "source"
            }
            
       },
     
  
      
      ]) 
      .then((document)=>{
        console.log(document)
        searchlist=document;
        res.status(200).json({
          message:'success',
          list:searchlist,
        })
      });
    }
    else{
      List.aggregate([
        {$match:
          { productname: { $regex: req.params.query,$options: "i" }}
        },
      //   { $lookup:{
      //         from: "suppliers",
      //         localField: "creator",
      //         foreignField: "unique_SHOP",
      //         as: "source"
      //       }
      //  },
        {
    $lookup: {
      from: "suppliers",
      
      as: "source",
      let: { creator: "$creator" },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ["$$creator", "$unique_SHOP"] }
          }
        },
        {
          $project: {
            _id: 0,
            zip: 1,
            storename:1,
            unique_SHOP: 1
          }
        }
      ]
    }
  }
      
      ]) 
      .then((document)=>{
        
        searchlist=document;
        res.status(200).json({
          message:'success',
          list:searchlist,
        });
      });
    }
   
  
  };
  exports.customSearch=(req,res,next)=>{
  
   
    let para=req.body.productname;
    
    console.log(req.body.productname);
    List.find(
      { productname: { $regex: para,$options: "i" },
        creator:req.userData.unique_SHOP         
       }
  
    )
    .then((document)=>{
      searchlist=document;
      res.status(200).json({
        message:'success',
        list:searchlist,
      });
    })
    .catch(error=>{
      res.status(500).json({
        message:'Sorry No Relevant Product found'
      })
      res.status(404).json({
        message:'Sorry No Relevant Product found'
      })
    });
  
  };
  exports.deleteEntry=(req,res,next)=>{
  
    let searchlist;
  
    let para=req.params.id;
    console.log(req.params._id);
    List.deleteOne(
      { _id: para},
      {  creator:req.userData.userId}
  
    )
    .then((document)=>{
      searchlist=document;
      console.log('deleted');
      res.status(200).json({
        message:'success',
        list:searchlist,
      });
    });
  
  };
  exports.updateProduct=(req,res,next)=>{


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
     
      res.status(200).json({
        message:'success',
  
      });
    });
  
  };
  exports.allProducts=(req,res,next)=>{
  console.log(req.userData )
    const pageSize=+req.query.size;
    const currentPage=+req.query.page;
    const postQuery=List.find({  creator:req.userData.unique_SHOP      });
    let fetchData,MaxPost;
    if(pageSize && currentPage)
    {
      postQuery.skip(pageSize*(currentPage-1)).limit(pageSize);
    }
    postQuery.then(docs=>{
      fetchData=docs;
     
            return List.countDocuments();
          }).then(count=>{
            console.log(count);
          res.status(200).json({
          message:'200',
          list:fetchData,
          max:count
    });
    });
    };