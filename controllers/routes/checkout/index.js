var express = require("express");
var routerCheckout = express.Router();
var stripe = require('stripe')(process.env.STRIPE_KEY);
var swig = require('swig');
var http = require('https');
var unirest= require('unirest');


routerCheckout.get('/', function(req, res){
  var data = {title: 'Payer'};
  res.render('index', data);
});


routerCheckout.post('/stripe', function(req, res){
	unirest.post(process.env.NOODLIO_CREATE)
    .header("X-Mashape-Key", process.env.MASHAPE_KEY)
    .header("Content-Type", "application/x-www-form-urlencoded")
    .header("Accept", "application/json")
    .send("cvc="+req.body.cvc)
    .send("exp_month="+req.body.exp_month)
    .send("exp_year="+req.body.exp_year)
    .send("number="+req.body.number)
    .send("test=true")
    .end(function (result) {
      console.log(result.status, result.headers, result.body);

      unirest.post(process.env.NOODLIO_PROCESS)
        .header("X-Mashape-Key", process.env.MASHAPE_KEY)
        .header("Content-Type", "application/x-www-form-urlencoded")
        .header("Accept", "application/json")
        .send("amount="+req.body.article * 100)
        .send("currency=EUR")
        .send("description=Burger")
        .send("source="+result.body.id)
        .send("stripe_account="+process.env.STRIPE_ACCOUNT)
        .send("test=true")
        .end(function (result) {
          console.log(result.status, result.headers, result.body);
          if(result.status > 299){
            res.status(400).json({msg:"An error occured"});
            return;
          }
          res.json({msg:"Payment Ok"});
        });
    });
});

module.exports = routerCheckout;