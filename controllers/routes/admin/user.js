var models = require("../../../models");

function getUsers (req,res){

  function _sendErr(err) {
    console.log(err);
    res.status(400).send({msg: 'Error occured'});
  }
  models.User.find({}, function(err, users){
    if(err){
      _sendErr(err);
      return;
    }
    res.json(users);
  });
};

function banUser (req,res){
  var id = req.body.id;
  console.log(id);
  function _sendErr(err) {
    console.log(err);
    res.status(400).send({msg: 'Error occured'});
  }
  models.User.findById(id, function(err, user){
    if(err){
      _sendErr(err);
      return;
    }
    user.banned = !user.banned;
    user.save(function(err, updatedUser){
      res.json(updatedUser);
    });
  });
};

module.exports = {
  getUsers: getUsers,
  banUser: banUser
};