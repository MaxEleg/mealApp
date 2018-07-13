module.exports = {
  "test auth" : function (browser) {
    browser
      .url('http://localhost:3000/')
      .waitForElementVisible('body', 10000)
      .click('#account-menu-item')
      .click('#connect-user-item')
      .assert.containsText('h1', "S'authentifier")
      .setValue('input[name=account]', 'nightwatch')
      .setValue('input[name=password]', 'nightwatch')
      .click('button[type=submit]')
      .assert.containsText('h1', 'Vous etes connecté en tant que nightwatch nightwatch')
      .pause(1500)
      .end();
  }
};
