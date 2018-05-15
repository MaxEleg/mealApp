var sendMail = require("./controllers/lib/contact/mail");

var data = {
  from : 'burgerapi@hotmail.com',
  to : ['reyzos@hotmail.fr', 'burgerapi@hotmail.com'],
  mail:{
    text: "lol!",
    html: "<b>lol!</b>"
  }
};
sendMail(data,function(err, result){
  if(err){
    console.log(err);
  }
  if(result){
    console.log(result);
  }
});