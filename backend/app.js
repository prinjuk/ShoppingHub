const express= require('express');


const app= express();
app.use((req,res,next)=>{
res.setHeader('Access-Control-Allow-Origin','*');
res.setHeader(
  'Access-Control-Allow-Headers',
'Origin,X-Requested-With,Content-Type,Accept'
);

res.setHeader(
  'Access-Control-Allow-Methods',
'GET, POSTS, PATCH, DELETE, OPTIONS');
next();
});
app.use('/api/searchlist',(req,res,next)=>{
  const searchlist=[
    {   storeId: 'Kunnil',
    storeName: 'Kunnil Hypermarket',
    barcode: '411416A001008',
    productName: 'Bingo Mad Angles',
    brandName: 'Bingo',
    productSize: '80g',
    price: '90',
    qtyLeft: '5',
    imageUrl: 'https://homedelivery.ramachandran.in/image/cache/catalog/Diary/391912A001016_Nestle-Everyday-Dw-1Kg-250x250.jpg',

},
{
  storeId: 'LULU',
  storeName: 'LULU Hypermarket',
  barcode: '8901491101844',
  productName: 'Lays Potato Chips',
  brandName: 'Lays',
  productSize: '80g',
  price: '100',
  qtyLeft: '15',
  imageUrl: 'https://images.barcodesdatabase.org/file/barcodesdatabase/890/149/110/8901491101844.jpg',

},
{
  storeId: 'Kunnil',
  storeName: 'Kunnil Hypermarket',
  barcode: '8901491101844',
  productName: 'Lays Potato Chips',
  brandName: 'Lays',
  productSize: '80g',
  price: '400',
  qtyLeft: '4',
  imageUrl: 'https://images.barcodesdatabase.org/file/barcodesdatabase/890/149/110/8901491101844.jpg',

}

  ];
  res.status(200).json({
    message:'success',
    list:searchlist,
  });
});

module.exports = app;
