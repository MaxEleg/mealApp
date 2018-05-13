var express = require('express');
var router = express.Router();
var accountRoutes = require("./account");
var mealRoutes = require("./meal");
var orderRoutes = require("./order");

router.use('/account', accountRoutes);
router.use('/meals', mealRoutes);
router.use('/order', orderRoutes);

module.exports = router;