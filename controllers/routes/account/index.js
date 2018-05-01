var express = require("express");
var routerAccount = express.Router();
var register = require("./register");

routerAccount.post("/register", register);

module.exports = routerAccount;