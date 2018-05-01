var express = require("express");
var routerAccount = express.Router();
var register = require("./register");
var auth = require("./auth");

routerAccount.post("/register", register);
routerAccount.post("/auth", auth);

module.exports = routerAccount;