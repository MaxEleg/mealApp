var token = require("../../lib/token");
var models = require("../../../models");

function edit (req,res){
  var tokenEncode = req.body.token;
  var data = req.body;

  function _sendErr(err){
    console.log(err);
    res.status(400).json({msg: "Une erreur s'est produite."});
  }

  token.decode(tokenEncode, function(err, decoded){
    if(err){
      _sendErr(err);
      return;
    }
    models.User.findOne({username : decoded.username}, function(err2, user){
      if(err2){
        _sendErr(err);
        return;
      }
      user.lastName = data.lastName;
      user.firstName = data.firstName;
      user.phone = data.phone;
      user.mail = data.mail;
      user.save(function(err,updatedUser){
        if(err){
          _sendErr(err);
        }
        res.json({msg : 'OK'});
      });
    });
  });
};

module.exports = edit;