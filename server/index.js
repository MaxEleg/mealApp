var app = require("../app");
var config = require("../config");

app.listen(config.port, function(){
    console.log("Server listen on port " + config.port);
});