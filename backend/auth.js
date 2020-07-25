const express= require('express');
const User=require('../backend/models/user');
const bcrypt=require('bcrypt');


const router = express.Router();


router.post('/signup',(req,res,next)=>{
 
    bcrypt.hash(req.body.password,10)
    .then(hash=>{
        
        const userData=new User({
            email:req.body.email,
            password:hash
        });
        userData.save()
        .then(result=>{
          
            res.status(201).json({
                message:'user created',
                result:result
            });
        }).catch(err=>{
            res.status(500).json({
                error:err
            });
        })
    });
   

});


module.exports=router;