var express = require('express');
var router = express.Router();
var accountRoutes = require("./account");
var mealRoutes = require("./meal");
var orderRoutes = require("./order");
var adminoutes = require("./admin");

router.use('/account', accountRoutes);
router.use('/meals', mealRoutes);
router.use('/order', orderRoutes);
router.use('/admin', adminoutes);

module.exports = router;