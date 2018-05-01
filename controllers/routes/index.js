var express = require('express');
var router = express.Router();
var accountRoutes = require("./account");

router.use('/account', accountRoutes);

module.exports = router;