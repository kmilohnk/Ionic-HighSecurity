(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/second/second.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/second/second.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Guardar Visita</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"valign-wrapper2\">\n  <form lass=\"valign-wrapper4\" [formGroup]=\"registerVisitorForm\" (ngSubmit)=\"registerVisitor()\">\n  <ion-grid >\n    <ion-row>\n      <ion-col>\n        <ion-item class=\"wrapper2\">\n          <ion-label>Ingrese Nombre y Apellido</ion-label>\n        </ion-item>\n        \n        <ion-item class=\"wrapper2\">\n          <ion-input placeholder=\"Ej: Juan\" formControlName=\"name\"></ion-input>\n        </ion-item>\n        \n        <ion-item class=\"wrapper2\">\n          <ion-label>Ingrese Patente (opcional)</ion-label>\n        </ion-item>\n        \n        <ion-item class=\"wrapper2\">\n          <ion-input placeholder=\"Ej: GKYY11\" formControlName=\"patent\"></ion-input>\n        </ion-item>\n        \n        <ion-item class=\"wrapper2\">\n          <ion-label>Ingrese Rut</ion-label>\n        </ion-item>\n        \n        <ion-item class=\"wrapper2\"> \n          <ion-input placeholder=\"Ej: 11.111.111-0\" formControlName=\"rut\"></ion-input>\n        </ion-item>\n\n        <ion-item class=\"wrapper2\">\n          <ion-label>Ingrese Hora</ion-label>\n        </ion-item>\n\n        <ion-item class=\"wrapper2\">\n          <ion-datetime displayFormat=\"HH:mm\" placeholder=\"Ej: 16:30\" formControlName=\"in\"></ion-datetime>\n        </ion-item>\n        <br>\n        <ion-button color=\"primary\" type=\"submit\" size=\"large\" expand=\"block\" shape=\"round\" (click)=\"closeModal()\">Guardar Visita</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"dark\">\n    <ion-title>\n      Listado Visitas\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"valign-wrapper2\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"chevron-down-circle-outline\" pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-header>\n    <ion-title>\n      <br><br>\n    </ion-title>\n  </ion-header>\n  <ion-list class=\"valign-wrapper4\">\n    <ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\">\n            <div>\n            <ion-label>NOMBRE </ion-label>\n          </div>\n        </ion-col>\n        <ion-col size=\"4\">\n          <div>\n            <ion-label>PATENTE</ion-label>\n          </div>\n        </ion-col>\n        <ion-col size=\"4\">\n          <div>\n            <ion-label>RUT</ion-label>\n          </div>\n        </ion-col>\n        <ion-col size=\"4\">\n              <div>\n                <ion-label>ENTRADA</ion-label>\n              </div>\n        </ion-col>\n        <ion-col size=\"4\">\n            <div>\n              <ion-label>SALIDA</ion-label>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n    <ion-item *ngFor=\"let visita of visitas\">\n      <div (click)=\"saveVisitData(visita.visitId, visita.shiftShiftId, visita.name)\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"4\">\n              <div>\n                <ion-label (click)=\"openModal2()\">\n                  {{visita.name}}\n                </ion-label>\n              </div>\n            </ion-col>\n            <ion-col size=\"4\" >\n              <div>\n                <ion-label (click)=\"openModal2()\">\n                  {{visita.patent}}\n                </ion-label>\n              </div>\n            </ion-col>\n            <ion-col size=\"4\">\n              <div>\n                <ion-label (click)=\"openModal2()\">\n                  {{visita.rut}}\n                </ion-label>\n              </div>\n            </ion-col>\n            <ion-col size=\"4\">\n              <div>\n                <ion-label (click)=\"openModal2()\">\n                  {{visita.in}}\n                </ion-label>\n              </div>\n            </ion-col>\n            <ion-col size=\"4\">\n              <div>\n                <ion-label (click)=\"openModal2()\">\n                  {{visita.out}}\n                </ion-label>\n              </div>\n            </ion-col>\n            <!-- {{visita.visitId}} -->\n            <!-- {{visita.shiftShiftId}} -->\n            <!-- <ion-label (click)=\"\"> -->\n            <!--  {{visita.out}} -->\n\n            <!-- </ion-label>\n              \n            </ion-col> -->\n          </ion-row>\n        </ion-grid>\n      </div>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab size=\"large\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"add\" (click)=\"openModal()\"></ion-icon>\n    </ion-fab-button>\n\n  </ion-fab>\n</ion-content>");

/***/ }),

/***/ "./src/app/modals/second/second.page.scss":
/*!************************************************!*\
  !*** ./src/app/modals/second/second.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content.valign-wrapper2 {\n  --background: url('background.png');\n}\n\nion-item.wrapper2 {\n  --ion-background-color: rgba(255,255,255,0.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL3NlY29uZC9zZWNvbmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUssbUNBQUE7QUFGTDs7QUFJQztFQUNJLDZDQUFBO0FBREwiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvc2Vjb25kL3NlY29uZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2Nzc1xyXG5cclxuaW9uLWNvbnRlbnQudmFsaWduLXdyYXBwZXIye1xyXG4gICAgLy8gLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMDM1QztcclxuICAgICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYmFja2dyb3VuZC5wbmcnKTtcclxuIH1cclxuIGlvbi1pdGVtLndyYXBwZXIye1xyXG4gICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcclxuIH0iXX0= */");

