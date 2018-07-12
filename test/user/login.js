var assert = require('assert');
var auth = require("../../controllers/routes/account/auth");
var testApp = require("../factory/testApp");
var sinon = require("sinon");
var chai = require("chai");

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


  it('check if account exists ',async function() {

    app = await testApp();
    UserModel = app.models.User;
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
    await user.save();

    console.log(UserModel.remove({username: username}));
  });

  after(async function () {
    await UserModel.remove({username: username});
    console.log("finished");
  });
});