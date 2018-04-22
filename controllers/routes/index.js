var express = require('express');
var router = express.Router();
var authRoutes = require("./auth")


router.use('/auth', authRoutes);

module.exports = router;