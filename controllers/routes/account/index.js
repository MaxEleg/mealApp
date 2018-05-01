var express = require("express");
var models = require("../../../models");
var routerAuth = express.Router();
var token = require("../../lib/token");
var models = require("../../../models");

routerAuth.post("/", function(req,res){
  console.log("in auth");

  user.save(function(err){
    if(err){
      console.log(err);
    }
  });

  function _sendError(){
    res.status(400).json({msg : "Une erreur s'est produite."});
  };
  function _sendAuthFailed(){
    res.json({msg:"Utilisateur introuvable, merci de vérifier votre nom de compte/email et mot de passe"});
  };

  var data = req.body;
  var query = {};
  query['$or'] = [];
  query['$or'].push({ 'username' : data.account });
  query['$or'].push({ 'mail' : data.account });

  models.User.findOne(query,function(user){
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
              res.status(200).json(encoded);
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

});

module.exports = routerAuth;