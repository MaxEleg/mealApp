var chromedriver = require('chromedriver');
var testApp = require("./test/factory/testApp");

var initDb = async function (){
  var app = await testApp();
  await app.models.User.remove({username: "nightwatch"})

  var nightmeal1 = new app.models.Meal({
    name: "nightmeal1",
    price: 5.5,
    description: "nightmeal1 description",
    createdAt: new Date()
  });
  var nightmeal2 = app.models.Meal({
    name: "nightmeal2",
    price: 4.5,
    description: "nightmeal2 description",
    createdAt: new Date()
  });

  await nightmeal1.save();
  await nightmeal2.save();
};

var cleanDb = async function (){
  var app = await testApp();
  await app.models.User.remove({username: "nightwatch"});
  await app.models.Meal.remove({name: "nightmeal1"});

  await app.models.Meal.remove({name: "nightmeal2"});
};

module.exports = {
  before : function(done) {
    initDb();
    chromedriver.start();
    done();
  },

  after : function(done) {
    cleanDb();
    chromedriver.stop();
    done();
  }
};
