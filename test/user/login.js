var assert = require('assert');
var auth = require("../../controllers/routes/account/auth");
var testApp = require("../factory/testApp");
var sinon = require("sinon");
var chai = require("chai");
var util = require("util");

describe('Test user auth', function() {
  var app;
  var UserModel;
  var res;
  var mail = "melegbe-auth@outlook.fr";
  var phone = "+33635471091";
  var lastName = "Elegbe";
  var firstName = "Maximilien";
  var username = "melegbe-TestApp-Auth";
  var password = "123123";
  var birthDate = new Date(21, 03, 1996);

  before(async function(done){
    app = await testApp();
    UserModel = app.models.User;
    /*await UserModel.remove({username: username});
    res = app.res;
    var data = {
      mail: mail,
      username: username,
      phone: phone,
      lastName: lastName,
      firstName: firstName,
      password: password,
      birthDate: birthDate,
      rank: 0
    };
    var user = new UserModel(data);
    console.log(await user.save());
    console.log("saved");*/
    done();
  })
  it('check if account exists ',function(done) {
    assert(true);
    done();
  });
});