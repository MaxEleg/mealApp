var express = require("express");
var routerAdmin = express.Router();
var order = require("./order");
var user = require("./user");
var meal = require("./meal");

var userMiddleWare = require("../../lib/middlewares/logged");

routerAdmin.use('/', userMiddleWare(3));

routerAdmin.get('/orders/', order.getOrders);
routerAdmin.post('/order/changeStatus', order.changeStatus);

routerAdmin.get('/users', user.getUsers);
routerAdmin.post('/user/ban', user.banUser);

routerAdmin.get('/meals', meal.getMeals);
routerAdmin.delete('/meal/:id', meal.deleteMeal);
routerAdmin.post('/meal', meal.addMeal);
routerAdmin.put('/meal/:id', meal.updateMeal);

module.exports = routerAdmin;