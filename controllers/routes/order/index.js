var express = require("express");
var routerCheckout = express.Router();
var models = require("../../../models");
var checkout = require('./checkout');

routerCheckout.post("/checkout",checkout);

module.exports = routerCheckout;