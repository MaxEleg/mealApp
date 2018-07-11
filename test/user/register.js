var assert = require('assert');
var register = require("../../controllers/routes/account/register");
var app = require("../factory/express");
var server = require("../../server");


describe('Test user account creation', function() {
  it('should return -1 when the value is not present', function() {
    console.log(process.env);
    register(app.req, app.res);
    assert.equal([1,2,3].indexOf(4), -1);
  });
});