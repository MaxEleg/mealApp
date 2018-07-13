module.exports = {
  'test index rendering' : function (browser) {
    browser
      .url('http://localhost:3000/')
      .waitForElementVisible('body', 1000)
      .assert.containsText('#main-title', 'LunchCloud')
      .end();
  }
};