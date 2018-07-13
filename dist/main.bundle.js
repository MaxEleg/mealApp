webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_card_card_component__ = __webpack_require__("./src/app/components/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_shopping_cart_shopping_cart_component__ = __webpack_require__("./src/app/components/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_checkout_cart_checkout_cart_component__ = __webpack_require__("./src/app/components/checkout-cart/checkout-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_edit_edit_component__ = __webpack_require__("./src/app/components/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_backoffice_backoffice_component__ = __webpack_require__("./src/app/components/backoffice/backoffice.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: '/card', pathMatch: 'full' },
    { path: 'card', component: __WEBPACK_IMPORTED_MODULE_2__components_card_card_component__["a" /* CardComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'shopping-cart', component: __WEBPACK_IMPORTED_MODULE_5__components_shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */] },
    { path: 'checkout-cart', component: __WEBPACK_IMPORTED_MODULE_6__components_checkout_cart_checkout_cart_component__["a" /* CheckoutCartComponent */] },
    { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_7__components_edit_edit_component__["a" /* EditComponent */] },
    { path: 'backoffice', component: __WEBPACK_IMPORTED_MODULE_8__components_backoffice_backoffice_component__["a" /* BackOfficeComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stores_cart_cart_reducer__ = __webpack_require__("./src/app/stores/cart/cart.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_auth_auth_reducer__ = __webpack_require__("./src/app/stores/auth/auth.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_root_root_component__ = __webpack_require__("./src/app/components/root/root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_nav_navbar_component__ = __webpack_require__("./src/app/components/nav/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_card_card_component__ = __webpack_require__("./src/app/components/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_shopping_cart_shopping_cart_component__ = __webpack_require__("./src/app/components/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_shopping_cart_items_shopping_cart_items_component__ = __webpack_require__("./src/app/components/shopping-cart-items/shopping-cart-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_checkout_cart_checkout_cart_component__ = __webpack_require__("./src/app/components/checkout-cart/checkout-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_account_account_service__ = __webpack_require__("./src/app/services/account/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_api_api_service__ = __webpack_require__("./src/app/services/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_edit_edit_component__ = __webpack_require__("./src/app/components/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_backoffice_backoffice_component__ = __webpack_require__("./src/app/components/backoffice/backoffice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_backoffice_orders_backoffice_orders_component__ = __webpack_require__("./src/app/components/backoffice-orders/backoffice-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_backoffice_users_backoffice_users_component__ = __webpack_require__("./src/app/components/backoffice-users/backoffice-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_backoffice_meals_backoffice_meals_component__ = __webpack_require__("./src/app/components/backoffice-meals/backoffice-meals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_backoffice_promotions_backoffice_promotions_component__ = __webpack_require__("./src/app/components/backoffice-promotions/backoffice-promotions.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__components_root_root_component__["a" /* RootComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_nav_navbar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_card_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_shopping_cart_items_shopping_cart_items_component__["a" /* ShoppingCartItemsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_checkout_cart_checkout_cart_component__["a" /* CheckoutCartComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_edit_edit_component__["a" /* EditComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_backoffice_backoffice_component__["a" /* BackOfficeComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_backoffice_orders_backoffice_orders_component__["a" /* BackOfficeOrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_backoffice_users_backoffice_users_component__["a" /* BackOfficeUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_backoffice_meals_backoffice_meals_component__["a" /* BackOfficeMealsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_backoffice_promotions_backoffice_promotions_component__["a" /* BackOfficePromotionsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* StoreModule */].forRoot({
                    cart: __WEBPACK_IMPORTED_MODULE_5__stores_cart_cart_reducer__["a" /* CartReducer */],
                    auth: __WEBPACK_IMPORTED_MODULE_6__stores_auth_auth_reducer__["a" /* AuthReducer */]
                })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__services_account_account_service__["a" /* AccountService */],
                __WEBPACK_IMPORTED_MODULE_18__services_api_api_service__["a" /* ApiService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__components_root_root_component__["a" /* RootComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/backoffice-meals/backoffice-meals.component.css":
/***/ (function(module, exports) {

module.exports = ".status-btn li{\r\n  list-style-type: none;\r\n  padding-bottom: 3px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/backoffice-meals/backoffice-meals.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"btn-group\" role=\"group\">\r\n    <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n      Actions\r\n    </button>\r\n    <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\">\r\n      <a (click)=\"fetchMeals()\" class=\"dropdown-item\">\r\n        Rafraichir\r\n      </a>\r\n      <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalNewMeal\">\r\n        Nouveau plat\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <table id=\"orders-list\" class=\"table table-dark\">\r\n    <thead>\r\n    <tr>\r\n      <th scope=\"col\">Nom</th>\r\n      <th scope=\"col\">Prix</th>\r\n      <th scope=\"col\">Actions</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let meal of meals\" id=\"order-item-{{ meal._id }}\">\r\n      <td id=\"order-item-name-{{ meal._id }}\">{{ meal.name }}</td>\r\n      <td id=\"order-item-price-{{ meal._id }}\">{{ meal.price }} {{ device}}</td>\r\n      <td>\r\n        <div class=\"btn-group\" role=\"group\">\r\n          <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            Actions\r\n          </button>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\">\r\n            <a class=\"dropdown-item\" (click)=\"setEdit(meal)\" data-toggle=\"modal\" data-target=\"#modalEditMeal\">\r\n              Editer\r\n            </a>\r\n            <a class=\"dropdown-item\" (click)=\"setEdit(meal)\" data-toggle=\"modal\" data-target=\"#modalChangeImage\">\r\n              Changer l'image\r\n            </a>\r\n            <a (click)=\"deleteMeal(meal)\" class=\"dropdown-item\">\r\n              Supprimer\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"modalEditMeal\" tabindex=\"1\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Editer le plat {{editMeal.name}}</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <form #registerForm=\"ngForm\" (ngSubmit)=\"editSubmit(registerForm.value)\" >\r\n        <div class=\"modal-body\">\r\n          <input name=\"id\" type=\"hidden\" [(ngModel)]=\"editMeal._id\" >\r\n          <div class=\"form-group\">\r\n            <label for=\"name\" class=\"col-form-label\">Nom:</label>\r\n            <input name=\"name\" type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"editMeal.name\" >\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"price\" class=\"col-form-label\">Prix:</label>\r\n            <input name=\"price\" type=\"text\" class=\"form-control\" id=\"price\" [(ngModel)]=\"editMeal.price\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"description\" class=\"col-form-label\">Description:</label>\r\n            <textarea name=\"description\" class=\"form-control\" id=\"description\" [(ngModel)]=\"editMeal.description\"></textarea>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fermer</button>\r\n          <button type=\"submit\" class=\"btn btn-primary\">\r\n            <i class=\"fas fa-save\"></i> Enregistrer\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"modalNewMeal\" tabindex=\"2\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n\r\n        <h5 class=\"modal-title\">Ajouter un plat</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <form #newForm=\"ngForm\" (ngSubmit)=\"newSubmit(newForm.value)\" >\r\n        <div class=\"modal-body\">\r\n          <div class=\"form-group\">\r\n            <label for=\"name\" class=\"col-form-label\">Nom:</label>\r\n            <input name=\"name\" type=\"text\" class=\"form-control\" ngModel>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"price\" class=\"col-form-label\">Prix:</label>\r\n            <input name=\"price\" type=\"text\" class=\"form-control\" ngModel>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"description\" class=\"col-form-label\">Description:</label>\r\n            <textarea name=\"description\" class=\"form-control\" ngModel></textarea>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fermer</button>\r\n          <button type=\"submit\" class=\"btn btn-primary\">\r\n            <i class=\"fas fa-save\"></i> Enregistrer\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"modalChangeImage\" tabindex=\"4\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Changer l'image de {{ editMeal.name }}</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"form-group\">\r\n            <input name=\"img\" type=\"file\" (change)=\"fileChangeEvent($event)\" class=\"form-control\">\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fermer</button>\r\n          <button (click)=\"uploadImage()\" type=\"button\" class=\"btn btn-primary\">\r\n            <i class=\"fas fa-save\"></i> Changer\r\n          </button>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/backoffice-meals/backoffice-meals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackOfficeMealsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_api_service__ = __webpack_require__("./src/app/services/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BackOfficeMealsComponent = /** @class */ (function () {
    function BackOfficeMealsComponent(apiService) {
        this.apiService = apiService;
        this.meals = [];
        this.editMeal = {};
        this.device = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].devise;
        this.filesToUpload = [];
    }
    BackOfficeMealsComponent.prototype.ngOnInit = function () {
        this.fetchMeals();
    };
    BackOfficeMealsComponent.prototype.fetchMeals = function () {
        var _this = this;
        this.apiService.fetchMeals().subscribe(function (meals) {
            _this.meals = meals;
        }, function (result) {
            alert(result.error.msg);
        });
    };
    BackOfficeMealsComponent.prototype.setEdit = function (meal) {
        this.editMeal = Object.assign({}, meal);
    };
    BackOfficeMealsComponent.prototype.editSubmit = function (data) {
        var _this = this;
        data.auth = this.auth;
        data.price = data.price.toString().replace(',', '.');
        this.apiService.changeMeal(data).subscribe(function (result) {
            _this.fetchMeals();
        }, function (result) {
            alert(result.error.msg);
        });
    };
    BackOfficeMealsComponent.prototype.deleteMeal = function (meal) {
        var _this = this;
        meal.auth = this.auth;
        this.apiService.deleteMeal(meal).subscribe(function (result) {
            _this.fetchMeals();
        }, function (result) {
            console.log(result);
            alert(result.error.msg);
        });
    };
    BackOfficeMealsComponent.prototype.newSubmit = function (newMeal) {
        var _this = this;
        newMeal.price = newMeal.price.toString().replace(',', '.');
        var data = {
            meal: newMeal,
            token: this.auth.token
        };
        this.apiService.createMeal(data).subscribe(function (result) {
            alert('Votre plat à bien été ajouté !');
            _this.fetchMeals();
        }, function (result) {
            console.log(result);
            alert(result.error.msg);
        });
    };
    BackOfficeMealsComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    BackOfficeMealsComponent.prototype.uploadImage = function () {
        this.apiService.uploadMealImage({
            auth: this.auth,
            img: this.filesToUpload,
            meal: this.editMeal
        }).subscribe(function (result) {
            alert("Vos changements on été pris en compte");
        }, function (result) {
            console.log(result.error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], BackOfficeMealsComponent.prototype, "auth", void 0);
    BackOfficeMealsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-backoffice-meals',
            template: __webpack_require__("./src/app/components/backoffice-meals/backoffice-meals.component.html"),
            styles: [__webpack_require__("./src/app/components/backoffice-meals/backoffice-meals.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_api_service__["a" /* ApiService */]])
    ], BackOfficeMealsComponent);
    return BackOfficeMealsComponent;
}());



/***/ }),

/***/ "./src/app/components/backoffice-orders/backoffice-orders.component.css":
/***/ (function(module, exports) {

module.exports = ".status-btn li{\r\n  list-style-type: none;\r\n  padding-bottom: 3px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/backoffice-orders/backoffice-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n    <button type=\"button\" (click)=\"fetchOrders()\" class=\"btn btn-secondary\">\r\n      <i class=\"fas fa-sync-alt\"></i> Rafraîchir\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <table class=\"table table-dark\">\r\n    <thead>\r\n    <tr>\r\n      <th scope=\"col\">Commande</th>\r\n      <th scope=\"col\">Prix total</th>\r\n      <th scope=\"col\">Livraison</th>\r\n      <th scope=\"col\">Statut</th>\r\n      <th scope=\"col\">Changer status</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let order of orders\">\r\n      <td>\r\n        <ul *ngFor=\"let meal of order.meals\">\r\n          {{ meal.name }}\r\n        </ul>\r\n      </td>\r\n      <td>{{ order.price }}{{device}}</td>\r\n      <td>\r\n        <p *ngIf=\"order.enableDelivery\">\r\n          {{order.address}}\r\n        </p>\r\n        <p *ngIf=\"!order.enableDelivery\">\r\n          Sans livraison\r\n        </p>\r\n      </td>\r\n      <td>{{ cleanStatus(order.status) }}</td>\r\n      <td>\r\n\r\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Actions\">\r\n          <div class=\"btn-group\" role=\"group\">\r\n            <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              Actions\r\n            </button>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\">\r\n              <a (click)=\"changeStatus(order._id, 'READY')\" class=\"dropdown-item\">\r\n                Mettre prête\r\n              </a>\r\n              <a (click)=\"changeStatus(order._id, 'WAITING')\" class=\"dropdown-item\">\r\n                Mettre en attente\r\n              </a>\r\n              <a (click)=\"changeStatus(order._id, 'ERROR')\" class=\"dropdown-item\">\r\n                Impossible a réaliser\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/components/backoffice-orders/backoffice-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackOfficeOrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_api_service__ = __webpack_require__("./src/app/services/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BackOfficeOrdersComponent = /** @class */ (function () {
    function BackOfficeOrdersComponent(apiService) {
        this.apiService = apiService;
        this.orders = [];
        this.device = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].devise;
    }
    BackOfficeOrdersComponent.prototype.ngOnInit = function () {
        this.fetchOrders();
    };
    BackOfficeOrdersComponent.prototype.fetchOrders = function () {
        var _this = this;
        this.apiService.fetchOrders(this.auth).subscribe(function (orders) {
            _this.orders = orders;
        }, function (result) {
            alert(result.error.msg);
        });
    };
    BackOfficeOrdersComponent.prototype.cleanStatus = function (status) {
        switch (status) {
            case 'WAITING':
                return 'En attente';
            case 'READY':
                return 'Prête';
            case 'ERROR': // case when there no more ingredient ...
                return 'Commande impossible à réaliser...';
        }
    };
    BackOfficeOrdersComponent.prototype.changeStatus = function (id, status) {
        var _this = this;
        this.apiService.changeOrderStatus({ id: id, status: status, auth: this.auth }).subscribe(function (result) {
            _this.fetchOrders();
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], BackOfficeOrdersComponent.prototype, "auth", void 0);
    BackOfficeOrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-backoffice-orders',
            template: __webpack_require__("./src/app/components/backoffice-orders/backoffice-orders.component.html"),
            styles: [__webpack_require__("./src/app/components/backoffice-orders/backoffice-orders.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_api_service__["a" /* ApiService */]])
    ], BackOfficeOrdersComponent);
    return BackOfficeOrdersComponent;
}());



/***/ }),

/***/ "./src/app/components/backoffice-promotions/backoffice-promotions.component.css":
/***/ (function(module, exports) {

module.exports = ".status-btn li{\r\n  list-style-type: none;\r\n  padding-bottom: 3px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/backoffice-promotions/backoffice-promotions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"btn-group\" role=\"group\">\r\n    <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n      Actions\r\n    </button>\r\n    <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\">\r\n      <a (click)=\"fetchPromotions()\" class=\"dropdown-item\">\r\n        Rafraichir\r\n      </a>\r\n      <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modalNewPromotion\">\r\n        Nouvelle promotion\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <table class=\"table table-dark\">\r\n    <thead>\r\n    <tr>\r\n      <th scope=\"col\">Code</th>\r\n      <th scope=\"col\">Valeur (%)</th>\r\n      <th scope=\"col\">Status</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let promotion of promotions\">\r\n      <td>{{ promotion.code }}</td>\r\n      <td>{{ promotion.value }}%</td>\r\n      <td>{{ promotion.status }}</td>\r\n      <td>\r\n        <div class=\"btn-group\" role=\"group\">\r\n          <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            Actions\r\n          </button>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\">\r\n            <a (click)=\"deletePromotion(promotion)\" class=\"dropdown-item\">\r\n              Supprimer\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"modalNewPromotion\" tabindex=\"3\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Nouvelle promotion :</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <form #registerForm=\"ngForm\" (ngSubmit)=\"submitPromotion(registerForm.value)\" >\r\n        <div class=\"modal-body\">\r\n          <div class=\"form-group\">\r\n            <label for=\"code\" class=\"col-form-label\">Code:</label>\r\n            <input name=\"code\" type=\"text\" class=\"form-control\" id=\"code\" ngModel>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"value\" class=\"col-form-label\">Valeur (%) :</label>\r\n            <input name=\"value\" type=\"text\" class=\"form-control\" id=\"value\" ngModel>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fermer</button>\r\n          <button type=\"submit\" class=\"btn btn-primary\">\r\n            <i class=\"fas fa-save\"></i> Enregistrer\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/backoffice-promotions/backoffice-promotions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackOfficePromotionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_api_service__ = __webpack_require__("./src/app/services/api/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackOfficePromotionsComponent = /** @class */ (function () {
    function BackOfficePromotionsComponent(apiService) {
        this.apiService = apiService;
        this.promotions = [];
    }
    BackOfficePromotionsComponent.prototype.ngOnInit = function () {
        this.fetchPromotions();
    };
    BackOfficePromotionsComponent.prototype.fetchPromotions = function () {
        var _this = this;
        this.apiService.fetchPromotions(this.auth).subscribe(function (promotions) {
            _this.promotions = promotions;
        }, function (result) {
            alert(result.error.msg);
        });
    };
    BackOfficePromotionsComponent.prototype.submitPromotion = function (promotion) {
        var _this = this;
        var data = {
            token: this.auth.token,
            promotion: promotion
        };
        console.log(data);
        this.apiService.createPromotion(data).subscribe(function (result) {
            _this.fetchPromotions();
        }, function (result) {
            alert(result.error.msg);
        });
    };
    BackOfficePromotionsComponent.prototype.deletePromotion = function (promotion) {
        var _this = this;
        promotion.auth = this.auth;
        this.apiService.deletePromotion(promotion).subscribe(function (result) {
            _this.fetchPromotions();
        }, function (result) {
            console.log(result);
            alert(result.error.msg);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], BackOfficePromotionsComponent.prototype, "auth", void 0);
    BackOfficePromotionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-backoffice-promotions',
            template: __webpack_require__("./src/app/components/backoffice-promotions/backoffice-promotions.component.html"),
            styles: [__webpack_require__("./src/app/components/backoffice-promotions/backoffice-promotions.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_api_service__["a" /* ApiService */]])
    ], BackOfficePromotionsComponent);
    return BackOfficePromotionsComponent;
}());



/***/ }),

/***/ "./src/app/components/backoffice-users/backoffice-users.component.css":
/***/ (function(module, exports) {

module.exports = ".status-btn li{\r\n  list-style-type: none;\r\n  padding-bottom: 3px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/backoffice-users/backoffice-users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n    <button type=\"button\" (click)=\"fetchUsers()\" class=\"btn btn-secondary\">\r\n      <i class=\"fas fa-sync-alt\"></i> Rafraîchir\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <table class=\"table table-dark\">\r\n    <thead>\r\n    <tr>\r\n      <th scope=\"col\">Nom Prénom</th>\r\n      <th scope=\"col\">Email</th>\r\n      <th scope=\"col\">Bannni</th>\r\n      <th scope=\"col\">Actions</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let user of users\">\r\n      <td>{{ user.firstName }} {{ user.lastName }}</td>\r\n      <td>{{ user.mail}}</td>\r\n      <td>{{ showBanned(user.banned) }}</td>\r\n      <td>\r\n        <ul class=\"status-btn\">\r\n          <li><button *ngIf=\"!user.banned\" (click)=\"changeBanned(user._id)\" type=\"button\" class=\"btn btn-success\">Bannir</button></li>\r\n          <li><button *ngIf=\"user.banned\" (click)=\"changeBanned(user._id)\" type=\"button\" class=\"btn btn-secondary\">Débannir</button></li>\r\n        </ul>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/components/backoffice-users/backoffice-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackOfficeUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_api_service__ = __webpack_require__("./src/app/services/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BackOfficeUsersComponent = /** @class */ (function () {
    function BackOfficeUsersComponent(apiService) {
        this.apiService = apiService;
        this.users = [];
        this.device = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].devise;
    }
    BackOfficeUsersComponent.prototype.ngOnInit = function () {
        this.fetchUsers();
    };
    BackOfficeUsersComponent.prototype.fetchUsers = function () {
        var _this = this;
        this.apiService.fetchUsers(this.auth).subscribe(function (users) {
            _this.users = users;
        }, function (result) {
            alert(result.error.msg);
        });
    };
    BackOfficeUsersComponent.prototype.showBanned = function (banned) {
        switch (banned) {
            case true:
                return 'Banni';
            case false:
                return 'Non banni';
            default: // case when there no more ingredient ...
                return 'Non banni';
        }
    };
    BackOfficeUsersComponent.prototype.changeBanned = function (id) {
        var _this = this;
        this.apiService.changeBanned({ id: id, auth: this.auth }).subscribe(function (result) {
            _this.fetchUsers();
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], BackOfficeUsersComponent.prototype, "auth", void 0);
    BackOfficeUsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-backoffice-users',
            template: __webpack_require__("./src/app/components/backoffice-users/backoffice-users.component.html"),
            styles: [__webpack_require__("./src/app/components/backoffice-users/backoffice-users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_api_service__["a" /* ApiService */]])
    ], BackOfficeUsersComponent);
    return BackOfficeUsersComponent;
}());



/***/ }),

/***/ "./src/app/components/backoffice/backoffice.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/backoffice/backoffice.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills mb-3\" id=\"pills-tab\" role=\"tablist\">\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link active\" id=\"pills-orders-tab\" data-toggle=\"pill\" href=\"#orders\" role=\"tab\" aria-controls=\"pills-home\" aria-selected=\"true\">\r\n      Les commandes\r\n    </a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" id=\"pills-users-tab\" data-toggle=\"pill\" href=\"#users\" role=\"tab\" aria-controls=\"pills-profile\" aria-selected=\"false\">\r\n      Les utilisateurs\r\n    </a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" id=\"pills-meals-tab\" data-toggle=\"pill\" href=\"#meals\" role=\"tab\" aria-controls=\"pills-contact\" aria-selected=\"false\">\r\n      Les plats\r\n    </a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" id=\"pills-promotions-tab\" data-toggle=\"pill\" href=\"#promotions\" role=\"tab\" aria-controls=\"pills-contact\" aria-selected=\"false\">\r\n      Les promotions\r\n    </a>\r\n  </li>\r\n</ul>\r\n<div class=\"tab-content\" id=\"pills-tabContent\">\r\n  <div class=\"tab-pane fade show active\" id=\"orders\" role=\"tabpanel\" aria-labelledby=\"pills-home-tab\">\r\n    <app-backoffice-orders [auth]=\"auth\"></app-backoffice-orders>\r\n  </div>\r\n  <div class=\"tab-pane fade\" id=\"users\" role=\"tabpanel\" aria-labelledby=\"pills-profile-tab\">\r\n    <app-backoffice-users [auth]=\"auth\"></app-backoffice-users>\r\n  </div>\r\n  <div class=\"tab-pane fade\" id=\"meals\" role=\"tabpanel\" aria-labelledby=\"pills-contact-tab\">\r\n    <app-backoffice-meals [auth]=\"auth\"></app-backoffice-meals>\r\n  </div>\r\n  <div class=\"tab-pane fade\" id=\"promotions\" role=\"tabpanel\" aria-labelledby=\"pills-contact-tab\">\r\n    <app-backoffice-promotions [auth]=\"auth\"></app-backoffice-promotions>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/backoffice/backoffice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackOfficeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_api_service__ = __webpack_require__("./src/app/services/api/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BackOfficeComponent = /** @class */ (function () {
    function BackOfficeComponent(apiService, store) {
        this.apiService = apiService;
        this.store = store;
    }
    BackOfficeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(function (state) { return state.auth; }).subscribe(function (auth) {
            _this.auth = auth;
        });
    };
    BackOfficeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-backoffice',
            template: __webpack_require__("./src/app/components/backoffice/backoffice.component.html"),
            styles: [__webpack_require__("./src/app/components/backoffice/backoffice.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], BackOfficeComponent);
    return BackOfficeComponent;
}());



/***/ }),

/***/ "./src/app/components/card/card.component.css":
/***/ (function(module, exports) {

module.exports = ".card-container{\r\n  padding-top: 40px;\r\n}\r\n\r\n.meal-card{\r\n  padding-bottom: 17px;\r\n}"

/***/ }),

/***/ "./src/app/components/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row card-container\">\r\n  <div class=\"col-sm-6 col-md-4 meal-card\" ng-if=\"meals.length > 0\" *ngFor=\"let meal of meals\">\r\n    <div class=\"card\" style=\"width: 18rem;\">\r\n      <img class=\"card-img-top\" [attr.src]=\"app_url + '/uploads/' + meal._id + '.png'\" [attr.alt]=\"meal.name\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">{{meal.name}} <span class=\"badge badge-success\">{{meal.price}}{{devise}}</span></h5>\r\n        <p class=\"card-text\">{{meal.description}}</p>\r\n        <button id=\"meal-{{ meal._id }}\" class=\"btn btn-primary\"\r\n                (click)=\"addMealToBasket(meal)\"\r\n                role=\"button\"\r\n                title=\"{{meal.name}}\">\r\n          Ajouter au panier\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_account_account_service__ = __webpack_require__("./src/app/services/account/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_api_service__ = __webpack_require__("./src/app/services/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_cart_cart_actions__ = __webpack_require__("./src/app/stores/cart/cart.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CardComponent = /** @class */ (function () {
    function CardComponent(accountService, apiService, store) {
        this.accountService = accountService;
        this.apiService = apiService;
        this.store = store;
        this.meals = [];
        this.devise = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].devise;
        this.app_url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].app_url;
        this.accountService = accountService;
    }
    CardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.fetchMeals().subscribe(function (meals) {
            _this.meals = meals;
        }, function (error) {
            console.log(error);
        });
    };
    CardComponent.prototype.addMealToBasket = function (meal) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__stores_cart_cart_actions__["b" /* AddMeal */](meal));
    };
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-card',
            template: __webpack_require__("./src/app/components/card/card.component.html"),
            styles: [__webpack_require__("./src/app/components/card/card.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_account_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_2__services_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* Store */]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/components/checkout-cart/checkout-cart.component.css":
/***/ (function(module, exports) {

module.exports = ".container-checkout{\r\n  padding-top: 30px;\r\n}\r\n.container-checkout h2{\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/checkout-cart/checkout-cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!order\" class=\"container-checkout\">\r\n\r\n  <h2>Payez votre commande</h2>\r\n  <form #checkoutForm=\"ngForm\" (ngSubmit)=\"onSubmit(checkoutForm.value)\" class=\"needs-validation\" novalidate=\"\">\r\n    <hr class=\"mb-4\">\r\n    <h4 class=\"mb-3\">A payer {{ total }}{{devise}}</h4>\r\n\r\n    <div class=\"mb-3\">\r\n      <label for=\"address\">Email</label>\r\n      <input name=\"mail\" type=\"text\" class=\"form-control\" id=\"mail\" placeholder=\"jean.dupont@esgi.fr\" ngModel>\r\n    </div>\r\n\r\n    <div class=\"mb-3\">\r\n      <label for=\"phone\">Téléphone</label>\r\n      <input name=\"phone\" type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"+336 35 00 00 00\" ngModel=\"\">\r\n    </div>\r\n\r\n    <div class=\"mb-3\">\r\n      <label for=\"address\">Adresse</label>\r\n      <input name=\"address\" type=\"text\" class=\"form-control\" id=\"address\"\r\n             placeholder=\"242 Rue du Faubourg Saint-Antoine, 75012 Paris\" ngModel>\r\n      <div class=\"custom-control custom-checkbox\">\r\n        <input name=\"enableDelivery\" type=\"checkbox\" class=\"custom-control-input\" id=\"same-address\" [checked]=\"false\" ngModel>\r\n        <label class=\"custom-control-label\" for=\"same-address\">Me livrer à cette adresse</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"mb-3\">\r\n      <label for=\"code\">Code promotionnel</label>\r\n      <input name=\"code\" type=\"text\" class=\"form-control\" id=\"code\" placeholder=\"XXXXX\" ngModel>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 mb-3\">\r\n        <label for=\"cc-name\">Nom </label>\r\n        <input name=\"cardName\" type=\"text\" class=\"form-control\" id=\"cc-name\" placeholder=\"\" required=\"\" ngModel>\r\n        <small class=\"text-muted\">Full name as displayed on card</small>\r\n        <div class=\"invalid-feedback\">\r\n          Name on card is required\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6 mb-3\">\r\n        <label for=\"cc-number\">Numéro de carte de crédit</label>\r\n        <input name=\"cardNumber\" type=\"text\" class=\"form-control\" id=\"cc-number\" placeholder=\"\" required=\"\" ngModel>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 mb-3\">\r\n        <label for=\"cc-expiration\">Expiration</label>\r\n        <input name=\"cardExpiration\" type=\"text\" class=\"form-control\" id=\"cc-expiration\" placeholder=\"MM/YY\" required=\"\" ngModel>\r\n      </div>\r\n      <div class=\"col-md-3 mb-3\">\r\n        <label for=\"cc-expiration\">CVV</label>\r\n        <input name=\"cvv\" type=\"text\" class=\"form-control\" id=\"cc-cvv\" placeholder=\"\" required=\"\" ngModel>\r\n      </div>\r\n    </div>\r\n    <hr class=\"mb-4\">\r\n    <button *ngIf=\"showPayBtn\" class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Payer</button>\r\n  </form>\r\n\r\n</div>\r\n<div *ngIf=\"order\" class=\"container-checkout\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n      <div class=\"card\">\r\n        <div id=\"order-result\" class=\"card-body\">\r\n          <h5 class=\"card-title\">Votre commande est passée ! </h5>\r\n          <p class=\"card-text\">Elle porte l'identifiant : <span id=\"order-id\">{{ order._id }}</span>.</p>\r\n          <a routerLink=\"/card\" class=\"btn btn-primary\">Retour à la liste des articles</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Récapitulatif :</h5>\r\n          <ul *ngFor=\"let meal of order.meals\" class=\"list-group\">\r\n            <li class=\"list-group-item\">{{ meal.name }}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/checkout-cart/checkout-cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutCartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_api_service__ = __webpack_require__("./src/app/services/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckoutCartComponent = /** @class */ (function () {
    function CheckoutCartComponent(apiService, store) {
        this.apiService = apiService;
        this.store = store;
        this.order = null;
        this.total = 0;
        this.devise = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].devise;
        this.showPayBtn = true;
    }
    CheckoutCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(function (state) {
            return state.cart;
        }).subscribe(function (meals) {
            _this.cart = meals;
            _this.calcTotal();
        });
        this.store.select(function (state) {
            return state.auth;
        }).subscribe(function (auth) {
            _this.auth = auth;
        });
    };
    CheckoutCartComponent.prototype.calcTotal = function () {
        var total = 0;
        this.cart.forEach(function (meal) {
            total += meal.price;
        });
        this.total = total;
    };
    CheckoutCartComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (!form.mail.length || !form.phone.length) {
            alert('Merci de saisir votre mail et numero de téléphone.');
            return;
        }
        this.showPayBtn = false;
        this.apiService.proceedCheckout({
            payment: form,
            auth: this.auth,
            cart: this.cart
        }).subscribe(function (result) {
            console.log(result);
            _this.order = result;
            _this.showPayBtn = true;
        }, function (result) {
            console.log(result);
            alert(result.error.msg);
            _this.showPayBtn = true;
        });
    };
    CheckoutCartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-checkout-cart',
            template: __webpack_require__("./src/app/components/checkout-cart/checkout-cart.component.html"),
            styles: [__webpack_require__("./src/app/components/checkout-cart/checkout-cart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]])
    ], CheckoutCartComponent);
    return CheckoutCartComponent;
}());



/***/ }),

/***/ "./src/app/components/edit/edit.component.css":
/***/ (function(module, exports) {

module.exports = ".errors-container{\r\n  padding-bottom: 8px;\r\n}\r\n\r\n.error {\r\n  color: red;\r\n}\r\n\r\n.already-auth{\r\n  padding-top: 30px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"auth.isAuth\" class=\"row\">\r\n  <div class=\"col-md-2\"></div>\r\n  <div class=\"col-md-8\">\r\n    <div class=\"py-5 text-center\">\r\n      <h2>Créer un compte</h2>\r\n      <p class=\"lead\">Créez vous un compte et passez votre première commande ! </p>\r\n    </div>\r\n\r\n    <div class=\"errors-container\">\r\n      <p class=\"error\" *ngFor=\"let error of errors\">\r\n        {{error.msg}}\r\n      </p>\r\n    </div>\r\n\r\n    <h4 class=\"mb-3\">Informations personnelle</h4>\r\n    <form #editForm=\"ngForm\" (ngSubmit)=\"onSubmit(editForm.value)\" >\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label for=\"firstName\">Nom </label>\r\n          <input name=\"lastName\" type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Dupont\" value=\"\" ngModel>\r\n        </div>\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label for=\"lastName\">Prénom</label>\r\n          <input name=\"firstName\" type=\"text\" class=\"form-control\" id=\"firstName\" value=\"\" placeholder=\"Jean\" ngModel>\r\n        </div>\r\n      </div>\r\n      <div class=\"mb-3\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\r\n          </div>\r\n          <input name=\"username\" type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Nom de compte ex : dupont.jean\" ngModel>\r\n        </div>\r\n      </div>\r\n      <div class=\"mb-3\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span>\r\n          </div>\r\n          <input name=\"password\" type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Mot de passe\" ngModel>\r\n          <input name=\"confirmPassword\" type=\"password\" class=\"form-control\" id=\"confirmPassword\" placeholder=\"Confirmez le mot de passe\" ngModel>\r\n        </div>\r\n      </div>\r\n      <hr class=\"mb-4\">\r\n      <div class=\"mb-3\">\r\n        <label for=\"mail\">Email <span class=\"text-muted\"></span></label>\r\n        <input name=\"mail\" type=\"text\" class=\"form-control\" id=\"mail\" placeholder=\"dupont.jean@esgi.com\" ngModel>\r\n      </div>\r\n      <div class=\"mb-3\">\r\n        <label for=\"phone\">Numéro de téléphone : </label>\r\n        <input name=\"phone\" type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"+33635000007\" ngModel>\r\n      </div>\r\n\r\n      <h4>Date de naissance</h4>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-5 mb-3\">\r\n          <label for=\"day\">Jour</label>\r\n          <input name=\"birthDay\" type=\"number\" class=\"form-control\" id=\"day\" placeholder=\"31\" ngModel>\r\n        </div>\r\n        <div class=\"col-md-4 mb-3\">\r\n          <label for=\"state\">Mois</label>\r\n          <select name=\"birthMonth\" class=\"custom-select d-block w-100\" id=\"state\" required=\"Selectionnez un mois\" ngModel>\r\n            <option value=\"0\">Mois</option>\r\n            <option value=\"1\">jan</option>\r\n            <option value=\"2\">fév</option>\r\n            <option value=\"3\">mar</option>\r\n            <option value=\"4\">avr</option>\r\n            <option value=\"5\">mai</option>\r\n            <option value=\"6\">jun</option>\r\n            <option value=\"7\">juil</option>\r\n            <option value=\"8\">aoû</option>\r\n            <option value=\"9\">sep</option>\r\n            <option value=\"10\">oct</option>\r\n            <option value=\"11\">nov</option>\r\n            <option value=\"12\">déc</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-md-3 mb-3\">\r\n          <label for=\"year\">Année</label>\r\n          <input name=\"birthYear\" type=\"number\" class=\"form-control\" id=\"year\" value=\"2000\" placeholder=\"YYYY\" ngModel>\r\n        </div>\r\n      </div>\r\n      <hr class=\"mb-4\">\r\n      <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">CREER MON COMPTE</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"!auth.isAuth\" class=\"row already-auth\">\r\n  <div class=\"col-xs-3 col-sm-4 col-md-4\"></div>\r\n  <div class=\"col-xs-3 col-sm-4 col-md-4\">\r\n    <h1 class=\"h3 mb-3 font-weight-normal\">Vous devez etre connecté pour accéder à cette interface.</h1>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_api_service__ = __webpack_require__("./src/app/services/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_auth_auth_actions__ = __webpack_require__("./src/app/stores/auth/auth.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditComponent = /** @class */ (function () {
    function EditComponent(apiService, store) {
        this.apiService = apiService;
        this.store = store;
        this.errors = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(function (state) {
            return state.auth;
        }).subscribe(function (auth) {
            _this.auth = auth;
        });
    };
    EditComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var newUser = form;
        this.errors = [];
        if (form.password !== form.confirmPassword) {
            this.errors.push({ msg: 'Le mot de passe de confirmation est inccorect.' });
            return;
        }
        newUser.birthDate = new Date(form.birthYear, form.birthMonth - 1, form.birthDay).getTime();
        this.apiService.createAccount(newUser).subscribe(function (result) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__stores_auth_auth_actions__["d" /* LoginIn */](result));
        }, function (result) {
            if (Array.isArray(result.error)) {
                _this.errors = result.error;
            }
            else {
                _this.errors = [result.error];
            }
        });
    };
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit',
            template: __webpack_require__("./src/app/components/edit/edit.component.html"),
            styles: [__webpack_require__("./src/app/components/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<footer class=\"my-5 pt-5 text-muted text-center text-small\">\r\n  <p class=\"mb-1\">© 2017-2018 ESGI Name</p>\r\n  <ul class=\"list-inline\">\r\n    <li class=\"list-inline-item\"><a href=\"#\">Privacy</a></li>\r\n    <li class=\"list-inline-item\"><a href=\"#\">Terms</a></li>\r\n    <li class=\"list-inline-item\"><a href=\"#\">Support</a></li>\r\n  </ul>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.form-signin {\r\n  width: 100%;\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n.form-signin .checkbox {\r\n  font-weight: 400;\r\n}\r\n.form-signin .form-control {\r\n  position: relative;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n.form-signin input[type=\"email\"] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n.form-signin input[type=\"password\"] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n.login-container{\r\n  text-align: center;\r\n}\r\n.login-logo{\r\n  text-align: center;\r\n}\r\n.error-msg{\r\n  color:red;\r\n}\r\n.already-auth{\r\n  padding-top: 30px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!auth.isAuth\" class=\"row login-container\">\r\n  <div class=\"col md-3\">\r\n    <form #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit(registerForm.value)\"  class=\"form-signin\">\r\n      <img class=\"mb-4 logo-top\"  src=\"./assets/images/burger.png\" alt=\"\" width=\"72\" height=\"72\">\r\n      <h1 class=\"h3 mb-3 font-weight-normal\">S'authentifier</h1>\r\n\r\n      <span class=\"error-msg\" *ngIf=\"error.length\">\r\n        {{ error }}\r\n      </span>\r\n\r\n      <label for=\"account\" class=\"sr-only\">Addresse email/ nom de compte</label>\r\n      <input type=\"account\" name=\"account\" id=\"account\" class=\"form-control\" placeholder=\"Addresse mail\" required autofocus ngModel>\r\n      <label for=\"inputPassword\" class=\"sr-only\">Mot de passe</label>\r\n      <input type=\"password\" id=\"inputPassword\" name=\"password\" class=\"form-control\" placeholder=\"Mot de passe\" required ngModel>\r\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Se connecter</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"auth.isAuth\" class=\"row already-auth\">\r\n  <div class=\"col-xs-3 col-sm-4 col-md-4\"></div>\r\n  <div class=\"col-xs-3 col-sm-4 col-md-4\">\r\n    <h1 id=\"logged-txt\" class=\"h3 mb-3 font-weight-normal\">Vous etes connecté en tant que {{ auth.lastName }} {{ auth.firstName }}</h1>\r\n    <button class=\"btn btn-lg btn-primary btn-block\" (click)=\"logout()\">Se déconnecter</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_api_service__ = __webpack_require__("./src/app/services/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_auth_auth_actions__ = __webpack_require__("./src/app/stores/auth/auth.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(apiService, store) {
        this.apiService = apiService;
        this.store = store;
        this.error = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(function (state) {
            return state.auth;
        }).subscribe(function (auth) {
            _this.auth = auth;
        });
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.error = '';
        this.apiService.auth(form).subscribe(function (auth) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__stores_auth_auth_actions__["d" /* LoginIn */](auth));
        }, function (err) {
            _this.error = err.error.msg;
        });
    };
    LoginComponent.prototype.logout = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__stores_auth_auth_actions__["c" /* LogOut */]());
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".logo-item{\r\n  padding-left: 5%;\r\n}\r\n#main-logo{\r\n  vertical-align: middle;\r\n  margin-bottom: 0.75em;\r\n  width: 40px;\r\n}\r\n.main-nav{\r\n  padding-top: 19px;\r\n  padding-bottom: 19px;\r\n}\r\n.right-nav-item{\r\n  padding-right: 60px;\r\n}\r\n.checkout{\r\n  background: #eceff6;\r\n  border-radius: 50%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  position: relative;\r\n  width: 40px;\r\n  height: 40px;\r\n  color: #1e1e27;\r\n  -webkit-transition: color 0.3s ease;\r\n  transition: color 0.3s ease;\r\n  background: #eceff6;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n}\r\n.checkout_items\r\n{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  position: absolute;\r\n  top: -9px;\r\n  left: 22px;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  background: #fe4c50;\r\n  font-size: 12px;\r\n  color: #FFFFFF;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/nav/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark main-nav\">\r\n  <a id=\"logo-container\" class=\"navbar-brand logo-item\" routerLink=\"/\">\r\n    <img id=\"main-logo\" src=\"./assets/images/burger.png\">\r\n    <span id=\"main-title\">LunchCloud</span>\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse right-nav-item\" id=\"navbarText\">\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"/card\">La carte</a>\r\n      </li>\r\n      <li id=\"account-menu-item\" class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropDown\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <i class=\"far fa-user\"></i>\r\n        </a>\r\n        <div class=\"dropdown-menu dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n          <a id=\"connect-user-item\" *ngIf=\"!auth.isAuth\" class=\"dropdown-item\" routerLink=\"/login\">Se connecter</a>\r\n          <a id=\"regiser-user-item\" *ngIf=\"!auth.isAuth\" class=\"dropdown-item\" routerLink=\"/register\">Créer un compte</a>\r\n\r\n          <a *ngIf=\"auth.isAuth\" class=\"dropdown-item\" routerLink=\"/\">Connecté en tant que {{ auth.lastName }} {{ auth.firstName }}</a>\r\n          <a *ngIf=\"auth.isAuth\" class=\"dropdown-item\" routerLink=\"/edit\">Editer mon profil</a>\r\n          <a id=\"backoffice-item\" *ngIf=\"auth.isAuth && auth.rank >= 3\" class=\"dropdown-item\" routerLink=\"/backoffice\">\r\n            Acceder au backoffice\r\n          </a>\r\n          <a class=\"dropdown-item\" *ngIf=\"auth.isAuth\" class=\"dropdown-item\" (click)=\"logout()\">Se déconnecter</a>\r\n        </div>\r\n      </li>\r\n      <li id=\"checkout-container\" class=\"nav-item\">\r\n        <a routerLink=\"/shopping-cart\" class=\"nav-link checkout\">\r\n          <i class=\"fa fa-shopping-cart\" style=\"color: black;\"></i>\r\n          <span *ngIf=\"cart.length\" id=\"checkout-items\" class=\"checkout_items\">{{ cart.length }}</span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/nav/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_auth_auth_actions__ = __webpack_require__("./src/app/stores/auth/auth.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(store) {
        this.store = store;
        this.cart = [];
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(function (state) {
            return state.cart;
        }).subscribe(function (meals) {
            _this.cart = meals;
        });
        this.store.select(function (state) {
            return state.auth;
        }).subscribe(function (auth) {
            _this.auth = auth;
        });
    };
    NavBarComponent.prototype.logout = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__stores_auth_auth_actions__["c" /* LogOut */]());
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/nav/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/nav/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".errors-container{\r\n  padding-bottom: 8px;\r\n}\r\n\r\n.error {\r\n  color: red;\r\n}\r\n\r\n.already-auth{\r\n  padding-top: 30px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!auth.isAuth\" class=\"row\">\r\n  <div class=\"col-md-2\"></div>\r\n  <div class=\"col-md-8\">\r\n    <div class=\"py-5 text-center\">\r\n      <h2>Créer un compte</h2>\r\n      <p class=\"lead\">Créez vous un compte et passez votre première commande ! </p>\r\n    </div>\r\n\r\n    <div class=\"errors-container\">\r\n      <p class=\"error\" *ngFor=\"let error of errors\">\r\n        {{error.msg}}\r\n      </p>\r\n    </div>\r\n\r\n    <h4 class=\"mb-3\">Informations personnelle</h4>\r\n    <form #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit(registerForm.value)\" >\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label for=\"lastName\">Nom </label>\r\n          <input name=\"lastName\" type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Dupont\" value=\"\" ngModel>\r\n        </div>\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label for=\"lastName\">Prénom</label>\r\n          <input name=\"firstName\" type=\"text\" class=\"form-control\" id=\"firstName\" value=\"\" placeholder=\"Jean\" ngModel>\r\n        </div>\r\n      </div>\r\n      <div class=\"mb-3\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\r\n          </div>\r\n          <input name=\"username\" type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Nom de compte ex : dupont.jean\" ngModel>\r\n        </div>\r\n      </div>\r\n      <div class=\"mb-3\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span>\r\n          </div>\r\n          <input name=\"password\" type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Mot de passe\" ngModel>\r\n          <input name=\"confirmPassword\" type=\"password\" class=\"form-control\" id=\"confirmPassword\" placeholder=\"Confirmez le mot de passe\" ngModel>\r\n        </div>\r\n      </div>\r\n      <hr class=\"mb-4\">\r\n      <div class=\"mb-3\">\r\n        <label for=\"mail\">Email <span class=\"text-muted\"></span></label>\r\n        <input name=\"mail\" type=\"text\" class=\"form-control\" id=\"mail\" placeholder=\"dupont.jean@esgi.com\" ngModel>\r\n      </div>\r\n      <div class=\"mb-3\">\r\n        <label for=\"phone\">Numéro de téléphone : </label>\r\n        <input name=\"phone\" type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"+33635000007\" ngModel>\r\n      </div>\r\n\r\n      <h4>Date de naissance</h4>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-5 mb-3\">\r\n          <label for=\"day\">Jour</label>\r\n          <input name=\"birthDay\" type=\"number\" min=\"1\" max=\"31\" class=\"form-control\" id=\"day\" placeholder=\"31\" ngModel>\r\n        </div>\r\n        <div class=\"col-md-4 mb-3\">\r\n          <label for=\"state\">Mois</label>\r\n          <select id=\"birthMonth\" name=\"birthMonth\" class=\"custom-select d-block w-100\" id=\"state\" required=\"Selectionnez un mois\" ngModel>\r\n            <option value=\"0\">Mois</option>\r\n            <option value=\"1\">jan</option>\r\n            <option value=\"2\">fév</option>\r\n            <option value=\"3\">mar</option>\r\n            <option value=\"4\">avr</option>\r\n            <option value=\"5\">mai</option>\r\n            <option value=\"6\">jun</option>\r\n            <option value=\"7\">juil</option>\r\n            <option value=\"8\">aoû</option>\r\n            <option value=\"9\">sep</option>\r\n            <option value=\"10\">oct</option>\r\n            <option value=\"11\">nov</option>\r\n            <option value=\"12\">déc</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-md-3 mb-3\">\r\n          <label for=\"year\">Année</label>\r\n          <input name=\"birthYear\" type=\"number\" class=\"form-control\" id=\"year\" value=\"2000\" placeholder=\"YYYY\" ngModel>\r\n        </div>\r\n      </div>\r\n      <hr class=\"mb-4\">\r\n      <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">CREER MON COMPTE</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"auth.isAuth\" class=\"row already-auth\">\r\n  <div class=\"col-xs-3 col-sm-4 col-md-4\"></div>\r\n  <div class=\"col-xs-3 col-sm-4 col-md-4\">\r\n    <h1 id=\"logged-register-txt\" class=\"h3 mb-3 font-weight-normal\">Vous etes connecté en tant que {{ auth.lastName }} {{ auth.firstName }}</h1>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_api_service__ = __webpack_require__("./src/app/services/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_auth_auth_actions__ = __webpack_require__("./src/app/stores/auth/auth.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(apiService, store) {
        this.apiService = apiService;
        this.store = store;
        this.errors = [];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(function (state) {
            return state.auth;
        }).subscribe(function (auth) {
            _this.auth = auth;
        });
    };
    RegisterComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var newUser = form;
        this.errors = [];
        if (form.password !== form.confirmPassword) {
            this.errors.push({ msg: 'Le mot de passe de confirmation est inccorect.' });
            return;
        }
        newUser.birthDate = new Date(form.birthYear, form.birthMonth - 1, form.birthDay).getTime();
        this.apiService.createAccount(newUser).subscribe(function (result) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__stores_auth_auth_actions__["d" /* LoginIn */](result));
        }, function (result) {
            if (Array.isArray(result.error)) {
                _this.errors = result.error;
            }
            else {
                _this.errors = [result.error];
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/root/root.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/components/root/root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_cart_cart_actions__ = __webpack_require__("./src/app/stores/cart/cart.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_auth_auth_actions__ = __webpack_require__("./src/app/stores/auth/auth.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RootComponent = /** @class */ (function () {
    function RootComponent(store) {
        this.store = store;
    }
    RootComponent.prototype.loadCartItems = function () {
        var _this = this;
        // We initiate cart store from last save
        var cartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (Array.isArray(cartItems)) {
            cartItems.forEach(function (meal) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__stores_cart_cart_actions__["b" /* AddMeal */](meal));
            });
        }
    };
    RootComponent.prototype.loadWebAuth = function () {
        // We initiate auth store from last save
        var authItem = JSON.parse(localStorage.getItem('authItem'));
        if (authItem && authItem.isAuth) {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__stores_auth_auth_actions__["d" /* LoginIn */](authItem));
        }
        else {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__stores_auth_auth_actions__["c" /* LogOut */]());
        }
    };
    RootComponent.prototype.ngOnInit = function () {
        this.loadCartItems();
        this.loadWebAuth();
    };
    RootComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/components/root/root.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], RootComponent);
    return RootComponent;
}());



