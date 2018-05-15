var app = require("../app");
var config = require("../config");
var mongoose = require("mongoose");

try{
  app.listen(config.port, function(){
    console.log("SERVER LISTEN ON PORT " + config.port);
    console.log("APP URL : " + config.app_url);
  });

  mongoose.connect(config.database);
  var db = mongoose.connection;
  db.on('error', function(err){
    console.log("CAN CONNECT TO MONGODB SERVER : " + config.database);
    console.log(err);
    process.exit(1);
  });

  db.once('open', function() {
    console.log("CONNECT TO MONGODB SERVER SUCCESSFUL : " + config.database);
  });
} catch(ex){
  console.log(ex);
  process.exit(1);
}