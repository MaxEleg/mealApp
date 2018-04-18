var dotenv = require('dotenv');
dotenv.load();

module.exports = {
	key : process.env.JWT_SECRET,
	database : process.env.DATABASE,
	portHttp : process.env.PORT,
	portHttps : process.env.PORT+1,
}
