module.exports = {
  "auth with admin account" : function (browser) {

    var testApp = require("../test/factory/testApp");
    testApp().then(async function(app){
      try {
        var user = await app.models.User.findOne({username: "nightwatch"});
        var order = await app.models.Order.findOne({userId: user._id});
        browser
          .url('http://localhost:3000/')
          .waitForElementVisible('body', 10000)
          .click('#account-menu-item')
          .pause(500)
          .click('#connect-user-item')
          .pause(1500)
          .assert.containsText('h1', "S'authentifier")
          .setValue('input[name=account]', 'AdminNightWatch')
          .setValue('input[name=password]', 'AdminNightwatch123')
          .click('button[type=submit]')
          .pause(1500)
          .assert.containsText('#logged-txt', 'Vous etes connecté en tant que AdminNightWatch AdminNightWatch')
          .click('#userDropDown')
          .pause(1500)
          .click('#backoffice-item')
          .pause(4500)
          //.assert.containsText('#order-item-name-' + order._id, 'nightmeal1')
          //.assert.containsText('#order-item-name-' + order._id, 'nightmeal2')
          .end();
      }catch(ex) {
        console.log(ex);
      }
    });
  }
};
