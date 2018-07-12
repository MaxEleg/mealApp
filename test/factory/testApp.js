var mongoose = require("mongoose");
var config = require("../../config");

var Response = function(){};
Response.prototype.status = function(status){
  this.statusCode = status;
  return this;
};

Response.prototype.json = function(obj){
  console.log(obj);
  return this;
};

module.exports = function initialize(){
  mongoose.connect(config.database);

  var db = mongoose.connection;

  return new Promise(function(resolve, reject) {
    db.on('error', function(err){
      reject(err);
    });

    db.once('open', function() {
      resolve({
        res: new Response(),
        models: require('../../models/')
      });
    });

  });
};