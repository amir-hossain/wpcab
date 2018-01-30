webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_nav_register_nav_component__ = __webpack_require__("../../../../../src/app/register-nav/register-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__notificaion_notificaion_component__ = __webpack_require__("../../../../../src/app/notificaion/notificaion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__finance_finance_component__ = __webpack_require__("../../../../../src/app/finance/finance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__meterial__ = __webpack_require__("../../../../../src/app/meterial.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__collection_collection_component__ = __webpack_require__("../../../../../src/app/collection/collection.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var confiq = {
    apiKey: "AIzaSyAgWD72SmEEKlxHoKW1ZcsoR5qo583LM78",
    authDomain: "wpcab-96299.firebaseapp.com",
    databaseURL: "https://wpcab-96299.firebaseio.com",
    projectId: "wpcab-96299",
    storageBucket: "wpcab-96299.appspot.com",
    messagingSenderId: "967144772560"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__register_nav_register_nav_component__["a" /* RegisterNavComponent */],
                __WEBPACK_IMPORTED_MODULE_9__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_10__registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_11__notificaion_notificaion_component__["a" /* NotificaionComponent */],
                __WEBPACK_IMPORTED_MODULE_12__finance_finance_component__["a" /* FinanceComponent */],
                __WEBPACK_IMPORTED_MODULE_17__collection_collection_component__["a" /* CollectionComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_13__meterial__["a" /* Meterial */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2__["a" /* AngularFireModule */].initializeApp(confiq),
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__["a" /* AngularFireAuth */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__finance_finance_component__ = __webpack_require__("../../../../../src/app/finance/finance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notificaion_notificaion_component__ = __webpack_require__("../../../../../src/app/notificaion/notificaion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__collection_collection_component__ = __webpack_require__("../../../../../src/app/collection/collection.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: "login",
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: "register",
        children: [
            {
                path: "home",
                component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */],
            },
            {
                path: "profile",
                component: __WEBPACK_IMPORTED_MODULE_4__profile_profile_component__["a" /* ProfileComponent */],
            },
            {
                path: "registration",
                component: __WEBPACK_IMPORTED_MODULE_5__registration_registration_component__["a" /* RegistrationComponent */],
            },
            {
                path: "finance",
                component: __WEBPACK_IMPORTED_MODULE_6__finance_finance_component__["a" /* FinanceComponent */],
            },
            {
                path: "notification",
                component: __WEBPACK_IMPORTED_MODULE_7__notificaion_notificaion_component__["a" /* NotificaionComponent */],
            },
            {
                path: "collection",
                component: __WEBPACK_IMPORTED_MODULE_8__collection_collection_component__["a" /* CollectionComponent */],
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/collection/collection.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\n    background: #ffffffb4;\n    margin-bottom: 0%;\n    margin-top: 1.5em;\n    padding-left:0%; \n    padding-right:0%; \n\n    \n\n    \n}\n.search{\n    margin-top: 3%;\n    padding: 0;\n    padding:.5em 0em 0em 2em; \n    margin-bottom:3%; \n   \n}\nmat-form-field{\n    width: 12em !important;\n    padding-right:  3em;\n}\n\n.content {\n    width: 56%;\n    margin: auto;\n    \n}\n\n\n\n\n\ntable td,th{\n    text-align: start;\n    \n    \n}\n\ntable th{\n    width: 19em;\n    font-size: 25px;\n    padding: 10px;\n}\n\ntable td{\n    padding-left:10px; \n    width: 34em;\n    font-size: 22px;\n    \n}\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/collection/collection.component.html":
/***/ (function(module, exports) {

module.exports = "<app-register-nav></app-register-nav>\n<div class=\"content\">\n<form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\n  <mat-card class=\"card search\">\n<mat-form-field>\n    <input matInput type=\"text\" placeholder=\"name\" formControlName=\"name\">\n</mat-form-field>\n<mat-form-field>\n    <input matInput type=\"text\" placeholder=\"area\" formControlName=\"area\">\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput type=\"text\" placeholder=\"father's name\" formControlName=\"fatherName\">\n  </mat-form-field>\n    <button  mat-raised-button color=\"primary\" type=\"submit\">Search</button>\n  </mat-card>\n  </form>\n  <table>\n  <tr>\n    <div class=\"heading\">\n      <th>Name</th>\n      <th>Area</th>\n      <th>Father Name</th>\n    </div>\n     \n  </tr>\n  <tr  *ngFor=\"let user of users\">\n    <mat-card class=\"card\">\n    <td>{{user.name}}</td>\n    <td>{{user.area}}</td>\n    <td>{{user.fatherName}}</td>\n  </mat-card>\n  </tr>\n</table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/collection/collection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CollectionComponent = /** @class */ (function () {
    function CollectionComponent(builder, db) {
        var _this = this;
        this.builder = builder;
        this.users = [];
        db.database.ref('/users').on("value", function (snap) {
            var data = snap.val();
            Object.keys(data).forEach(function (key, i) { return _this.users.push(data["" + key]); });
        });
    }
    CollectionComponent.prototype.ngOnInit = function () {
        this.searchForm = this.builder.group({
            name: [""],
            area: [""],
            fatherName: [""]
        });
    };
    CollectionComponent.prototype.search = function () {
        console.log(this.searchForm.value);
    };
    CollectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-collect',
            template: __webpack_require__("../../../../../src/app/collection/collection.component.html"),
            styles: [__webpack_require__("../../../../../src/app/collection/collection.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], CollectionComponent);
    return CollectionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/finance/finance.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/finance/finance.component.html":
/***/ (function(module, exports) {

module.exports = "<app-register-nav></app-register-nav>\n<p>\n  finance works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/finance/finance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FinanceComponent = /** @class */ (function () {
    function FinanceComponent() {
    }
    FinanceComponent.prototype.ngOnInit = function () {
    };
    FinanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-finance',
            template: __webpack_require__("../../../../../src/app/finance/finance.component.html"),
            styles: [__webpack_require__("../../../../../src/app/finance/finance.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FinanceComponent);
    return FinanceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.up-comming td,.all td{\n    padding-right: 2em;\n}\n\n.card{\n    background: #ffffffb4;\n    display: inline-block;\n    padding-left:0px; \n    \n}\n\nh1{\n    font-size: 30px;\n    text-align: center;\n}\n\n\n\n.up-comming, .all{\n    display: table;\n    margin: auto;\n}\n\ntable th{\n    width: 19em;\n    font-size: 25px;\n    padding: 10px;\n    text-align: start;\n}\n\ntable td{\n    padding-left:10px; \n    width: 34em;\n    font-size: 22px;\n    \n}\n\n.main-container {\n    width: 59%;\n    margin: auto;\n    \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-register-nav></app-register-nav>\n<div class=\"main-container\">\n\n  <div class=\"up-comming\">\n    <h1>Near by event</h1>\n    <table>\n        <div class=\"heading\">\n            <th>Name</th>\n            <th>Date</th>\n            <th>Time</th>\n            <th>Day Remanung</th>\n          </div>\n    <tr>\n      <mat-card class=\"card\">\n      <td>General mafil</td>\n      <td>1/1/2018</td>\n      <td>6:00pm</td>\n      <td>3 days remaining</td>\n    </mat-card>\n    </tr>\n  </table>\n  </div>\n  <div class=\"all\">\n      <h1>All event</h1>\n      <table>\n          <div class=\"heading\">\n              <th>Name</th>\n              <th>Date</th>\n              <th>Time</th>\n              <th>Day Remanung</th>\n            </div>\n      <mat-card class=\"card\">\n      <tr>\n        <td>Traning</td>\n        <td>10/1/2018</td>\n        <td>6:00pm</td>\n        <td>10 days remaining</td>\n      </tr>\n      <tr>\n          <td>Young Mafil</td>\n          <td>12/1/2018</td>\n          <td>9:00am</td>\n          <td>12 days remaining</td>\n        </tr>\n        <tr>\n            <td>Tepra Mafil</td>\n            <td>14/1/2018</td>\n            <td>6:00pm</td>\n            <td>14 days remaining</td>\n          </tr>\n        </mat-card>\n      </table>\n    </div> <!-- all -->\n</div> <!-- main container -->"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(builder) {
        this.builder = builder;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nimg{\n    height: 100px;\n    width: 130px;\n   }\n\n.inline-center{\n    display: block;\n    margin: 10px auto;\n}\n\nbutton{\n    float: right;\n    \n}\n.remember{\n    margin-top: 1em;\n    clear: both;\n    float: right;\n    font-size: 13px;\n}\n\nexample-margin {\n    margin: 0 10px;\n  }\n\n\nform {\n    position: absolute;\n    left: 50%;\n    top: 40%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -40%);\n  }\n\n  .card{\n    background: #ffffffb4;\n    display: inline-block;\n  }\n\n  mat-form-field{\n    width: 15em !important;\n  }\n  .error{\n    margin-bottom: 1em;\n  }\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n        <mat-card class=\"card\">\n        <img  class=\"inline-center\" src=\"./assets/img/logo.png\">\n        <div class=\"controls\">\n          <div>\n            <mat-form-field>\n              <input matInput class=\"inline-center input-field\" type=\"text\" placeholder=\"Name or Email\" formControlName=\"phone_email\">\n            </mat-form-field>\n          </div>\n          <mat-error class=\"error\" *ngIf=\"loginForm.controls.phone_email.invalid && loginForm.controls.phone_email.touched\">\n            Not a Valid email\n          </mat-error>\n          <mat-error class=\"error\">\n              {{unError}}\n            </mat-error>\n          <div>\n            <mat-form-field>\n              <input matInput type=\"password\" class=\"inline-center\" placeholder=\"Password\" formControlName=\"password\">\n            </mat-form-field>\n          </div>\n          <mat-error class=\"error\" *ngIf=\"loginForm.controls.password.invalid && loginForm.controls.password.touched\">\n            Password field is empty\n          </mat-error>\n          <mat-error class=\"error\">\n              {{passError}}\n            </mat-error>\n         \n          <button mat-raised-button color=\"primary\" type=\"submit\">Login</button>\n          <div class=\"remember\">\n            <mat-checkbox  formControlName=\"remember\">Remember password</mat-checkbox>\n          </div>\n        </div> <!-- controls -->\n  </mat-card> \n\n      </form>\n\n    \n   \n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var USER_NAME_ERROR_CODE = "auth/user-not-found";
var PASSWORD_ERROR_CODE = "auth/wrong-password";
var LoginComponent = /** @class */ (function () {
    function LoginComponent(builder, router, auth) {
        this.builder = builder;
        this.router = router;
        this.auth = auth;
        this.unError = "";
        this.passError = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.builder.group({
            phone_email: [localStorage.getItem("email_phone"), [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email]],
            password: [localStorage.getItem("password"), [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]],
            remember: [""]
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.unError = "";
        this.passError = "";
        if (this.loginForm.valid) {
            this.auth.auth.signInWithEmailAndPassword(this.loginForm.controls.phone_email.value, this.loginForm.controls.password.value)
                .then(function () {
                if (_this.loginForm.controls.remember.value) {
                    localStorage.setItem("email_phone", _this.loginForm.controls.phone_email.value);
                    localStorage.setItem("password", _this.loginForm.controls.password.value);
                }
                _this.router.navigate(["register/home"]);
            })
                .catch(function (error) {
                console.log(error.code);
                if (error.code === USER_NAME_ERROR_CODE) {
                    console.log(error.code);
                    _this.unError = "Email or number is worng";
                }
                else if (error.code === PASSWORD_ERROR_CODE) {
                    _this.passError = "Password is wrong";
                }
            });
        }
        else {
            Object.keys(this.loginForm.controls).forEach(function (field) {
                _this.loginForm.get(field).markAsTouched({ onlySelf: true });
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/meterial.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Meterial; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Meterial = /** @class */ (function () {
    function Meterial() {
    }
    Meterial = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatNativeDateModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatRadioModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatNativeDateModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatRadioModule */]],
        })
    ], Meterial);
    return Meterial;
}());



/***/ }),

/***/ "../../../../../src/app/notificaion/notificaion.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notificaion/notificaion.component.html":
/***/ (function(module, exports) {

module.exports = "<app-register-nav></app-register-nav>\n<p>\n  notificaion works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/notificaion/notificaion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificaionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificaionComponent = /** @class */ (function () {
    function NotificaionComponent() {
    }
    NotificaionComponent.prototype.ngOnInit = function () {
    };
    NotificaionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notificaion',
            template: __webpack_require__("../../../../../src/app/notificaion/notificaion.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notificaion/notificaion.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificaionComponent);
    return NotificaionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-register-nav></app-register-nav>\n<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register-nav/register-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.logout-btn{\n    background: red;\n}\n\n.nav-container{\n    background: #ffffffb4;\n}\n\n\n\n.nav-content{\n    display: table;\n    margin: auto;\n    \n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register-nav/register-nav.component.html":
/***/ (function(module, exports) {

module.exports = " <div mat-tab-nav-bar class=\"nav-container\">\n   <div class=\"nav-content\">\n  <a mat-tab-link *ngFor=\"let routerLink of routerLinks\"\n  [routerLink]=\"routerLink.link\"\n  routerLinkActive #rla=\"routerLinkActive\"\n  [active]=\"rla.isActive\">\n  {{routerLink.label}}\n</a>\n<a mat-tab-link disabled>\n  <button mat-raised-button color=\"primary\" type=\"button\" (click)=\"logout()\" class=\"logout-btn\">Logout</button>\n</a>\n</div>\n </div>"

/***/ }),

/***/ "../../../../../src/app/register-nav/register-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterNavComponent = /** @class */ (function () {
    function RegisterNavComponent(router) {
        this.router = router;
        this.routerLinks = [
            {
                label: "Home",
                link: "/register/home"
            },
            {
                label: "Profile",
                link: "/register/profile"
            },
            {
                label: "Registration",
                link: "/register/registration"
            },
            {
                label: "Finance",
                link: "/register/finance"
            },
            {
                label: "Notification",
                link: "/register/notification"
            },
            {
                label: "Collection",
                link: "/register/collection"
            }
        ];
    }
    RegisterNavComponent.prototype.ngOnInit = function () {
    };
    RegisterNavComponent.prototype.changeTab = function (e) {
        console.log(e.tab);
        switch (e.index) {
            case 0:
                this.router.navigateByUrl("/register/home");
                break;
            case 1:
                this.router.navigateByUrl("/register/profile");
                break;
            case 2:
                this.router.navigateByUrl("/register/registration");
                break;
            case 3:
                this.router.navigateByUrl("/register/finance");
                break;
            case 4:
                this.router.navigateByUrl("/register/notification");
                break;
            case 5:
                this.router.navigateByUrl("/register/collect");
                break;
            case 6:
                this.router.navigateByUrl("/login");
                break;
        }
    };
    RegisterNavComponent.prototype.logout = function () {
        this.router.navigate(["login"]);
    };
    RegisterNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register-nav',
            template: __webpack_require__("../../../../../src/app/register-nav/register-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register-nav/register-nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], RegisterNavComponent);
    return RegisterNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n.occupation input,.role input{\n    display: inline;\n    margin-left:1em;\n    margin-right: 1em;\n    background: red;\n    \n}\n\nmat-form-field{\n    width: 50em !important;\n    \n}\n\n\n\n\n\n\n\n.card{\n    display: inline-block;\n    \n  }\n  .card2{\n    background: #ffffff63;\n    display: inline-block;\n    \n  }\n\n  .mandatory,.optional{\n    display: table;\n    margin: auto;\n}\n\n  h1,h3{\n    font-size: 30px;\n    text-align: center;\n}\n\nh3{\n    font-size: 1.2em;\n}\n\n.mat-radio-button{\n    padding-right: 1.8em;\n   \n}\n\n::ng-deep .mat-radio-inner-circle {\n    background: rgba(114, 5, 187, 0.808) !important;\n}\n\n::ng-deep .mat-radio-outer-circle{\n    border-color: rgba(114, 5, 187, 0.808) !important;\n\n}\n\nbutton{\n    float: right;\n    margin: 2em 0;\n    padding: .5em 3em;\n}\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<app-register-nav></app-register-nav>\n\n  <h1>Member Registration</h1>\n  <form [formGroup]=\"registrationForm\" (ngSubmit)=\"signup()\">\n    <div class=\"mandatory\">\n      <h3>Madatory Fields</h3>\n      <mat-card class=\"card\">\n        <div>\n          <mat-form-field>\n        <input matInput type=\"text\" placeholder=\"Name\" formControlName=\"name\">\n      </mat-form-field>\n        <mat-error *ngIf=\"registrationForm.controls.name.invalid && registrationForm.controls.name.touched\">\n          Name required\n        </mat-error>\n      </div>\n      <div>\n        <mat-form-field>\n        <input matInput type=\"password\"  placeholder=\"Password\" formControlName=\"password\">\n      </mat-form-field>\n        <mat-error *ngIf=\"registrationForm.controls.password.invalid && registrationForm.controls.password.touched\">\n          Password required\n        </mat-error>\n      </div>\n      <div>\n        <mat-form-field>\n        <input matInput type=\"number\" placeholder=\"Phone\" formControlName=\"phone\">\n      </mat-form-field>\n        <mat-error *ngIf=\"registrationForm.controls.phone.invalid && registrationForm.controls.phone.touched\">\n          Phone required\n        </mat-error>\n      </div>\n       \n        <mat-radio-group class=\"role\" formControlName=\"role\">\n          <h5>Role</h5>\n          <mat-radio-button type=\"radio\" name=\"role\" id=\"User\" value=\"User\" checked=\"checked\">User</mat-radio-button>\n\n         <mat-radio-button type=\"radio\" name=\"role\" id=\"Register\" value=\"Register\">Register</mat-radio-button>\n\n          <mat-radio-button type=\"radio\" name=\"role\" id=\"Leader\" value=\"Leader\" >Leader</mat-radio-button>\n\n          <mat-radio-button type=\"radio\" name=\"role\" id=\"Admin\" value=\"Admin\" >Admin</mat-radio-button>\n\n          <mat-radio-button type=\"radio\" name=\"role\" id=\"Accountant\" value=\"Accountant\" >Accountant</mat-radio-button>\n\n         <mat-radio-button type=\"radio\" name=\"role\" id=\"Super\" value=\"Super\" >Super</mat-radio-button>\n\n        </mat-radio-group> <!-- role -->\n        <div>\n        <mat-form-field>\n        <input matInput type=\"text\"  placeholder=\"Area/Thana (current)\" formControlName=\"area\">\n      </mat-form-field>\n        <mat-error *ngIf=\"registrationForm.controls.area.invalid && registrationForm.controls.area.touched\">\n          Area required\n        </mat-error>\n      </div>\n      <div>\n        <mat-form-field>\n        <input matInput type=\"text\" placeholder=\"District (current)\" formControlName=\"district\">\n      </mat-form-field>\n        <mat-error *ngIf=\"registrationForm.controls.district.invalid && registrationForm.controls.district.touched\">\n          District required\n        </mat-error>\n      </div>\n      <div>\n        <mat-form-field>\n        <input matInput type=\"text\" placeholder=\"Upozilla (current)\" formControlName=\"upozilla\">\n      </mat-form-field>\n        <mat-error *ngIf=\"registrationForm.controls.upozilla.invalid && registrationForm.controls.upozilla.touched\">\n          Upozilla required\n        </mat-error>\n      </div>\n      <div>\n        <mat-form-field>\n        <input matInput type=\"text\"  placeholder=\"Father's name\" formControlName=\"fatherName\">\n      </mat-form-field>\n        <mat-error *ngIf=\"registrationForm.controls.fatherName.invalid && registrationForm.controls.fatherName.touched\">\n          Father name required\n        </mat-error>\n      </div>\n      <div>        <mat-form-field>\n        <input matInput type=\"text\" placeholder=\"Mother's name\" formControlName=\"motherName\">\n      </mat-form-field>\n        <mat-error *ngIf=\"registrationForm.controls.motherName.invalid && registrationForm.controls.motherName.touched\">\n          Mother name required\n        </mat-error>\n      </div>\n        <div>\n        <mat-form-field>\n        <input matInput type=\"textarea\" placeholder=\"Parmemt Address\" formControlName=\"permanentAddress\">\n      </mat-form-field>\n        <mat-error *ngIf=\"registrationForm.controls.permanentAddress.invalid && registrationForm.controls.permanentAddress.touched\">\n          Permanent address required\n        </mat-error>\n      </div>\n      <div>\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Age\" formControlName=\"age\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\n        </mat-form-field> <!-- age -->\n        <mat-error *ngIf=\"registrationForm.controls.age.invalid && registrationForm.controls.age.touched\">\n          Age required\n        </mat-error>\n      </div>\n      <div>\n        <mat-form-field>\n        <input matInput type=\"textarea\" placeholder=\"Invited by\" formControlName=\"invitedBy\">\n      </mat-form-field>\n        <mat-error *ngIf=\"registrationForm.controls.invitedBy.invalid && registrationForm.controls.invitedBy.touched\">\n            Invited by required\n          </mat-error>\n        </div>\n      </mat-card>\n    </div> <!-- mandatory -->\n    \n    <div class=\"optional\">\n      <h3>Optional Field</h3>\n      <mat-card class=\"card2\">\n        <div>\n      <mat-form-field>\n        <input matInput type=\"email\"  placeholder=\"Email\" formControlName=\"email\">\n      </mat-form-field>\n      <mat-error  *ngIf=\"registrationForm.controls.email.value !='' && registrationForm.controls.email.invalid\">\n        Invalid email\n      </mat-error >\n    </div>\n      <mat-radio-group class=\"occupation\" formControlName=\"occupation\">\n        <h5>Occupation</h5>\n        <mat-radio-button type=\"radio\" name=\"occupation\" id=\"student\" value=\"Student\" >Student</mat-radio-button>\n       <mat-radio-button type=\"radio\" name=\"occupation\" id=\"job holder\" value=\"JOb Holder\" > Job holder</mat-radio-button>\n        <mat-radio-button type=\"radio\" name=\"occupation\" id=\"bussnessman\" value=\"Bussnessman\" >Bussnessman</mat-radio-button>\n        <mat-radio-button type=\"radio\" name=\"occupation\" id=\"others\" value=\"Others\" >Others</mat-radio-button>\n      </mat-radio-group>\n      <div>\n      <mat-form-field>\n        <input matInput type=\"text\" placeholder=\"Nationality\" formControlName=\"nationality\">\n      </mat-form-field>\n    </div>\n    <div>\n      <mat-form-field>\n        <input matInput type=\"number\" placeholder=\"National ID\" formControlName=\"nationalId\">\n      </mat-form-field> \n    </div>\n    <div>\n      <mat-form-field>\n        <input matInput type=\"text\" placeholder=\"Blood Group\" formControlName=\"bloodGroup\">\n      </mat-form-field>\n    </div>\n    <div>\n      <mat-form-field>\n      <input matInput type=\"text\" placeholder=\"Country\" formControlName=\"country\">\n    </mat-form-field>\n  </div>\n  \n    </mat-card>\n    <div>\n    <button type=\"submit\"  mat-raised-button color=\"primary\">Signup</button>\n  </div>\n    </div> <!-- optional -->\n    \n    \n  </form> <!-- Form -->\n\n"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(builder, db) {
        this.builder = builder;
        this.db = db;
        this.startDate = new Date(1990, 0, 1);
        this.dbRef = this.db.database.ref("/users");
        console.log(this.fireList);
        var starCountRef = this.db.database.ref('/users');
        starCountRef.on('value', function (snapshot) {
            console.log(snapshot.val());
        });
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.registrationForm = this.builder.group({
            name: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            password: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            phone: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            role: ["User"],
            area: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            district: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            upozilla: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            fatherName: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            motherName: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            permanentAddress: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            age: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            invitedBy: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            email: [""],
            occupation: ["Student"],
            nationality: [""],
            nationalId: [""],
            bloodGroup: [""],
            country: [""]
        });
    };
    RegistrationComponent.prototype.signup = function () {
        var _this = this;
        if (this.registrationForm.valid) {
            var temp_1 = this.registrationForm.value;
            temp_1.age = this.registrationForm.controls.age.value.toLocaleDateString();
            this.dbRef.once('value', function (snap) {
                _this.dbRef.push(temp_1);
                console.log(temp_1);
            });
            // this.registrationForm.reset();
        }
        else {
            Object.keys(this.registrationForm.controls).forEach(function (field) {
                _this.registrationForm.get(field).markAsTouched({ onlySelf: true });
            });
        }
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map