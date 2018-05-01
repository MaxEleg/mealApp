var token = require("../../lib/token");
var models = require("../../../models");

function register (req,res){
  var data = req.body;
  function _sendErr(){
    res.status(400).json({ msg : "Une erreur s'est produite. "});
  }
  var user = new models.User(data);
  user.banned = false;
  user.createdAt = new Date();
  user.rank = 0;

  user.save(function(err,newUser){
    if(err){
      if(err.code == 11000){
        res.status(400).json({ msg: "Un compte a déjà été crée avec ce compte/adresse mail." });
        return;
      }
      if(err.errors){
        res.status(400).json({ msg: "Merci de remplir tous les champs." });
        return;
      }
      console.log(err);
      _sendErr();
      return;
    }
    token.encode(newUser.toObject(), function(err, tokenUser){
      if(err){
        _sendErr();
        return;
      }
      res.json({
        token : tokenUser
      });
    });
  })
};

module.exports = register;