var assert = require('assert');
var register = require("../../controllers/routes/account/register");
var testApp = require("../factory/testApp");
var sinon = require("sinon");

describe('Test user account creation', function() {
  var app;
  var res;
  var mail = "melegbe@outlook.fr";
  var phone = "+33635471091";
  var lastName = "Elegbe";
  var firstName = "Maximilien";

  before(async function() {
    app = await testApp();
    res = app.res;
  });

  it('should say bad email', function() {
    var spyJson = sinon.spy(res, "json");
    var spyStatus = sinon.spy(res, "status");
    register({body:{}}, res);
    assert(spyJson.withArgs([ { msg: 'Le mail est incorrect.' } ]).calledOnce);
    assert(spyStatus.withArgs(400).calledOnce);

    spyJson.restore();
    spyStatus.restore();
  });

  it('should say bad account length', function() {
    var spyJson = sinon.spy(res, "json");
    var spyStatus = sinon.spy(res, "status");
    var body = {
      mail: mail,
      username: 'aze',
      phone: phone
    };
    register({body: body}, res);
    assert(spyJson.withArgs([{ msg: 'La taille du nom de compte est minimum 4 caractères.' }])
      .calledOnce);
    assert(spyStatus.withArgs(400).calledOnce);

    spyJson.restore();
    spyStatus.restore();
  });
});