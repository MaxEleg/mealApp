var dotenv = require('dotenv');
dotenv.load();

module.exports = {
	secretJwt : process.env.JWT_SECRET,
	database : process.env.DATABASE,
	port : process.env.PORT,
	portHttps : process.env.PORT+1,
  app_url : process.env.APP_URL
}
