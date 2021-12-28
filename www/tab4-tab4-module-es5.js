(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab4Tab4PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Registro-incidente\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h2>\n    Registrar inscidente\n  </h2>\n  <ion-list> \n    <ion-item>\n     <ion-label> Sin Novedad </ion-label>\n     <ion-checkbox></ion-checkbox>\n    </ion-item> \n    <ion-item>\n      <ion-label> Persona Sospechosa </ion-label>\n      <ion-checkbox></ion-checkbox>\n    </ion-item>\n   <ion-item>\n      <ion-label> Incendio </ion-label>\n      <ion-checkbox></ion-checkbox>\n   </ion-item>\n    <ion-item>\n      <ion-label> Otro </ion-label>\n      <ion-input></ion-input>\n      <ion-checkbox></ion-checkbox>\n    </ion-item [routerLink]=\"['tab1']\">\n   <ion-button color=\"primary\">enviar</ion-button>\n  </ion-list>\n</ion-content> -->\n\n\n<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"dark\">\n    <ion-title>\n      Registro-incidente\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink='/tabs/tab1'>\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"valign-wrapper2\">\n  <br>\n  <ion-title size=\"large\"> </ion-title>\n\n <!--  <ion-item color=\"primary\" shape=\"round\">\n    <ion-label>INICIAR TURNO</ion-label>\n    <ion-toggle (click)=Notification() color=\"dark\"></ion-toggle>\n  </ion-item> -->\n \n\n  \n  \n  <!-- <ion-form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\"> -->\n    <form class=\"valign-wrapper4\" [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n\n      <!-- <ion-item color=\"medium\" >\n        <ion-label>\n          Elegir turno a iniciar:\n        </ion-label>\n        <ion-select value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\" *ngFor=\"let shift of shifts$ | async\"\n        <ion-select value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\" class=\"ion-text-wrap\" formControlName=\"shiftId\">\n         [(ngModel)]=\"shifts$\">\n          <ion-select-option class=\"ion-text-wrap\" [value]=\"shift.shiftId\" *ngFor=\"let shift of shifts\" >\n            {{shift.date}}\n          </ion-select-option>\n          <ion-select-option hidden>\n            {{shift.date}}\n          {{shift.dates+' '+shift.start+' '+shift.finish}}\n        </ion-select-option>\n        </ion-select>\n      </ion-item> -->\n      <br><br>\n    <ion-list >\n      \n        <ion-radio-group value=\"Sin novedad\" formControlName=\"title\" >\n          <ion-list-header>\n            <ion-label>Registrar Novedades</ion-label>\n          </ion-list-header>\n\n          <ion-item >\n            <ion-label>Sin Novedad</ion-label>\n            <ion-radio slot=\"start\" type=\"radio\" value=\"Sin Novedad\"></ion-radio>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Persona Sospechosa</ion-label>\n            <ion-radio slot=\"start\" type=\"radio\" value=\"Persona Sospechosa\"></ion-radio>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Incendio</ion-label>\n            <ion-radio slot=\"start\" type=\"radio\" value=\"Incendio\"></ion-radio>\n          </ion-item>\n          \n          <ion-item>\n            <ion-label>Otro</ion-label>\n            <ion-radio slot=\"start\" value=\"Otro\"></ion-radio>\n            <ion-textarea placeholder=\"ingrese más información\" formControlName=\"description\"></ion-textarea>\n          </ion-item>\n\n        </ion-radio-group>\n      <br><br>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-button color=\"primary\" type=\"submit\" expand=\"block\" shape=\"round\" size=\"large\">Registrar</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-list>\n  </form>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/tab4/tab4-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab4/tab4-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab4PageRoutingModule */

    /***/
    function srcAppTab4Tab4RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab4PageRoutingModule", function () {
        return Tab4PageRoutingModule;
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


      var _tab4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab4.page */
      "./src/app/tab4/tab4.page.ts");

      var routes = [{
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_3__["Tab4Page"]
      }];

      var Tab4PageRoutingModule = function Tab4PageRoutingModule() {
        _classCallCheck(this, Tab4PageRoutingModule);
      };

      Tab4PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab4PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab4/tab4.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab4/tab4.module.ts ***!
      \*************************************/

    /*! exports provided: Tab4PageModule */

    /***/
    function srcAppTab4Tab4ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function () {
        return Tab4PageModule;
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


      var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab4.page */
      "./src/app/tab4/tab4.page.ts");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");
      /* harmony import */


      var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./tab4-routing.module */
      "./src/app/tab4/tab4-routing.module.ts");

      var Tab4PageModule = function Tab4PageModule() {
        _classCallCheck(this, Tab4PageModule);
      };

      Tab4PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]
        }]), _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _tab4_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab4PageRoutingModule"]],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]]
      })], Tab4PageModule);
      /***/
    },

    /***/
    "./src/app/tab4/tab4.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab4/tab4.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab4Tab4PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mover {\n  align-self: center;\n}\n\nion-content.valign-wrapper2 {\n  --background: url('background.png');\n}\n\nion-header.valign-wrapper3 {\n  --background: url('background.png');\n}\n\n.valign-wrapper4 {\n  --ion-background-color: rgba(255,255,255,0.6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiNC90YWI0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0E7RUFFSyxtQ0FBQTtBQUNMOztBQUNDO0VBRUksbUNBQUE7QUFDTDs7QUFFQztFQUNHLDZDQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC90YWI0L3RhYjQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vdmVye1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbmlvbi1jb250ZW50LnZhbGlnbi13cmFwcGVyMntcclxuICAgIC8vIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAzNUM7XHJcbiAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL2JhY2tncm91bmQucG5nJyk7XHJcbiB9XHJcbiBpb24taGVhZGVyLnZhbGlnbi13cmFwcGVyM3tcclxuICAgIC8vIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAzNUM7XHJcbiAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL2JhY2tncm91bmQucG5nJyk7XHJcbiB9XHJcblxyXG4gLnZhbGlnbi13cmFwcGVyNHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcclxuIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/tab4/tab4.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab4/tab4.page.ts ***!
      \***********************************/

    /*! exports provided: Tab4Page */

    /***/
    function srcAppTab4Tab4PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab4Page", function () {
        return Tab4Page;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _providers_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../providers/api.service */
      "./src/app/providers/api.service.ts");
      /* harmony import */


      var _providers_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../providers/auth.service */
      "./src/app/providers/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx'; */


      var Tab4Page = /*#__PURE__*/function () {
        function Tab4Page(toastController, formBuilder, api, plt,
        /* private localNotifications: LocalNotifications, */
        auth, alertCtrl, router) {
          var _this = this;

          _classCallCheck(this, Tab4Page);

          this.toastController = toastController;
          this.formBuilder = formBuilder;
          this.api = api;
          this.plt = plt;
          this.auth = auth;
          this.alertCtrl = alertCtrl;
          this.router = router;
          new Promise(function (resolve, reject) {
            _this.guard = _this.auth.guardData();
            /*  console.table(this.guard) */

            resolve();
          }).then(function () {
            _this.shifts$ = _this.api.getGuardShift(_this.guard.id);

            _this.api.getGuardShift(_this.guard.id).toPromise().then(function (data) {
              _this.shifts = data.shifts;
              /*  console.table(this.shifts) */
            });
          });
          this.registerForm = this.createRegisterForm();
        }

        _createClass(Tab4Page, [{
          key: "createRegisterForm",
          value: function createRegisterForm() {
            return this.formBuilder.group({
              title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              shiftId: [this.guard.shiftId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
          }
        }, {
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: message,
                        color: 'danger',
                        duration: 2000
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "register",
          value: function register() {
            var _this2 = this;

            this.api.register(this.registerForm.value).toPromise().then(function () {
              _this2.router.navigate(['tabs/tab1']);
            })["catch"](function (error) {
              /* console.log(error.error.message) */
              var text;

              switch (error.error.message) {
                case 'shift has been finished or unauthorized':
                  text = 'Este turno ya a terminado o no esta autorizado';
                  break;

                default:
                  text = 'Ha ocurrido un error, intente nuevamente';
              }

              _this2.presentToast(text);
            });
          }
        }, {
          key: "ngOninit",
          value: function ngOninit() {
            /* new Promise((resolve, reject) => {
              this.guard = this.auth.guardData()
              console.table(this.guard)
              resolve()
            }).then(() => {
              this.shifts$ = this.api.getGuardShift(this.guard.id)
              this.api.getGuardShift(this.guard.id).toPromise()
                .then((data: any) => {
                  this.shifts = data.shifts;
                  console.table(this.shifts)
                })
            }) */

            /* this.registerForm = this.createRegisterForm() */

            /* this.registerForm = this.formBuilder.group({
              incident: new FormControl('', Validators.required),
              other: new FormControl('', Validators.required)
            }); */
          }
        }]);

        return Tab4Page;
      }();

      Tab4Page.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _providers_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _providers_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      Tab4Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab4',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab4.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab4.page.scss */
        "./src/app/tab4/tab4.page.scss"))["default"]]
      })], Tab4Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab4-tab4-module-es5.js.map