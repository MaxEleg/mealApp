var dotenv = require('dotenv');
dotenv.load();

module.exports = {
	key : process.env.JWT_SECRET,
	database : process.env.DATABASE,
	port : process.env.PORT,
	portHttps : process.env.PORT+1,
}
