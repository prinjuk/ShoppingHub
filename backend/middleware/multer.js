const multer =require('multer');

const MIME_TYPE_MAP={
    'image/png':'png',
    'image/jpg':'jpg',
  }
  
 

const storage = multer.diskStorage({
    
    destination: function (req, file, cb) {
      cb(null, 'backend/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+'.jpg')
    },
});
module.exports=(multer({storage,storage}).single('imageurl'));