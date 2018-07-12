var token = require("../../lib/token");
var models = require("../../../models");

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function register (req,res){
  function _sendErr(errors){
    res.status(400).json(errors);
  }

  var data = req.body;
  var errors = [];
  var user = new models.User(data);
  user.banned = false;
  user.createdAt = new Date();
  user.rank = 0;

  if(user.username && user.username.length < 4){
    errors.push({ msg : "La taille du nom de compte est minimum 4 caractères."});
  }
  if(user.password && user.password.length < 4){
    errors.push({ msg : "La taille du mot de mot de passe est minimum 4 caractères."});
  }

  if(!validateEmail(user.mail)){
    errors.push({ msg : "Le mail est incorrect."});
  }

  if(errors.length){
    _sendErr(errors);
    return;
  }
  user.save(function(err,newUser){
    if(err){
      errorsSave = [];

      if(err.code === 11000){
        errorsSave.push({ msg: "Un compte a déjà été crée avec ce compte/adresse mail." });
      }
      if(err.errors){
        errorsSave.push({ msg: "Merci de remplir tous les champs." });
      }
      _sendErr(errorsSave);
      return;
    }
    token.encode(newUser.toObject(), function(err, tokenUser){
      if(err){
        res.status(400).json([{msg:'Une erreur est survenue.'}]);
        return;
      }
      res.status(200).json({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        rank: 0,
        token: tokenUser,
        phone: newUser.phone,
        mail: newUser.mail
      });
    });
  });
};

module.exports = register;