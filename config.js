var dotenv = require('dotenv');
dotenv.load();

module.exports = {
	secretJwt : process.env.JWT_SECRET,
	database : process.env.DATABASE,
	port : process.env.PORT,
	portHttps : process.env.PORT+1,
  app_url : process.env.APP_URL,
	openApi : process.env.OPEN_API === 'true',
	smtpHost : process.env.SMTP_HOST,
	smtpPort : process.env.SMTP_PORT,
	smtpUser : process.env.SMTP_USER,
	smtpPass : process.env.SMTP_PASS
};
