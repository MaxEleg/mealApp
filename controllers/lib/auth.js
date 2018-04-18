var config = require("../../config");
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

const decode = (token, callback) => {
   try {

      if (token) {
         var decoded = jwt.verify(token, config.key, function(err, decoded) {
         	var id = decoded._id.toString();
            User.findOne({
               _id: id
            }, function(err, user) {
               if (err) {
                  console.log(err);
                  callback(err);
                  return;
               }
               callback(null,user);
            });
         });
      } else {
         callback(new Error('no token provided'));
      }
   } catch (ex) {
      console.log(ex);
      callback(ex);
   }
}
module.exports = {
	jwt : {
		decode : decode
	}
}