var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({
  username  	: { type : String, required : "Le nom d'utilisateur entré est invalide.", unique : true },
  password  	: { type : String, required : "Veuillez entrer un mot de passe." },
  lastname  	: { type : String, required : "Veuillez entrer votre nom." },
  firstname 	: { type : String, required : "Veuillez rentrer votre prénom." },
  birthdate 	: { type : String, required : false },
  mail      	: { type : String, required : "Le mail entré est invalide.", unique : true },
  rank      	: { type : Number, required : true },
  banned      : { type : Boolean,required : false },
  basket      : { type : Array,required : false, default:[] },
});

userSchema.pre('save',function(next){
  var user = this;

  if(this.isModified("password") || this.isNew){
    bcrypt.genSalt(10, function(err,salt){
      if(err){
        return next(err);
      }
      else{
        bcrypt.hash(user.password, salt,null, function(err, hash){
          if(err){
            return next(err);
          }
          else{
            user.password = hash;
            next();
          }
        });
      }
    });
  }else{
    next();
  }
});

userSchema.methods.comparePassword = function(passwd, cb){
  bcrypt.compare(passwd, this.password, function(err, isMatch){
    if(err){
      return cb(err);
    }
    else{
      cb(null, isMatch);
    }
  });
}

module.exports = mongoose.model('users', userSchema);
