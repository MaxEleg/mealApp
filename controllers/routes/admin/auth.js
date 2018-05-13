var token = require("../../lib/token");
var models = require("../../../models");

function auth (req,res){
  function _sendError(){
    res.status(400).json({msg : "Une erreur s'est produite."});
  };
  function _sendAuthFailed(){
    res.status(400).json({msg:"Utilisateur introuvable, merci de vérifier votre nom de compte/email et mot de passe"});
  };

  var data = req.body;
  var query = {};
  query['$or'] = [];
  query['$or'].push({ 'username' : data.account });
  query['$or'].push({ 'mail' : data.account });

  models.User.findOne(query,function(err, user){
    if(err){
      console.log(err);
      _sendError();
      return;
    }
    if(user){
      user.comparePassword(data.password,function(err,isMatch){
        if(err){
          console.log(err);
          _sendError();
          return;
        }
        if(isMatch){
          token.encode(user.toObject(),
            function (err, encoded){
              if(err){
                _sendError();
                return;
              }
              res.status(200).json({
                firstName : user.firstName,
                lastName: user.lastName,
                rank: user.rank,
                token: encoded,
                phone: user.phone,
                mail: user.mail
              });
            });
        }else{
          _sendAuthFailed();
        }
      });
    }else{
      _sendAuthFailed();
      return;
    }
  });
};

module.exports = auth;