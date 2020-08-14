const User=require('../models/user');
const supplier=require('../models/supplier');
const authReq=require('../models/authentication');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const { unique } = require('jquery');


exports.Login=(req,res,next)=>{
    let emailStorage='';
    let useridStorage='';
    let userstoreStorage='';
    let nametoreStorage='';
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
                {email:emailStorage,userId:useridStorage},
                process.env.JWT,
                {expiresIn:'1h'}
                );
            res.status(200).json({
                name:nametoreStorage,
                token:token,
                unique_SHOP:userstoreStorage,
                expiresIn:3600,
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
        uniqueShopValue= String(Math.floor(Math.random() * 1000000));
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
        uniqueShopValue= String(Math.floor(Math.random() * 1000000));
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
    catch(err)
    {
        console.log(err);
    }
}
exports.getUser=(req,res,next)=>{
    User.find().select('_id email firstname lastname phoneNumber usertype unique_SHOP')
    .then((document)=>{
        userData=document.phoneNumber
        res.status(200).json({
          message:'success',
          list:document,
        }); 
    })
}
exports.removeSupplier=(req,res,next)=>{
   
    User.deleteOne({ unique_SHOP: req.body.unique_SHOP }, function (err) {
        if(err) console.log(err);
     
      });
      supplier.deleteOne({ unique_SHOP: req.body.unique_SHOP }, function (err) {
        if(err) console.log(err);
       
      });
}
exports.authLive=(req,res,next)=>{
    console.log(req.body);
    const authLiveReq=new authReq({
        auth_name:req.body.name,
        auth_token:req.body.token,
        auth_expdate:req.body.expirationData,
        auth_shopId:req.body.shopid,
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