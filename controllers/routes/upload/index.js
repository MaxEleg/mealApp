var express = require("express");
var routerUpload = express.Router();
var models = require("../../../models");
var multer = require("multer");

var storage = multer.diskStorage({
  // destination
  destination: function (req, file, cb) {
    console.log(req.query.token);
    cb(null, './public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + '.png');
  }
});
var upload = multer({ storage: storage });

routerUpload.post("/", upload.array("uploads[]", 1), function (req, res) {
  console.log('files', req.files);
  res.send(req.files);
});


module.exports = routerUpload;