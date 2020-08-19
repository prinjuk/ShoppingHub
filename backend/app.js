const express= require('express');
const crud=require('./controllers/crud');
const checkAuth=require('./middleware/check-auth');
const fileExtractor=require('./middleware/multer');
const path = require('path');
const mongoose=require('mongoose');
const router = express.Router();
const bodyParser = require("body-parser");
var cors = require('cors');
const authRoute=require('./auth');
const app= express();
app.use(cors({credentials: true, origin: true}));
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
mongoose.connect('mongodb+srv://adminPK:'+process.env.MONGODB_ALTAS_PWD+'@shopping-hub.ilxx0.mongodb.net/Shopping-hub?retryWrites=true&w=majority',{ useNewUrlParser: true })
.then(()=>{
console.log('db connected succesful');

})
.catch(()=>{
  console.log('db failed');

});
app.use('/images',express.static(path.join('./backend/images'),{fallthrough: false}));
//submitting
app.post('/newInvent',checkAuth,fileExtractor,crud.AddProduct);
//retrievingSearch
app.use('/api/searchlist:query',crud.ListPage);
//searchspecific
app.use('/api/filterSearch/:productname',checkAuth,crud.customSearch);
//deletespecific
app.delete('/api/delete/:id',checkAuth,crud.deleteEntry);
//updatespecific
app.put('/api/update/:id',checkAuth,crud.updateProduct);
//paginator
app.get('/api/retLimiter/',checkAuth,crud.allProducts);
app.use('/api/auth',authRoute);

module.exports = app;
