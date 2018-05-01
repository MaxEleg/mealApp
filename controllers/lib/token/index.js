var config = require("../../../config");
var jwt = require('jsonwebtoken');

const _encode = function(data, callback){
  try{
    var encoded = jwt.sign(data, config.secretJwt, {expiresIn : "61d" });
    callback(null, encoded);
  }catch(ex){
    console.log(ex);
    callback(ex);
  }
};

const _decode = function (token, callback) {
  try {
    if (token) {
      jwt.verify(token, config.secretJwt, function(err, decoded) {
        if(err){
          console.log(err);
          callback(err);
          return;
        }
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