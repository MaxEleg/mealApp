var token = require("../../lib/token");
var models = require("../../../models");

function info (req,res){
  var tokenEncode = req.body.token;

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
      res.json({
        firstName : user.firstName,
        lastName: user.lastName,
        rank: user.rank,
        phone: user.phone,
        mail: user.mail
      });
    });
  });
};

module.exports = info;