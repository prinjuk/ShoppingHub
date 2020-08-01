const User=require('../models/user');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');


exports.Login=(req,res,next)=>{
    let emailStorage='';
    let useridStorage='';
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
                'testing_VALUES_HASH',
                {expiresIn:'1h'}
                );
            res.status(200).json({
                token:token,
                expiresIn:3600,
            })
        })
        .catch(err=>{
            return res.status(401).json({
                message:'Not signed up in? Join now'
            });
        })
}

exports.signup=(req,res,next)=>{
 
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
               message:'Invalid Authentication Failed'
            });
        })
    });
   

}