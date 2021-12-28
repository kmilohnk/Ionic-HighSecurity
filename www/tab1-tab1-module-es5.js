(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab1Tab1PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"dark\">\n    <ion-title>\n      Inicio\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"valign-wrapper2\">\n  <ion-fab size=\"large\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <!-- <ion-fab-button color=\"dark\" (click)='finalShift()'> -->\n      <ion-fab-button color=\"dark\" (click)='presentAlert()'>\n      <ion-icon name=\"log-out\"></ion-icon>\n      finish\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab size=\"large\" vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n  <!--   <ion-fab-button color=\"dark\" (click)='initShift()'> -->\n      <ion-fab-button color=\"dark\" (click)='presentAlert2()'>\n      <ion-icon name=\"stopwatch\"></ion-icon>\n      start\n    </ion-fab-button>\n  </ion-fab>\n  <br>\n\n  <ion-item class=\"wrapper2\">\n    <ion-img src=\"\\assets\\imgs\\logo.png\"></ion-img>\n  </ion-item>\n  <br><br>\n  \n  <ion-button size=\"large\" expand=\"block\" (click)=\"openModal()\" color=\"medium\">ver rondas de la semana</ion-button>\n  <br><br>\n  \n\n  <ion-item color=\"medium\">\n    <ion-label>\n      Elegir turno a iniciar:\n    </ion-label>\n    <ion-select value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\" class=\"ion-text-wrap\" (ionChange)='saveId()'\n      [(ngModel)]='shiftId'>\n\n      <ion-select-option class=\"ion-text-wrap\" [value]=\"shift.shiftId + '$' +shift.client\" *ngFor=\"let shift of shifts\">\n        {{shift.date}}\n      </ion-select-option>\n    </ion-select>\n\n  </ion-item>\n  <br><br>\n\n  <ion-button (click)='notification()' shape=\"round\" size=\"large\" expand=\"block\">Registrar nuevo Incidente</ion-button>\n  <br><br>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/tab1/tab1-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab1/tab1-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab1PageRoutingModule */

    /***/
    function srcAppTab1Tab1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
        return Tab1PageRoutingModule;
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


      var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab1.page */
      "./src/app/tab1/tab1.page.ts");

      var routes = [{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"]
      }, {
        path: 'tab4',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | tab4-tab4-module */
          [__webpack_require__.e("common"), __webpack_require__.e("tab4-tab4-module")]).then(__webpack_require__.bind(null,
          /*! ../tab4/tab4.module */
          "./src/app/tab4/tab4.module.ts")).then(function (m) {
            return m.Tab4PageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | app-login-login-module */
          "app-login-login-module").then(__webpack_require__.bind(null,
          /*! ../app/login/login.module */
          "./src/app/app/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }];

      var Tab1PageRoutingModule = function Tab1PageRoutingModule() {
        _classCallCheck(this, Tab1PageRoutingModule);
      };

      Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab1PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab1/tab1.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.module.ts ***!
      \*************************************/

    /*! exports provided: Tab1PageModule */

    /***/
    function srcAppTab1Tab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
        return Tab1PageModule;
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab1.page */
      "./src/app/tab1/tab1.page.ts");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");
      /* harmony import */


      var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tab1-routing.module */
      "./src/app/tab1/tab1-routing.module.ts");

      var Tab1PageModule = function Tab1PageModule() {
        _classCallCheck(this, Tab1PageModule);
      };

      Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
      })], Tab1PageModule);
      /***/
    },

    /***/
    "./src/app/tab1/tab1.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab1Tab1PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".centrado {\n  margin-right: auto;\n  height: 100px;\n  margin-left: 40px;\n}\n\nion-content.valign-wrapper2 {\n  --background: url('background.png');\n}\n\nion-item.wrapper2 {\n  --ion-background-color: rgba(255,255,255,0.7);\n}\n\nion-card.back {\n  --ion-background-color: rgba(255,255,255,0.4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFFSyxtQ0FBQTtBQUFMOztBQUVDO0VBR0ksNkNBQUE7QUFETDs7QUFHQztFQUdJLDZDQUFBO0FBRkwiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRyYWRve1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG59XHJcblxyXG5pb24tY29udGVudC52YWxpZ24td3JhcHBlcjJ7XHJcbiAgICAvLyAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMzVDO1xyXG4gICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9iYWNrZ3JvdW5kLnBuZycpO1xyXG4gfVxyXG4gaW9uLWl0ZW0ud3JhcHBlcjJ7XHJcbiAgICAvLyAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMzVDO1xyXG4gICAvLyAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL2JhY2tncm91bmQucG5nJyk7XHJcbiAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcpO1xyXG4gfVxyXG4gaW9uLWNhcmQuYmFja3tcclxuICAgIC8vIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAzNUM7XHJcbiAgIC8vICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvYmFja2dyb3VuZC5wbmcnKTtcclxuICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNCk7XHJcbiAvLyAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNzA4MDkwO1xyXG4gfVxyXG5cclxuXHJcbiAiXX0= */";
      /***/
    },

    /***/
    "./src/app/tab1/tab1.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab1/tab1.page.ts ***!
      \***********************************/

    /*! exports provided: Tab1Page */

    /***/
    function srcAppTab1Tab1PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
        return Tab1Page;
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


      var _providers_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../providers/api.service */
      "./src/app/providers/api.service.ts");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _modals_rondas_rondas_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../modals/rondas/rondas.page */
      "./src/app/modals/rondas/rondas.page.ts");
      /* harmony import */


      var _providers_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../providers/auth.service */
      "./src/app/providers/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* import { ELocalNotificationTriggerUnit, LocalNotifications } from '@ionic-native/local-notifications/ngx'; */


      var Tab1Page = /*#__PURE__*/function () {
        function Tab1Page(toastController, api, browser,
        /*  private localNotifications: LocalNotifications, */
        auth, plt, modalController, alertCtrl, router) {
          var _this = this;

          _classCallCheck(this, Tab1Page);

          this.toastController = toastController;
          this.api = api;
          this.browser = browser;
          this.auth = auth;
          this.plt = plt;
          this.modalController = modalController;
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
          /*  this.plt.ready().then(() => {
             this.localNotifications.on('click').subscribe(res => {
                console.log('click', res);
               let msg = res.data ? res.data.mysata : '';
               this.showAlert(res.title, res.text, msg);
             });
             this.localNotifications.on('trigger').subscribe(res => {
               console.log('trigger', res);
               let msg = res.data ? res.data.mysata : '';
               this.showAlert(res.title, res.text, msg);
             }); */

          /* }); */
        }

        _createClass(Tab1Page, [{
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
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openModal",
          value: function openModal(shift) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _modals_rondas_rondas_page__WEBPACK_IMPORTED_MODULE_5__["RondasPage"],
                        componentProps: shift
                      });

                    case 2:
                      modal = _context2.sent;
                      _context2.next = 5;
                      return modal.present();

                    case 5:
                      return _context2.abrupt("return", _context2.sent);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "saveId",
          value: function saveId() {
            /*  console.log(this.shiftId) */
            this.guard.shiftId = parseInt(this.shiftId.split('$')[0]);
            this.guard.client = parseInt(this.shiftId.split('$')[1]);
            /*  this.shift. = client.toString() */

            sessionStorage.setItem('guard', JSON.stringify(this.guard));
            /*   console.table(this.guard) */
          }
          /* async initShift() {
            this.api.initShift(this.guard.shiftId, this.guard.client, this.guard.id).toPromise()
              .then((data: any) => {
                  }).catch(error => {
                this.presentToast('La ronda ya se encuentra iniciada.')
              }) */

          /*  await this.localNotifications.schedule({
             id: 10,
             title: 'Recordatorio de ronda',
             text: 'Recuerde registrar si ha ocurrido algún incidente',
             data: { mysata: 'mensaje oculto de la notificacion' },
                trigger: { in: 60, unit: ELocalNotificationTriggerUnit.MINUTE },
             trigger: { in: 10, unit: ELocalNotificationTriggerUnit.SECOND },
             foreground: true,
              }) */

          /*  } */

          /* finalShift() {
            this.api.finalShift(this.guard.shiftId, this.guard.client, this.guard.id).toPromise()
              .then((data: any) => {
              }).catch(error => {
                this.presentToast('La ronda ya se encuentra finalizada.')
              })
          } */

        }, {
          key: "openUrl",
          value: function openUrl() {
            this.browser.create('https://www.google.cl/maps/', '_self');
          }
        }, {
          key: "notification",
          value: function notification() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      /* await this.localNotifications.schedule({
                        id: 10,
                        title: 'Recordatorio de ronda',
                        text: 'Recuerde registrar si ha ocurrido algún incidente',
                        data: { mysata: 'mensaje oculto de la notificacion' },
                           trigger: { in: 60, unit: ELocalNotificationTriggerUnit.MINUTE },
                        trigger: { in: 10, unit: ELocalNotificationTriggerUnit.SECOND },
                        foreground: true,
                                }) */
                      this.router.navigate(['tabs/tab4']);

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "showAlert",
          value: function showAlert(header, sub, msg) {
            this.alertCtrl.create({
              header: header,
              subHeader: sub,
              message: msg,
              buttons: ['OK']
            }).then(function (alert) {
              return alert.present();
            });
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertCtrl.create({
                        cssClass: 'my-custom-class',
                        header: 'Alerta',
                        message: 'Desea finalizar la ronda',
                        buttons: [{
                          text: 'Okay',
                          handler: function handler() {
                            _this2.api.finalShift(_this2.guard.shiftId, _this2.guard.client, _this2.guard.id).toPromise().then(function (data) {})["catch"](function (error) {
                              _this2.presentToast('La ronda ya se encuentra finalizada.');
                            });
                          }
                        }, {
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: cancel');
                          }
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "presentAlert2",
          value: function presentAlert2() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertCtrl.create({
                        cssClass: 'my-custom-class',
                        header: 'Alerta',
                        message: 'Desea iniciar la ronda',
                        buttons: [{
                          text: 'Aceptar',
                          handler: function handler() {
                            _this3.api.initShift(_this3.guard.shiftId, _this3.guard.client, _this3.guard.id).toPromise().then(function (data) {})["catch"](function (error) {
                              _this3.presentToast('La ronda ya se encuentra iniciada.');
                            });
                          }
                        }, {
                          text: 'Cancelar',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: cancel');
                          }
                        }]
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return Tab1Page;
      }();

      Tab1Page.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _providers_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"]
        }, {
          type: _providers_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      };

      Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab1.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab1.page.scss */
        "./src/app/tab1/tab1.page.scss"))["default"]]
      })], Tab1Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab1-tab1-module-es5.js.map