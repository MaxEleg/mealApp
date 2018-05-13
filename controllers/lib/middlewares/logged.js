var token = require("../token");
var models = require("../../../models");

module.exports = function(userRank) {
  return function (req, res, next) {
    var encodedToken = req.body.token || req.query.token;

    if (!encodedToken) {
      res.status(400).json({"msg": "Merci de vous connecter pour accéder à cette fonctionalité."});
      return;
    }
    token.decode(encodedToken, function (err, decodedTokenUser) {
      if (err) {
        res.status(400).json({"msg": "Une erreur est survenue, veillez réessayer ultérieurement."});
      }
      models.User.findById(decodedTokenUser._id, function (err, user) {
        if(!decodedTokenUser.username === user.username && decodedTokenUser.password === user.password){
          res.status(400).json({"msg": "Token incorrect"});
          return;
        }
        if (user.rank >= userRank){
          req.body.user = user;
          req.query.user = user;
          next();
          return;
        }
        res.status(400).json({"msg": "Vous n'avez pas les droits pour accéder à cette fonctionalité."});
        return;
      });
    });
  };
};