/***/ }),

/***/ "./src/app/components/shopping-cart-items/shopping-cart-items.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shopping-cart-items/shopping-cart-items.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <h1>Ma commande</h1><hr>\r\n  <div class=\"col-lg-12\">\r\n    <table  class=\"table table-striped table-hover table-bordered\">\r\n      <tbody>\r\n      <tr>\r\n        <th>Article</th>\r\n        <th>Prix unitaire</th>\r\n        <th>Retirer</th>\r\n      </tr>\r\n      <tr *ngFor=\"let meal of cart;let i = index\">\r\n        <td>{{ meal.name }}</td>\r\n        <td>{{ meal.price }} {{ devise }}</td>\r\n        <td>\r\n          <button (click)=\"removeToBasket(i)\">\r\n            <i class=\"fas fa-trash-alt\"></i>\r\n          </button>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <th colspan=\"2\"><span class=\"pull-right\">Sub Total</span></th>\r\n        <th id=\"order-total\">{{ total }} {{ devise }}</th>\r\n      </tr>\r\n      <tr>\r\n        <td><a routerLink=\"/card\" class=\"btn btn-primary\">Continuer ma commande</a></td>\r\n        <td colspan=\"2\">\r\n          <a id=\"submit-order\" routerLink=\"/checkout-cart\" class=\"pull-right btn btn-success\">\r\n            Procéder au paiement\r\n          </a>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td><button (click)=\"removeBasket()\" class=\"btn btn-danger\">Vider mon panier</button></td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/shopping-cart-items/shopping-cart-items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartItemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_account_account_service__ = __webpack_require__("./src/app/services/account/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_api_service__ = __webpack_require__("./src/app/services/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_cart_cart_actions__ = __webpack_require__("./src/app/stores/cart/cart.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShoppingCartItemsComponent = /** @class */ (function () {
    function ShoppingCartItemsComponent(accountService, apiService, store) {
        this.accountService = accountService;
        this.apiService = apiService;
        this.store = store;
        this.total = 0;
        this.devise = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].devise;
        this.accountService = accountService;
    }
    ShoppingCartItemsComponent.prototype.ngOnInit = function () {
        this.calcTotal();
    };
    ShoppingCartItemsComponent.prototype.calcTotal = function () {
        var total = 0;
        this.cart.forEach(function (meal) {
            total += meal.price;
        });
        this.total = total;
    };
    ShoppingCartItemsComponent.prototype.removeToBasket = function (at) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__stores_cart_cart_actions__["f" /* RemoveMeal */](at));
        this.calcTotal();
    };
    ShoppingCartItemsComponent.prototype.removeBasket = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__stores_cart_cart_actions__["e" /* RemoveAll */]());
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], ShoppingCartItemsComponent.prototype, "cart", void 0);
    ShoppingCartItemsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-shopping-cart-items',
            template: __webpack_require__("./src/app/components/shopping-cart-items/shopping-cart-items.component.html"),
            styles: [__webpack_require__("./src/app/components/shopping-cart-items/shopping-cart-items.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_account_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_2__services_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* Store */]])
    ], ShoppingCartItemsComponent);
    return ShoppingCartItemsComponent;
}());



