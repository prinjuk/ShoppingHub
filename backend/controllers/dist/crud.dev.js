"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var List = require('../models/list');

var supplier = require('../models/supplier');

exports.AddProduct = function (req, res, next) {
  var _ref;

  var url = req.protocol + '://' + req.get('host');
  var passData = new List((_ref = {
    barcode: req.body.barcode,
    productname: req.body.productname,
    brandName: req.body.brandName,
    productSize: req.body.productSize,
    price: req.body.price,
    quant: req.body.quant,
    imageurl: url + '/images/' + req.file.filename,
    remaining: req.body.remaining
  }, _defineProperty(_ref, "productSize", req.body.productSize), _defineProperty(_ref, "creator", req.body.creator), _ref));
  passData.save();
  res.status(200).json({
    message: 'success',
    list: passData
  });
  res.status(500).json({
    message: 'Unknown Error'
  }); // passData.save();
};

exports.ListPage = function (req, res, next) {
  var searchlist;

  if (req.params.query == 'Products from ShopHub') {
    List.aggregate([{
      $lookup: {
        from: "suppliers",
        localField: "creator",
        foreignField: "unique_SHOP",
        as: "source"
      }
    }]).then(function (document) {
      console.log(document);
      searchlist = document;
      res.status(200).json({
        message: 'success',
        list: searchlist
      });
    });
  } else {
    List.aggregate([{
      $match: {
        productname: {
          $regex: req.params.query,
          $options: "i"
        }
      }
    }, //   { $lookup:{
    //         from: "suppliers",
    //         localField: "creator",
    //         foreignField: "unique_SHOP",
    //         as: "source"
    //       }
    //  },
    {
      $lookup: {
        from: "suppliers",
        as: "source",
        "let": {
          creator: "$creator"
        },
        pipeline: [{
          $match: {
            $expr: {
              $eq: ["$$creator", "$unique_SHOP"]
            }
          }
        }, {
          $project: {
            _id: 0,
            zip: 1,
            storename: 1,
            unique_SHOP: 1
          }
        }]
      }
    }]).then(function (document) {
      searchlist = document;
      res.status(200).json({
        message: 'success',
        list: searchlist
      });
    });
  }
};

exports.customSearch = function (req, res, next) {
  var para = req.body.productname;
  console.log(req.body.productname);
  List.find({
    productname: {
      $regex: para,
      $options: "i"
    },
    creator: req.userData.unique_SHOP
  }).then(function (document) {
    searchlist = document;
    res.status(200).json({
      message: 'success',
      list: searchlist
    });
  })["catch"](function (error) {
    res.status(500).json({
      message: 'Sorry No Relevant Product found'
    });
    res.status(404).json({
      message: 'Sorry No Relevant Product found'
    });
  });
};

exports.deleteEntry = function (req, res, next) {
  var searchlist;
  var para = req.params.id;
  console.log(req.params._id);
  List.deleteOne({
    _id: para
  }, {
    creator: req.userData.userId
  }).then(function (document) {
    searchlist = document;
    console.log('deleted');
    res.status(200).json({
      message: 'success',
      list: searchlist
    });
  });
};

exports.updateProduct = function (req, res, next) {
  var para = req.params.id;
  console.log(req.params._id);
  var passData = new List({
    _id: req.body.id,
    storeid: req.body.id,
    barcode: req.body.barcode,
    productname: req.body.productname,
    // brandName:  req.body.brandName,
    productSize: req.body.productSize,
    price: req.body.price,
    quant: req.body.quant,
    imageurl: req.body.imageurl,
    remaining: req.body.remaining
  });
  List.updateOne({
    _id: para
  }, passData).then(function (document) {
    searchlist = document;
    res.status(200).json({
      message: 'success'
    });
  });
};

exports.allProducts = function (req, res, next) {
  console.log(req.userData);
  var pageSize = +req.query.size;
  var currentPage = +req.query.page;
  var postQuery = List.find({
    creator: req.userData.unique_SHOP
  });
  var fetchData, MaxPost;

  if (pageSize && currentPage) {
    postQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
  }

  postQuery.then(function (docs) {
    fetchData = docs;
    return List.countDocuments();
  }).then(function (count) {
    console.log(count);
    res.status(200).json({
      message: '200',
      list: fetchData,
      max: count
    });
  });
};