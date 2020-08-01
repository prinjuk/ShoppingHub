const multer =require('multer');

const MIME_TYPE_MAP={
    'image/png':'png',
    'image/jpg':'jpg',
  }
  
  

const storage = multer.diskStorage({
    // destination:(req,file,cb)=>{
    //   // const isValid=MIME_TYPE_MAP[file.mimetype];
    //   // let error = new Error('invalid mime type');
    //   // if(isValid)
    //   // {
    //   //   error =null;
    //   // }
    //   cb(error,'backend/images');
    // },
    // filename:(req,file,cb)=>{
    //   const name=file.originalname.toLowerCase().split(' ').join('-');
    //   const ext=MIME_TYPE_MAP[file.mimetype];
    //   cb(null,name+'-'+ Date.now()+ '.'+ ext);
    // }
    destination: function (req, file, cb) {
      cb(null, './images')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+'.jpg')
    }
});
module.exports=(multer({storage,storage}).single('imageurl'));