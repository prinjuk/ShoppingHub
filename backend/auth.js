const express= require('express');

const Auth=require('./controllers/auth');
const router = express.Router();


router.post('/signup',Auth.signup);
router.post('/login',Auth.Login);

module.exports=router;