var chromedriver = require('chromedriver');
var testApp = require("./test/factory/testApp");

var initDb = async function (cb){
  try{
    var app = await testApp();

    var admin = new app.models.User({
      username  	: "AdminNightWatch",
      password  	: "AdminNightwatch123",
      lastName  	: "AdminNightWatch",
      firstName 	: "AdminNightWatch",
      mail      	: "admin@nightwatch.esgi",
      banned      : false,
      phone : "+33635471091",
      rank: 7
    });
    var nightmeal1 = new app.models.Meal({
      name: "nightmeal1",
      price: 5.5,
      description: "nightmeal1 description",
      createdAt: new Date()
    });
    var nightmeal2 = new app.models.Meal({
      name: "nightmeal2",
      price: 4.5,
      description: "nightmeal2 description",
      createdAt: new Date()
    });

    var promotion = new app.models.Promotion({
      code: "nightwatch10",
      value: 10,
      status: "UNUSED"
    });

    await nightmeal1.save();
    await nightmeal2.save();
    await admin.save();
    await promotion.save();

    console.log("DB INITIALIZED");
    if(typeof(cb) === "function"){
      cb();
    }
  } catch(ex){
    console.log(ex);
  }
};

var cleanDb = async function (cb){
  try{
    var app = await testApp();

    var user = await app.models.User.findOne({username: "nightwatch"});
    if(user){
      await app.models.Order.remove({userId: user._id});
    }
    await app.models.User.remove({username: "AdminNightWatch"});
    await app.models.User.remove({username: "nightwatch"});
    await app.models.Meal.remove({name: "nightmeal1"});
    await app.models.Meal.remove({name: "nightmeal2"});
    await app.models.Promotion.remove({code: "nightwatch10"});
    console.log("DB CLEANED");
    if(typeof(cb) === "function"){
      cb();
    }
  } catch(ex){
    console.log(ex);
  }
};

module.exports = {
  before : function(done) {
    cleanDb(initDb);
    chromedriver.start();
    done();
  },
  after : function(done) {
    cleanDb();
    chromedriver.stop();
    done();
  }
};