/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.css":
/***/ (function(module, exports) {

module.exports = ".cart-container{\r\n  padding-top: 30px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"cart.length > 0\" class=\"row cart-container\">\r\n  <div class=\"col-xs-12\">\r\n    <app-shopping-cart-items [cart]=\"cart\"></app-shopping-cart-items>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!(cart.length > 0)\" class=\"row cart-container\">\r\n  <div class=\"col-xs-3 col-sm-4 col-md-4\"></div>\r\n  <div class=\"col-xs-3 col-sm-4 col-md-4\">\r\n    <h1 class=\"h3 mb-3 font-weight-normal\">Votre panier est vide</h1>\r\n    <a routerLink=\"/card\">Retourner à la liste des achats</a>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_account_account_service__ = __webpack_require__("./src/app/services/account/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_api_service__ = __webpack_require__("./src/app/services/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(accountService, apiService, store) {
        this.accountService = accountService;
        this.apiService = apiService;
        this.store = store;
        this.cart = [];
        this.devise = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].devise;
        this.accountService = accountService;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(function (state) {
            return state.cart;
        }).subscribe(function (meals) {
            _this.cart = meals;
        });
    };
    ShoppingCartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-shopping-cart',
            template: __webpack_require__("./src/app/components/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__("./src/app/components/shopping-cart/shopping-cart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_account_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_2__services_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* Store */]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/services/account/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountService = /** @class */ (function () {
    function AccountService(http) {
        this.http = http;
    }
    AccountService.prototype.auth = function () {
    };
    AccountService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./src/app/services/api/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.fetchMeals = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].app_url + '/meals');
    };
    ApiService.prototype.createAccount = function (newUser) {
        var urlRegister;
        urlRegister = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].app_url + '/account/register';
        return this.http.post(urlRegister, newUser);
    };
    ApiService.prototype.auth = function (data) {
        var urlLogin;
        urlLogin = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].app_url + '/account/auth';
        return this.http.post(urlLogin, data);
    };
    ApiService.prototype.proceedCheckout = function (data) {
        var urlCheckout;
        urlCheckout = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].app_url + '/order/checkout';
        return this.http.post(urlCheckout, data);
    };
    ApiService.prototype.createPromotion = function (data) {
        var urlPromotion;
        urlPromotion = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].app_url + '/admin/promotion?token=' + data.token;
        return this.http.post(urlPromotion, data);
    };
    ApiService.prototype.createMeal = function (data) {
        var urlMeal;
        urlMeal = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].app_url + '/admin/meal?token=' + data.token;
        return this.http.post(urlMeal, data);
    };
    ApiService.prototype.fetchOrders = function (auth) {
        var urlCheckout;
        urlCheckout = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].app_url + '/admin/orders/?token=' + auth.token;
        return this.http.get(urlCheckout);
    };
    ApiService.prototype.fetchUsers = function (auth) {
        var urlUsers;
        urlUsers = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].app_url + '/admin/users/?token=' + auth.token;
        return this.http.get(urlUsers);
    };
    ApiService.prototype.fetchPromotions = function (auth) {
        var urlPromos;
        urlPromos = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].app_url + '/admin/promotions/?token=' + auth.token;
        return this.http.get(urlPromos);
    };
    ApiService.prototype.changeOrderStatus = function (data) {
        var urlCheckout;
        urlCheckout = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].app_url + '/admin/order/changeStatus';
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set("token", data.auth.token)
            .set("id", data.id)
            .set("status", data.status);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        data.token = data.auth.token;
        return this.http.post(urlCheckout, body, {
            headers: headers
        });
    };
    ApiService.prototype.changeBanned = function (data) {
        var urlCheckout;
        urlCheckout = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].app_url + '/admin/user/ban';
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set("token", data.auth.token)
            .set("id", data.id);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        data.token = data.auth.token;
        return this.http.post(urlCheckout, body, {
            headers: headers
        });
    };
    ApiService.prototype.changeMeal = function (data) {
        var urlChangeMeal;
        urlChangeMeal = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].app_url + '/admin/meal/' + data.id;
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set("token", data.auth.token)
            .set("id", data.id)
            .set("price", data.price)
            .set("name", data.name)
            .set("description", data.description);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        data.token = data.auth.token;
        return this.http.post(urlChangeMeal, body, {
            headers: headers
        });
    };
    ApiService.prototype.deleteMeal = function (data) {
        var urlDeleteMeal;
        urlDeleteMeal = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].app_url + '/admin/meal/' + data._id + '?token=' + data.auth.token;
        data.token = data.auth.token;
        return this.http.delete(urlDeleteMeal, data);
    };
    ApiService.prototype.deletePromotion = function (data) {
        var urlDeleteMeal;
        urlDeleteMeal = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].app_url + '/admin/promotion/' + data._id + '?token=' + data.auth.token;
        data.token = data.auth.token;
        return this.http.delete(urlDeleteMeal, data);
    };
    ApiService.prototype.uploadMealImage = function (data) {
        var urlUploadMealImage;
        urlUploadMealImage = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].app_url + '/upload/?token=' + data.auth.token;
        var formData = new FormData();
        var files = data.img;
        console.log(data.meal._id);
        formData.append('uploads[]', files[0], data.meal._id);
        return this.http.post(urlUploadMealImage, formData);
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/stores/auth/auth.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOGIN_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOG_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LoginIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LogOut; });
var LOGIN_IN = 'LOGIN_IN';
var LOG_OUT = 'LOGIN_OUT';
var LoginIn = /** @class */ (function () {
    function LoginIn(payload) {
        this.payload = payload;
        this.type = LOGIN_IN;
    }
    return LoginIn;
}());

