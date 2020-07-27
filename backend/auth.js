const express= require('express');
const User=require('../backend/models/user');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const user = require('../backend/models/user');

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
router.post('/login',(req,res,next)=>{
    User.findOne({email:req.body.email})
        .then(user=>{
            if(!user)
            {
                return res.status(401).json({
                    message:'auth failed'
                });
            }
            return bcrypt.compare(req.body.password,user.password);
        })
        .then(result=>{
            if(!result)
            {
                return res.status(401).json({
                    message:'Declined'
                });
            }
            const token =jwt.sign(
                {email:user.email,userId:user._id},
                'testing_VALUES_HASH',
                {expiresIn:'1h'}
                );
            res.status(200).json({
                token:token
            })
        })
        .catch(err=>{
            return res.status(401).json({
                message:'auth failed'
            });
        })
});

module.exports=router;