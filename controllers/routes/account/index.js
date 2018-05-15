var express = require("express");
var routerAccount = express.Router();
var register = require("./register");
var auth = require("./auth");
var edit = require("./edit");
var info = require("./info");

var userMiddleWare = require("../../lib/middlewares/logged");

routerAccount.use('/edit', userMiddleWare(0));
routerAccount.use('/token', userMiddleWare(0));

routerAccount.post("/register", register);
routerAccount.post("/auth", auth);
routerAccount.post("/edit", edit);
routerAccount.post("/info", info);

module.exports = routerAccount;