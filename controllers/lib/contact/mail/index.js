var nodemailer = require('nodemailer');
var config = require("../../../../config");

module.exports = function sendMail(data, cb){

  var transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: config.smtpPort,
    secure: false, // true for 465, false for other ports
    auth: {
      user: config.smtpUser, // generated ethereal user
      pass: config.smtpPass // generated ethereal password
    }
  });

  var mailOptions = {
    from: '"Burger API" ' + data.from, // sender address
    to: data.to.join(','), // list of receivers
    subject: data.subject, // Subject line
    text: data.mail.text, // plain text body
    html: data.mail.html // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions,function (error, info) {
    if (error) {
      console.log(error);
      cb(error);
      return;
    }
    console.log('mail send to ' + data.to.join(','));
    cb(null,info);
  });
};