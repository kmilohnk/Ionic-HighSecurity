(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modals-out-out-module"],{

/***/ "./src/app/modals/out/out-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/modals/out/out-routing.module.ts ***!
  \**************************************************/
/*! exports provided: OutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutPageRoutingModule", function() { return OutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _out_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./out.page */ "./src/app/modals/out/out.page.ts");




const routes = [
    {
        path: '',
        component: _out_page__WEBPACK_IMPORTED_MODULE_3__["OutPage"]
    }
];
let OutPageRoutingModule = class OutPageRoutingModule {
};
OutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OutPageRoutingModule);



/***/ }),

/***/ "./src/app/modals/out/out.module.ts":
/*!******************************************!*\
  !*** ./src/app/modals/out/out.module.ts ***!
  \******************************************/
/*! exports provided: OutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutPageModule", function() { return OutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _out_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./out-routing.module */ "./src/app/modals/out/out-routing.module.ts");
/* harmony import */ var _out_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./out.page */ "./src/app/modals/out/out.page.ts");







let OutPageModule = class OutPageModule {
};
OutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _out_routing_module__WEBPACK_IMPORTED_MODULE_5__["OutPageRoutingModule"]
        ],
        declarations: [_out_page__WEBPACK_IMPORTED_MODULE_6__["OutPage"]]
    })
], OutPageModule);



/***/ })

}]);
//# sourceMappingURL=modals-out-out-module-es2015.js.map