/***/ }),

/***/ "./src/app/modals/second/second.page.ts":
/*!**********************************************!*\
  !*** ./src/app/modals/second/second.page.ts ***!
  \**********************************************/
/*! exports provided: SecondPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondPage", function() { return SecondPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_providers_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/auth.service */ "./src/app/providers/auth.service.ts");
/* harmony import */ var src_app_providers_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/api.service */ "./src/app/providers/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let SecondPage = class SecondPage {
    constructor(modalController, formBuilder, auth, api, toastController, router) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.api = api;
        this.toastController = toastController;
        this.router = router;
        new Promise((resolve, reject) => {
            this.guard = this.auth.guardData();
            /*  console.table(this.guard) */
            resolve();
        }).then(() => {
            this.shifts$ = this.api.getGuardShift(this.guard.id);
            this.api.getGuardShift(this.guard.id).toPromise()
                .then((data) => {
                this.shifts = data.shifts;
                /*  console.table(this.shifts) */
            });
        });
        this.registerVisitorForm = this.createRegisterVisitorForm();
    }
    ngOnInit() {
    }
    createRegisterVisitorForm() {
        return this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            rut: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            patent: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            shiftId: [this.guard.shiftId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            in: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](JSON.stringify(''), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
    }
    registerVisitor() {
        this.api.registerVisitor(this.registerVisitorForm.value).toPromise().then(() => {
            console.log(this.registerVisitorForm.value);
            this.router.navigate(['tabs/tab2']);
        }).catch(error => {
            this.presentToast('Error al guardar visitante');
        });
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                color: 'danger',
                duration: 2000
            });
            toast.present();
        });
    }
};
SecondPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_providers_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_providers_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
SecondPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-second',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./second.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/second/second.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./second.page.scss */ "./src/app/modals/second/second.page.scss")).default]
    })
], SecondPage);



/***/ }),

/***/ "./src/app/tab2/tab2-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab2-routing.module */ "./src/app/tab2/tab2-routing.module.ts");
/* harmony import */ var _modals_second_second_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modals/second/second.page */ "./src/app/modals/second/second.page.ts");










let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab2PageRoutingModule"]
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"], _modals_second_second_page__WEBPACK_IMPORTED_MODULE_9__["SecondPage"]],
        entryComponents: [_modals_second_second_page__WEBPACK_IMPORTED_MODULE_9__["SecondPage"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content.valign-wrapper2 {\n  --background: url('background.png');\n}\n\n.valign-wrapper4 {\n  --ion-background-color: rgba(255,255,255,0.5);\n}\n\nion-header.headercolor {\n  --ion-background-color: rgba(255,255,255,0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVLLG1DQUFBO0FBQUw7O0FBR0M7RUFDRyw2Q0FBQTtBQUFKOztBQUVDO0VBQ0csNkNBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC52YWxpZ24td3JhcHBlcjJ7XHJcbiAgICAvLyAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMzVDO1xyXG4gICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9iYWNrZ3JvdW5kLnBuZycpO1xyXG4gfVxyXG5cclxuIC52YWxpZ24td3JhcHBlcjR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XHJcbiB9XHJcbiBpb24taGVhZGVyLmhlYWRlcmNvbG9ye1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xyXG4gfSJdfQ== */");

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _modals_second_second_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/second/second.page */ "./src/app/modals/second/second.page.ts");
/* harmony import */ var _providers_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/api.service */ "./src/app/providers/api.service.ts");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/auth.service */ "./src/app/providers/auth.service.ts");
/* harmony import */ var _modals_out_out_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modals/out/out.page */ "./src/app/modals/out/out.page.ts");







let Tab2Page = class Tab2Page {
    constructor(auth, modalController, api) {
        this.auth = auth;
        this.modalController = modalController;
        this.api = api;
        new Promise((resolve, reject) => {
            this.guard = this.auth.guardData();
            resolve();
        }).then(() => {
            this.shifts$ = this.api.getGuardShift(this.guard.id);
            this.api.getGuardShift(this.guard.id).toPromise()
                .then((data) => {
                this.shifts = data.shifts;
            });
        });
        this.visitas$ = this.api.getVisitors(this.guard.shiftId);
        this.api.getVisitors(this.guard.shiftId).toPromise()
            .then((data) => {
            this.visitas = data.visits;
            /* console.table(this.visitas) */
        });
    }
    doRefresh(event) {
        setTimeout(() => {
            this.visitas$ = this.api.getVisitors(this.guard.shiftId);
            this.api.getVisitors(this.guard.shiftId).toPromise()
                .then((data) => {
                this.visitas = data.visits;
                /* console.table(this.visitas) */
            });
            event.target.complete();
        }, 1500);
    }
    openModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modals_second_second_page__WEBPACK_IMPORTED_MODULE_3__["SecondPage"]
            });
            return yield modal.present();
        });
    }
    saveVisitData(visitId) {
        this.guard.visitId = visitId;
        sessionStorage.setItem('guard', JSON.stringify(this.guard));
        console.table(this.guard);
    }
    openModal2() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modals_out_out_page__WEBPACK_IMPORTED_MODULE_6__["OutPage"]
            });
            return yield modal.present();
        });
    }
    ngOninit() {
    }
};
Tab2Page.ctorParameters = () => [
    { type: _providers_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _providers_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")).default]
    })
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map