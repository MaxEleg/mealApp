var chromedriver = require('chromedriver');
var testApp = require("./test/factory/testApp");

var initDb = async function (){
  var app = await testApp();
  await app.models.User.remove({username: "nightwatch"})
};

var cleanDb = async function (){
  var app = await testApp();
  await app.models.User.remove({username: "nightwatch"})
};

module.exports = {
  before : function(done) {
    cleanDb();
    chromedriver.start();
    done();
  },

  after : function(done) {
    cleanDb();
    chromedriver.stop();
    done();
  }
};
