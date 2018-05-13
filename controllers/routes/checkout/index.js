var express = require("express");
var routerCheckout = express.Router();
var stripe = require('stripe')('sk_test_hXAaFjeoqZel78tKM3ICHWYQ');
var swig = require('swig');
var http = require('https');
var unirest= require('unirest');
var sleep = require('sleep');


routerCheckout.get('/', function(req, res){
	var data = {title: 'Payer avec Stripe et Node js'};
	res.render('index', data);
});


routerCheckout.post('/stripe', function(req, res){
	let stripeToken = '';

	unirest.post("https://noodlio-pay.p.mashape.com/tokens/create")
	.header("X-Mashape-Key", "aUlQBnsmARmshw2loSTw7Yg996JJp1AkvpxjsndZDw6TIavs95")
	.header("Content-Type", "application/x-www-form-urlencoded")
	.header("Accept", "application/json")
	.send("cvc="+req.body.cvc)
	.send("exp_month="+req.body.exp_month)
	.send("exp_year="+req.body.exp_year)
	.send("number="+req.body.number)
	.send("test=true")
	.end(function (result) {
  	console.log(result.status, result.headers, result.body);
  		
		unirest.post("https://noodlio-pay.p.mashape.com/charge/token")
		.header("X-Mashape-Key", "aUlQBnsmARmshw2loSTw7Yg996JJp1AkvpxjsndZDw6TIavs95")
		.header("Content-Type", "application/x-www-form-urlencoded")
		.header("Accept", "application/json")
		.send("amount="+req.body.article * 100)
		.send("currency=EUR")
		.send("description=Burger")
		.send("source="+result.body.id)
		.send("stripe_account=acct_12abcDEF34GhIJ5K")
		.send("test=true")
		.end(function (result) {
	 	console.log(result.status, result.headers, result.body);
		});
	});
});

module.exports = routerCheckout;