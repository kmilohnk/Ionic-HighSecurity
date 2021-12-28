(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab3Tab3PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"dark\">\n    <ion-title class=\"background\">\n      Botones de emergencia\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\" class=\"valign-wrapper2\">\n\n  <ion-list class=\"valign-wrapper4\">\n    <br>\n    <ion-button expand=\"block\" shape=\"round\" color=\"warning\" size=\"large\" (click)=\"reportes('Ambulance')\"\n      href=\"tel:131\">Ambulancia</ion-button>\n    <br>\n    <ion-button expand=\"block\" shape=\"round\" color=\"success\" size=\"large\" (click)=\"reportes('Police')\" \n      href=\"tel:133\"> Carabineros</ion-button>\n    <br>\n    <ion-button expand=\"block\" shape=\"round\" color=\"danger\" size=\"large\" (click)=\"reportes('Firefighter')\"\n      href=\"tel:132\">Bomberos</ion-button>\n    <br>\n    <br>\n    <ion-button expand=\"block\" shape=\"round\" color=\"dark\" size=\"large\" (click)=\"reportes('Office1')\"\n      href=\"tel:+56990942357\">HS-Numero N°1</ion-button>\n    <br>\n    <ion-button expand=\"block\" shape=\"round\" color=\"dark\" size=\"large\" (click)=\"reportes('Office2')\"\n      href=\"tel:+56990942357\">HS-Numero N°2</ion-button>\n    <br>\n  </ion-list>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/tab3/tab3-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab3/tab3-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab3PageRoutingModule */

    /***/
    function srcAppTab3Tab3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function () {
        return Tab3PageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab3.page */
      "./src/app/tab3/tab3.page.ts");

      var routes = [{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"]
      }];

      var Tab3PageRoutingModule = function Tab3PageRoutingModule() {
        _classCallCheck(this, Tab3PageRoutingModule);
      };

      Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab3PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab3/tab3.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.module.ts ***!
      \*************************************/

    /*! exports provided: Tab3PageModule */

    /***/
    function srcAppTab3Tab3ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
        return Tab3PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab3.page */
      "./src/app/tab3/tab3.page.ts");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");
      /* harmony import */


      var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./tab3-routing.module */
      "./src/app/tab3/tab3-routing.module.ts");

      var Tab3PageModule = function Tab3PageModule() {
        _classCallCheck(this, Tab3PageModule);
      };

      Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
        }]), _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"]],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
      })], Tab3PageModule);
      /***/
    },

    /***/
    "./src/app/tab3/tab3.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab3Tab3PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".centrado1 {\n  height: 120px;\n  margin-left: 100px;\n}\n\n.centrado2 {\n  height: 120px;\n  margin-left: 110px;\n}\n\n.centrado3 {\n  height: 120px;\n  margin-left: 120px;\n}\n\nion-content.valign-wrapper2 {\n  --background: url('background.png');\n}\n\nion-title.background {\n  --ion-background-color: rgba(150,255,150,255,0) ;\n}\n\n.valign-wrapper4 {\n  --ion-background-color: rgba(255,255,255,0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFEQTtFQUVLLG1DQUFBO0FBR0w7O0FBREE7RUFDSSxnREFBQTtBQUlKOztBQURDO0VBQ0csNkNBQUE7QUFJSiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudHJhZG8xe1xyXG4gICAgaGVpZ2h0OjEyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG59XHJcbi5jZW50cmFkbzJ7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDExMHB4O1xyXG59XHJcbi5jZW50cmFkbzN7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xyXG59XHJcbmlvbi1jb250ZW50LnZhbGlnbi13cmFwcGVyMntcclxuICAgIC8vIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAzNUM7XHJcbiAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL2JhY2tncm91bmQucG5nJyk7XHJcbiB9XHJcbmlvbi10aXRsZS5iYWNrZ3JvdW5ke1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTAsMjU1LDE1MCwyNTUsMCkgXHJcbn07XHJcblxyXG4gLnZhbGlnbi13cmFwcGVyNHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcclxuIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/tab3/tab3.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab3/tab3.page.ts ***!
      \***********************************/

    /*! exports provided: Tab3Page */

    /***/
    function srcAppTab3Tab3PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
        return Tab3Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _providers_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../providers/api.service */
      "./src/app/providers/api.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _providers_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../providers/auth.service */
      "./src/app/providers/auth.service.ts");

      var Tab3Page = /*#__PURE__*/function () {
        function Tab3Page(formBuilder, api, router, auth) {
          var _this = this;

          _classCallCheck(this, Tab3Page);

          this.formBuilder = formBuilder;
          this.api = api;
          this.router = router;
          this.auth = auth;
          new Promise(function (resolve, reject) {
            _this.guard = _this.auth.guardData();
            resolve();
          }).then(function () {
            _this.shifts$ = _this.api.getGuardShift(_this.guard.id);

            _this.api.getGuardShift(_this.guard.id).toPromise().then(function (data) {
              _this.shifts = data.shifts;
            });
          });
          /* this.registerForm = this.createReportForm(); */
        }

        _createClass(Tab3Page, [{
          key: "reportes",
          value: function reportes(data) {
            switch (data) {
              case 'Ambulance':
                this.api.report({
                  type: data,
                  clientId: this.guard.client,
                  shiftId: this.guard.shiftId
                }).toPromise().then(function (data) {
                  /*   console.log(data) */
                });
                break;

              case 'Police':
                this.api.report({
                  type: data,
                  clientId: this.guard.client,
                  shiftId: this.guard.shiftId
                }).toPromise().then(function (data) {
                  /* console.log(data) */
                });
                break;

              case 'Firefighter':
                this.api.report({
                  type: data,
                  clientId: this.guard.client,
                  shiftId: this.guard.shiftId
                }).toPromise().then(function (data) {
                  /* console.log(data) */
                });
                break;

              case 'Office1':
                this.api.report({
                  type: data,
                  clientId: this.guard.client,
                  shiftId: this.guard.shiftId
                }).toPromise().then(function (data) {
                  /* console.log(data) */
                });
                break;

              case 'Office2':
                this.api.report({
                  type: data,
                  clientId: this.guard.client,
                  shiftId: this.guard.shiftId
                }).toPromise().then(function (data) {
                  /* console.log(data) */
                });
                break;
            }
          }
        }]);

        return Tab3Page;
      }();

      Tab3Page.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _providers_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _providers_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }];
      };

      Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab3.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab3.page.scss */
        "./src/app/tab3/tab3.page.scss"))["default"]]
      })], Tab3Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab3-tab3-module-es5.js.map