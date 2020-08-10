const express= require('express');
const Auth=require('./controllers/auth');
const router = express.Router();
router.post('/signup',Auth.signup);
router.post('/newSupplier',Auth.newSupplier);
router.post('/login',Auth.Login);
router.get('/getUser',Auth.getUser);
router.post('/removeUser',Auth.removeSupplier);
module.exports=router;