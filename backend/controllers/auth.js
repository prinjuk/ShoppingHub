const User=require('../models/user');
const supplier=require('../models/supplier');
const authReq=require('../models/authentication');

const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const uniqueString = require('unique-string');


exports.Login=(req,res,next)=>{
    let emailStorage='';
    let useridStorage='';
    let userstoreStorage='';
    let nametoreStorage='';
    let typeStorage='';
    try{
        User.findOne({email:req.body.email})
        .then(user=>{
            if(!user)
            {
                return res.status(401).json({
                    message:'Invalid Credientials'
                });
            }
            emailStorage=req.body.email;
            useridStorage=user._id;
            userstoreStorage=user.unique_SHOP;
            typeStorage=user.usertype;
            nametoreStorage=user.firstname;
            return bcrypt.compare(req.body.password,user.password);
        })
        .then(result=>{
            if(!result)
            {
                return res.status(401).json({
                    message:'Invalid Password'
                });
            }
            const token =jwt.sign(
                {email:emailStorage,userId:useridStorage,unique_SHOP:userstoreStorage},
                process.env.JWT,
                {expiresIn:'1h'}
                );
            res.status(200).json({
                name:nametoreStorage,
                token:token,
                unique_SHOP:userstoreStorage,
                expiresIn:3600,
                usertype:typeStorage,
            })
        
        })
        .catch(err=>{
            return res.status(401).json({
                message:'Not signed up in? Join now'
            });
        })
    }
    catch(err){
     
    }
    
}

exports.signup=(req,res,next)=>{
 
    bcrypt.hash(req.body.password,10)
    .then(hash=>{
        uniqueShopValue= uniqueString();
        const userData=new User({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            phoneNumber:req.body.phoneNumber,
            email:req.body.email,
            password:hash,
            usertype:2,
            unique_SHOP:uniqueShopValue
            
        });
        userData.save()
        .then(result=>{
          
            res.status(201).json({
                message:'user created',
                result:result
            });
        }).catch(err=>{
            res.status(500).json({
               message:'Invalid Authentication Failed'
            });
        })
    });
   

}
exports.newSupplier=(req,res,next)=>{
    try{
   
        const uniqueShopValue=uniqueString();
        bcrypt.hash(req.body.password,10)
        .then(hash=>{


        const userData=new supplier({
            firstname: req.body.firstname,
            lastname:req.body.lastname,
            storename: req.body.storename,
            gst: req.body.gst,
            phoneNumber:req.body.phoneNumber,
            email:req.body.email,
            address1: req.body.address1,
            address2: req.body.address2,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
            zip: req.body.zip,
            password:hash,
            usertype: req.body.usertype,
            unique_SHOP:uniqueShopValue
        });
        userData.save()
        .then(result=>{
          
            res.status(201).json({
                message:'user created',
                result:result
            });
        }).catch(err=>{
            res.status(500).json({
               message:'Invalid Authentication Failed'
            });
        })
        ///copying to user list
        const userInfoAuth=new User({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            phoneNumber:req.body.phoneNumber,
            email:req.body.email,
            password:hash,
            usertype:req.body.usertype,
            unique_SHOP:uniqueShopValue
        });
        
        userInfoAuth.save()
        .then(result=>{
          
            res.status(201).json({
                message:'user created',
                result:result
            });
        }).catch(err=>{
            res.status(500).json({
               message:'Invalid Authentication Failed'
            });
        })
           ///creating to user list
     
    });
    }
    catch(err)
    {

    }
    
   
 
}
exports.getUser=(req,res,next)=>{
    
   //optimize
    if(req.body.auth_type == 0)
    {
        User.find(
            {
               
            }
    
        ).select('_id email firstname lastname phoneNumber usertype unique_SHOP')
        .then((document)=>{
            userData=document.phoneNumber
            res.status(200).json({
              message:'success',
              list:document,
            }); 
        })
    }else{
        User.find(
            {
                unique_SHOP:req.body.storeId
            }
    
        ).select('_id email firstname lastname phoneNumber usertype unique_SHOP')
        .then((document)=>{
            userData=document.phoneNumber
            res.status(200).json({
              message:'success',
              list:document,
            }); 
        })
    }
   
}
exports.removeSupplier=(req,res,next)=>{
   
    User.deleteOne({ unique_SHOP: req.body.unique_SHOP }, function (err) {
        if(err) console.log(err);
     
      });
      supplier.deleteOne({ unique_SHOP: req.body.unique_SHOP }, function (err) {
        if(err) console.log(err);
       
      });
}
exports.removeUnwantedTokens=(req,res,next)=>{

    authReq.deleteMany(
        { auth_expdate:{$lte : req.body.exp} },
         function (err) {
        if(err) console.log(err);
     
      });
    
}
exports.authLive=(req,res,next)=>{
  
    const authLiveReq=new authReq({
        auth_name:req.body.name,
        auth_token:req.body.token,
        auth_expdate:req.body.expirationData,
        auth_shopId:req.body.shopid,
        auth_type:req.body.userType
    })
    authLiveReq.save()
    .then(result=>{
          
        res.status(201).json({
            message:'auth created',
            result:result
        });
    }).catch(err=>{
        res.status(500).json({
           message:'Invalid Authentication Failed'
        });
    })
}
exports.authLiveRequest=(req,res,next)=>{

    let findSpecific=req.body.token;
    authReq.find(
        { auth_token:findSpecific   
         }
    
      )
      .then((document)=>{
       
        searchlist=document;
        console.log(document)
        res.status(200).json({
          message:'success',
          list:searchlist,
        });
      })
}
exports.storeDetails=(req,res,next)=>{

    let findSpecific=req.body.storeId;
    supplier.find(
        { unique_SHOP:findSpecific   
         }
    
      )
    //   .select('_id email firstname lastname phoneNumber usertype unique_SHOP')
      .then((document)=>{
       
        searchlist=document;
        res.status(200).json({
          message:'success',
          list:searchlist,
        });
      })
}
exports.removeLiveReq=(req,res,next)=>{
   
    authReq.deleteOne({ auth_token: req.body.token }, function (err) {
        if(err) console.log(err);
     
      });
      console.log('Token Reset')
}
exports.employees=(req,res,next)=>{
   const uniqueShopValue=req.body.unique_SHOP;

    bcrypt.hash(req.body.password,10)
    .then(hash=>{ 
        const userInfoAuth=new User({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            phoneNumber:req.body.phoneNumber,
            email:req.body.email,
            password:hash,
            usertype:req.body.usertype,
            unique_SHOP:req.body.unique_SHOP
        });
        
        userInfoAuth.save()
        .then(result=>{
          
            res.status(201).json({
                message:'user created',
                result:result
            });
        }).catch(err=>{
            res.status(500).json({
               message:err.body
            });
        })
        
      
    });
   
 
  
}
