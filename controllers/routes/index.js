var express = require('express');
var router = express.Router();
var accountRoutes = require("./account");
var mealRoutes = require("./meal");
var checkoutRoutes = require("./checkout"); 
var orderRoutes = require("./order");
var adminoutes = require("./admin");

router.use('/checkout', checkoutRoutes);
router.use('/account', accountRoutes);
router.use('/meals', mealRoutes);
router.use('/order', orderRoutes);
router.use('/admin', adminoutes);

module.exports = router;