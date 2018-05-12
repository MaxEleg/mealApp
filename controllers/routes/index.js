var express = require('express');
var router = express.Router();
var accountRoutes = require("./account");
var mealRoutes = require("./meal");

router.use('/account', accountRoutes);
router.use('/meals', mealRoutes);

module.exports = router;