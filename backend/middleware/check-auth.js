const jwt=require('jsonwebtoken');

module.exports=(req,res,next)=>{
    try{
   
        const token =req.headers.authorization.split(' ')[1];
  
        const decodedToken= jwt.verify(token,process.env.JWT);
      
       req.userData={email: decodedToken.email,userId:decodedToken.userId,unique_SHOP:decodedToken.unique_SHOP};
  
        next();
    }
    catch(error)
    {
        res.status(401).json({message:'auth failed'});
    }
    
  
    
};