var config = require("../../../config");
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');


const _encode = function(data, callback){
  try{
    var encoded = jwt.sign(data, config.key);
    callback(null, encoded);
  }catch(ex){
    console.log(ex);
    callback(ex);
  }
};

const _decode = function (token, callback) {
  try {
    if (token) {
      var decoded = jwt.verify(token, config.key, function(err, decoded) {
        callback(null,decoded);
      });
    } else {
      callback(new Error('no token provided'));
    }
  } catch (ex) {
    console.log(ex);
    callback(ex);
  }
};

module.exports = {
    encode : _encode,
    decode : _decode
}