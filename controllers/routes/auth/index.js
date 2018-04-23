var authControllers = require("../../lib/auth");

var express = require("express");

var routerAuth = express.Router();

routerAuth.get("/", function(req,res){
  res.json(models);
});

module.exports = routerAuth;