module.exports = {
  "test add meal to basket and checkout" : function (browser) {
    var testApp = require("../test/factory/testApp");
    testApp().then(function(app){
      app.models.Meal.find({
        $or: [{ name: 'nightmeal1'},{ name: 'nightmeal2'}]
      },function(err,results){
        console.log(results[0]._id, results[1]._id);
        browser
          .url('http://localhost:3000/')
          .waitForElementVisible('body', 10000)
          .pause(1500)
          .click('#meal-' + results[0]._id)
          .click('#meal-' + results[1]._id)
          .click('#account-menu-item')
          .click('#connect-user-item')
          .assert.containsText('h1', "S'authentifier")
          .setValue('input[name=account]', 'nightwatch')
          .setValue('input[name=password]', 'nightwatch')
          .click('button[type=submit]')
          .pause(3500)
          .click('#main-logo')
          .end();
      });
    });
  }
};
