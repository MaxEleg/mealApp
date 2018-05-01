var express = require('express');
var router = express.Router();
var authRoutes = require("./auth");
var accountRoutes = require("./account");

router.use('/auth', authRoutes);
router.use('/account', accountRoutes);

module.exports = router;