var LogOut = /** @class */ (function () {
    function LogOut() {
        this.type = LOG_OUT;
    }
    return LogOut;
}());



/***/ }),

/***/ "./src/app/stores/auth/auth.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = AuthReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_actions__ = __webpack_require__("./src/app/stores/auth/auth.actions.ts");

var defaultState = {
    firstName: '',
    lastName: '',
    phone: '',
    mail: '',
    rank: 0,
    token: '',
    isAuth: false
};
function AuthReducer(state, action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__auth_actions__["a" /* LOGIN_IN */]:
            var newState = {
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                phone: action.payload.phone,
                mail: action.payload.mail,
                rank: action.payload.rank,
                token: action.payload.token,
                isAuth: true
            };
            localStorage.setItem('authItem', JSON.stringify(newState));
            return newState;
        case __WEBPACK_IMPORTED_MODULE_0__auth_actions__["b" /* LOG_OUT */]:
            localStorage.setItem('authItem', JSON.stringify(defaultState));
            return defaultState;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/stores/cart/cart.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_MEAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return REMOVE_MEAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return REMOVE_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddMeal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return RemoveMeal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RemoveAll; });
var ADD_MEAL = 'ADD_MEAL';
var REMOVE_MEAL = 'REMOVE_MEAL';
var REMOVE_ALL = 'REMOVE_ALL';
var AddMeal = /** @class */ (function () {
    function AddMeal(payload) {
        this.payload = payload;
        this.type = ADD_MEAL;
    }
    return AddMeal;
}());

var RemoveMeal = /** @class */ (function () {
    function RemoveMeal(payload) {
        this.payload = payload;
        this.type = REMOVE_MEAL;
    }
    return RemoveMeal;
}());

var RemoveAll = /** @class */ (function () {
    function RemoveAll() {
        this.type = REMOVE_ALL;
    }
    return RemoveAll;
}());



/***/ }),

/***/ "./src/app/stores/cart/cart.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CartReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cart_actions__ = __webpack_require__("./src/app/stores/cart/cart.actions.ts");

function CartReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__cart_actions__["a" /* ADD_MEAL */]:
            var newState = state.concat([action.payload]);
            localStorage.setItem('cartItems', JSON.stringify(newState));
            return newState;
        case __WEBPACK_IMPORTED_MODULE_0__cart_actions__["d" /* REMOVE_MEAL */]:
            state.splice(action.payload, 1);
            localStorage.setItem('cartItems', JSON.stringify(state));
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__cart_actions__["c" /* REMOVE_ALL */]:
            localStorage.setItem('cartItems', '[]');
            return [];
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    app_url: '',
    devise: '€'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map