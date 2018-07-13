module.exports = {
  "test register" : function (browser) {
    browser
      .url('http://localhost:3000/')
      .waitForElementVisible('body', 10000)
      .click('#account-menu-item')
      .pause(500)
      .click('#regiser-user-item')
      .assert.containsText('h2', 'Créer un compte')
      .setValue('input[name=lastName]', 'nightwatch')
      .setValue('input[name=firstName]', 'nightwatch')
      .setValue('input[name=username]', 'nightwatch')
      .setValue('input[name=password]', 'nightwatch')
      .setValue('input[name=confirmPassword]', 'nightwatch')
      .setValue('input[name=mail]', 'nightwatch@nightwatch.fr')
      .setValue('input[name=phone]', '+36666666666666')
      .click('button[type=submit]')
      .pause(1500)
      .assert.containsText('h1', 'Vous etes connecté en tant que nightwatch nightwatch')
      .end();
  },
  "test auth" : function (browser) {
    browser
      .url('http://localhost:3000/')
      .waitForElementVisible('body', 10000)
      .click('#account-menu-item')
      .pause(500)
      .click('#connect-user-item')
      .pause(1500)
      .assert.containsText('h1', "S'authentifier")
      .setValue('input[name=account]', 'nightwatch')
      .setValue('input[name=password]', 'nightwatch')
      .click('button[type=submit]')
      .assert.containsText('h1', 'Vous etes connecté en tant que nightwatch nightwatch')
      .pause(1500)
      .end();
  }
};
