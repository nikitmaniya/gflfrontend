(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/app/@theme/guard/batch-guard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/@theme/guard/batch-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: BatchGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchGuardService", function() { return BatchGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_user_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/user-class */ "./src/app/@theme/model/user-class.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _services_permission_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/permission.service */ "./src/app/@theme/services/permission.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BatchGuardService = /** @class */ (function () {
    function BatchGuardService(router, activateroute, authService, permissionService) {
        var _this = this;
        this.router = router;
        this.activateroute = activateroute;
        this.authService = authService;
        this.permissionService = permissionService;
        this.currentUserPermission = [];
        this.currentUser$ = this.authService.currentUser.subscribe(function (data) {
            if (data != null) {
                _this.currentUser = data;
                _this.currentUserPermission = data.user_permission;
                if (_this.currentUserPermission.length) {
                    _this.currentUserPermission.forEach(function (ele) {
                        if (ele.form_name === 'Batch') {
                            _this.userPermission = new _model_user_class__WEBPACK_IMPORTED_MODULE_1__["UserPermission"]();
                            _this.userPermission = ele;
                        }
                    });
                }
            }
        });
    }
    BatchGuardService.prototype.canLoad = function (route) {
        if (this.currentUser !== undefined && this.userPermission.can_view) {
            return true;
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View Batch. If you want to View Batch ask admin for permission.');
            if (res) {
            }
            else {
            }
            return false;
        }
    };
    BatchGuardService.prototype.canActivate = function (route, state) {
        if (this.currentUser !== undefined && this.userPermission.can_view) {
            return true;
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View Batch. If you want to View Batch ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    BatchGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_permission_service__WEBPACK_IMPORTED_MODULE_4__["PermissionService"]])
    ], BatchGuardService);
    return BatchGuardService;
}());



/***/ }),

/***/ "./src/app/@theme/guard/fabric-in-guard.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/@theme/guard/fabric-in-guard.service.ts ***!
  \*********************************************************/
/*! exports provided: FabricInGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabricInGuardService", function() { return FabricInGuardService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_user_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/user-class */ "./src/app/@theme/model/user-class.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _services_permission_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/permission.service */ "./src/app/@theme/services/permission.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FabricInGuardService = /** @class */ (function () {
    function FabricInGuardService(router, activateroute, authService, permissionService) {
        var _this = this;
        this.router = router;
        this.activateroute = activateroute;
        this.authService = authService;
        this.permissionService = permissionService;
        this.currentUserPermission = [];
        this.currentUser$ = this.authService.currentUser.subscribe(function (data) {
            if (data != null) {
                _this.currentUser = data;
                _this.currentUserPermission = data.user_permission;
                if (_this.currentUserPermission.length) {
                    _this.currentUserPermission.forEach(function (ele) {
                        if (ele.form_name === 'Fabric In') {
                            _this.userPermission = new _model_user_class__WEBPACK_IMPORTED_MODULE_2__["UserPermission"]();
                            _this.userPermission = ele;
                        }
                    });
                }
            }
        });
    }
    FabricInGuardService.prototype.canLoad = function (route) {
        var isLoggedIn = localStorage.getItem('isLogged');
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser !== undefined && this.userPermission.can_view) {
            return true;
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View Fabric In. If you want to View Fabric In ask admin for permission.');
            if (res) {
            }
            else {
            }
            return false;
        }
    };
    FabricInGuardService.prototype.canActivate = function (route, state) {
        var isLoggedIn = localStorage.getItem('isLogged');
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser !== undefined && this.userPermission.can_view) {
            return true;
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View Fabric In. If you want to View Fabric In ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    FabricInGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_permission_service__WEBPACK_IMPORTED_MODULE_4__["PermissionService"]])
    ], FabricInGuardService);
    return FabricInGuardService;
}());



/***/ }),

/***/ "./src/app/@theme/guard/party-guard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/@theme/guard/party-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: PartyGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartyGuardService", function() { return PartyGuardService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_user_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/user-class */ "./src/app/@theme/model/user-class.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _services_permission_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/permission.service */ "./src/app/@theme/services/permission.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PartyGuardService = /** @class */ (function () {
    function PartyGuardService(router, activateroute, permissionService, authService) {
        var _this = this;
        this.router = router;
        this.activateroute = activateroute;
        this.permissionService = permissionService;
        this.authService = authService;
        this.currentUserPermission = [];
        this.userPermission = new _model_user_class__WEBPACK_IMPORTED_MODULE_2__["UserPermission"]();
        this.currentUser$ = this.authService.currentUser.subscribe(function (data) {
            if (data != null) {
                _this.currentUser = data;
                _this.currentUserPermission = data.user_permission;
                if (_this.currentUserPermission.length) {
                    _this.currentUserPermission.forEach(function (ele) {
                        if (ele.form_name === 'Party') {
                            _this.userPermission = new _model_user_class__WEBPACK_IMPORTED_MODULE_2__["UserPermission"]();
                            _this.userPermission = ele;
                        }
                    });
                }
            }
        });
    }
    PartyGuardService.prototype.canLoad = function (route) {
        var isLoggedIn = localStorage.getItem('isLogged');
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser !== undefined && this.userPermission && this.userPermission.can_view) {
            return true;
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View Party. If you want to View Party ask admin for permission.');
            if (res) {
            }
            else {
            }
            return false;
        }
    };
    PartyGuardService.prototype.canActivate = function (route, state) {
        var isLoggedIn = localStorage.getItem('isLogged');
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser !== undefined && this.userPermission.can_view) {
            return true;
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View Party. If you want to View Party ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    PartyGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], _services_permission_service__WEBPACK_IMPORTED_MODULE_4__["PermissionService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], PartyGuardService);
    return PartyGuardService;
}());



/***/ }),

/***/ "./src/app/@theme/guard/quality-guard.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/@theme/guard/quality-guard.service.ts ***!
  \*******************************************************/
/*! exports provided: QualityGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualityGuardService", function() { return QualityGuardService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_user_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/user-class */ "./src/app/@theme/model/user-class.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _services_permission_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/permission.service */ "./src/app/@theme/services/permission.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QualityGuardService = /** @class */ (function () {
    function QualityGuardService(router, activateroute, authService, permissionService) {
        var _this = this;
        this.router = router;
        this.activateroute = activateroute;
        this.authService = authService;
        this.permissionService = permissionService;
        this.currentUserPermission = [];
        this.currentUser$ = this.authService.currentUser.subscribe(function (data) {
            if (data != null) {
                _this.currentUser = data;
                _this.currentUserPermission = data.user_permission;
                if (_this.currentUserPermission.length) {
                    _this.currentUserPermission.forEach(function (ele) {
                        if (ele.form_name === 'Quality') {
                            _this.userPermission = new _model_user_class__WEBPACK_IMPORTED_MODULE_2__["UserPermission"]();
                            _this.userPermission = ele;
                        }
                    });
                }
            }
        });
    }
    QualityGuardService.prototype.canLoad = function (route) {
        if (this.currentUser !== undefined && this.userPermission.can_view) {
            return true;
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View Quality. If you want to View Quality ask admin for permission.');
            if (res) {
            }
            else {
            }
            return false;
        }
    };
    QualityGuardService.prototype.canActivate = function (route, state) {
        var isLoggedIn = localStorage.getItem('isLogged');
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser !== undefined && this.userPermission.can_view) {
            return true;
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View Quality. If you want to View Quality ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    QualityGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_permission_service__WEBPACK_IMPORTED_MODULE_4__["PermissionService"]])
    ], QualityGuardService);
    return QualityGuardService;
}());



/***/ }),

/***/ "./src/app/@theme/guard/shade-guard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/@theme/guard/shade-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: ShadeGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadeGuardService", function() { return ShadeGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_user_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/user-class */ "./src/app/@theme/model/user-class.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _services_permission_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/permission.service */ "./src/app/@theme/services/permission.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShadeGuardService = /** @class */ (function () {
    function ShadeGuardService(router, activateroute, authService, permissionService) {
        var _this = this;
        this.router = router;
        this.activateroute = activateroute;
        this.authService = authService;
        this.permissionService = permissionService;
        this.currentUserPermission = [];
        this.currentUser$ = this.authService.currentUser.subscribe(function (data) {
            if (data != null) {
                _this.currentUser = data;
                _this.currentUserPermission = data.user_permission;
                if (_this.currentUserPermission.length) {
                    _this.currentUserPermission.forEach(function (ele) {
                        if (ele.form_name === 'Shade') {
                            _this.userPermission = new _model_user_class__WEBPACK_IMPORTED_MODULE_1__["UserPermission"]();
                            _this.userPermission = ele;
                        }
                    });
                }
            }
        });
    }
    ShadeGuardService.prototype.canLoad = function (route) {
        if (this.currentUser !== undefined && this.userPermission.can_view) {
            return true;
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View Shade. If you want to View Shade ask admin for permission.');
            if (res) {
            }
            else {
            }
            return false;
        }
    };
    ShadeGuardService.prototype.canActivate = function (route, state) {
        if (this.currentUser !== undefined && this.userPermission.can_view) {
            return true;
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View Shade. If you want to View Shade ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    ShadeGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_permission_service__WEBPACK_IMPORTED_MODULE_4__["PermissionService"]])
    ], ShadeGuardService);
    return ShadeGuardService;
}());



/***/ }),

/***/ "./src/app/@theme/guard/supplier-guard.service.ts":
/*!********************************************************!*\
  !*** ./src/app/@theme/guard/supplier-guard.service.ts ***!
  \********************************************************/
/*! exports provided: SupplierGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierGuardService", function() { return SupplierGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_user_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/user-class */ "./src/app/@theme/model/user-class.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _services_permission_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/permission.service */ "./src/app/@theme/services/permission.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SupplierGuardService = /** @class */ (function () {
    function SupplierGuardService(router, activateroute, permissionService, authService) {
        var _this = this;
        this.router = router;
        this.activateroute = activateroute;
        this.permissionService = permissionService;
        this.authService = authService;
        this.currentUserPermission = [];
        this.currentUser$ = this.authService.currentUser.subscribe(function (data) {
            if (data != null) {
                _this.currentUser = data;
                _this.currentUserPermission = data.user_permission;
                if (_this.currentUserPermission.length) {
                    _this.currentUserPermission.forEach(function (ele) {
                        if (ele.form_name === 'Supplier') {
                            _this.userPermission = new _model_user_class__WEBPACK_IMPORTED_MODULE_1__["UserPermission"]();
                            _this.userPermission = ele;
                        }
                    });
                }
            }
        });
    }
    SupplierGuardService.prototype.canLoad = function (route) {
        if (this.currentUser !== undefined && this.userPermission.can_view) {
            return true;
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View Supplier. If you want to View Supplier ask admin for permission.');
            if (res) {
            }
            else {
            }
            return false;
        }
    };
    SupplierGuardService.prototype.canActivate = function (route, state) {
        if (this.currentUser !== undefined && this.userPermission.can_view) {
            return true;
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View Supplier. If you want to View Supplier ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    SupplierGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_permission_service__WEBPACK_IMPORTED_MODULE_4__["PermissionService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], SupplierGuardService);
    return SupplierGuardService;
}());



/***/ }),

/***/ "./src/app/@theme/guard/user-guard.service.ts":
/*!****************************************************!*\
  !*** ./src/app/@theme/guard/user-guard.service.ts ***!
  \****************************************************/
/*! exports provided: UserGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGuardService", function() { return UserGuardService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_user_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/user-class */ "./src/app/@theme/model/user-class.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _services_permission_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/permission.service */ "./src/app/@theme/services/permission.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserGuardService = /** @class */ (function () {
    function UserGuardService(router, activateroute, permissionService, authService) {
        var _this = this;
        this.router = router;
        this.activateroute = activateroute;
        this.permissionService = permissionService;
        this.authService = authService;
        this.currentUserPermission = [];
        this.currentUser$ = this.authService.currentUser.subscribe(function (data) {
            if (data != null) {
                _this.currentUser = data;
                _this.currentUserPermission = data.user_permission;
                if (_this.currentUserPermission.length) {
                    _this.currentUserPermission.forEach(function (ele) {
                        if (ele.form_name === 'User') {
                            _this.userPermission = new _model_user_class__WEBPACK_IMPORTED_MODULE_2__["UserPermission"]();
                            _this.userPermission = ele;
                        }
                    });
                }
            }
        });
    }
    UserGuardService.prototype.canLoad = function (route) {
        var isLoggedIn = localStorage.getItem('isLogged');
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser !== undefined && this.userPermission.can_view) {
            return true;
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View User. If you want to View User ask admin for permission.');
            if (res) {
            }
            else {
            }
            return false;
        }
    };
    UserGuardService.prototype.canActivate = function (route, state) {
        var isLoggedIn = localStorage.getItem('isLogged');
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser !== undefined && this.userPermission.can_view) {
            return true;
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to View User. If you want to View User ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    UserGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], _services_permission_service__WEBPACK_IMPORTED_MODULE_4__["PermissionService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], UserGuardService);
    return UserGuardService;
}());



/***/ }),

/***/ "./src/app/@theme/model/user-class.ts":
/*!********************************************!*\
  !*** ./src/app/@theme/model/user-class.ts ***!
  \********************************************/
/*! exports provided: User, UserPermission, ViewReqObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPermission", function() { return UserPermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewReqObj", function() { return ViewReqObj; });
var User = /** @class */ (function () {
    function User() {
        this.have_quality = false;
        this.can_view_quality = false;
        this.can_add_quality = false;
        this.can_edit_quality = false;
        this.can_delete_quality = false;
        this.have_user = false;
        this.can_view_user = false;
        this.can_add_user = false;
        this.can_edit_user = false;
        this.can_delete_user = false;
        this.have_party = false;
        this.can_view_party = false;
        this.can_add_party = false;
        this.can_edit_party = false;
        this.can_delete_party = false;
        this.have_stock = false;
        this.can_view_stock = false;
        this.can_add_stock = false;
        this.can_edit_stock = false;
        this.can_delete_stock = false;
        this.company_id = '';
        this.designation = '';
        this.user_head_id = '';
    }
    return User;
}());

var UserPermission = /** @class */ (function () {
    function UserPermission() {
        this.can_add = false;
        this.can_delete = false;
        this.can_edit = false;
        this.can_view = false;
        this.can_delete_all = false;
        this.can_delete_group = false;
        this.can_edit_all = false;
        this.can_edit_group = false;
        this.can_view_all = false;
        this.can_view_group = false;
    }
    return UserPermission;
}());

var ViewReqObj = /** @class */ (function () {
    function ViewReqObj() {
        this.created_by = null;
        this.current_user_id = null;
        this.user_head_id = null;
        this.group_user_ids = null;
        this.view_own = false;
        this.view_group = false;
        this.view_all = false;
    }
    return ViewReqObj;
}());



/***/ }),

/***/ "./src/app/@theme/services/permission.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/@theme/services/permission.service.ts ***!
  \*******************************************************/
/*! exports provided: PermissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionService", function() { return PermissionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/@theme/services/api.service.ts");
/* harmony import */ var _components_permission_permission_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/permission/permission.component */ "./src/app/@theme/components/permission/permission.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PermissionService = /** @class */ (function () {
    function PermissionService(modalService, apiService) {
        this.modalService = modalService;
        this.apiService = apiService;
    }
    PermissionService.prototype.callPermissionView = function (title, message) {
        var dialogRef = this.modalService.open(_components_permission_permission_component__WEBPACK_IMPORTED_MODULE_3__["PermissionComponent"]);
        dialogRef.componentInstance.message = message;
        dialogRef.componentInstance.titleFrom = title;
        dialogRef.result.then(function (result) {
            return result;
        });
    };
    PermissionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], PermissionService);
    return PermissionService;
}());



/***/ }),

/***/ "./src/app/pages/pages-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _miscellaneous_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./miscellaneous/not-found/not-found.component */ "./src/app/pages/miscellaneous/not-found/not-found.component.ts");
/* harmony import */ var _theme_guard_fabric_in_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@theme/guard/fabric-in-guard.service */ "./src/app/@theme/guard/fabric-in-guard.service.ts");
/* harmony import */ var _theme_guard_user_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@theme/guard/user-guard.service */ "./src/app/@theme/guard/user-guard.service.ts");
/* harmony import */ var _theme_guard_party_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@theme/guard/party-guard.service */ "./src/app/@theme/guard/party-guard.service.ts");
/* harmony import */ var _theme_guard_quality_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../@theme/guard/quality-guard.service */ "./src/app/@theme/guard/quality-guard.service.ts");
/* harmony import */ var _theme_guard_supplier_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../@theme/guard/supplier-guard.service */ "./src/app/@theme/guard/supplier-guard.service.ts");
/* harmony import */ var _theme_guard_shade_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../@theme/guard/shade-guard.service */ "./src/app/@theme/guard/shade-guard.service.ts");
/* harmony import */ var _theme_guard_batch_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../@theme/guard/batch-guard.service */ "./src/app/@theme/guard/batch-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [{
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"],
        children: [
            {
                path: 'miscellaneous',
                loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
            },
            {
                path: 'party',
                loadChildren: './party/party.module#PartyModule',
                canActivate: [_theme_guard_party_guard_service__WEBPACK_IMPORTED_MODULE_6__["PartyGuardService"]],
                canLoad: [_theme_guard_party_guard_service__WEBPACK_IMPORTED_MODULE_6__["PartyGuardService"]]
            },
            {
                path: 'quality',
                loadChildren: './quality/quality.module#QualityModule',
                canActivate: [_theme_guard_quality_guard_service__WEBPACK_IMPORTED_MODULE_7__["QualityGuardService"]],
                canLoad: [_theme_guard_quality_guard_service__WEBPACK_IMPORTED_MODULE_7__["QualityGuardService"]]
            },
            {
                path: 'user',
                loadChildren: './user/user.module#UserModule',
                canActivate: [_theme_guard_user_guard_service__WEBPACK_IMPORTED_MODULE_5__["UserGuardService"]],
                canLoad: [_theme_guard_user_guard_service__WEBPACK_IMPORTED_MODULE_5__["UserGuardService"]]
            },
            {
                path: 'fabric-in',
                loadChildren: './fabric-in/fabric-in.module#FabricInModule',
                canActivate: [_theme_guard_fabric_in_guard_service__WEBPACK_IMPORTED_MODULE_4__["FabricInGuardService"]],
                canLoad: [_theme_guard_fabric_in_guard_service__WEBPACK_IMPORTED_MODULE_4__["FabricInGuardService"]],
            },
            {
                path: 'batch',
                loadChildren: './batch/batch.module#BatchModule',
                canActivate: [_theme_guard_batch_guard_service__WEBPACK_IMPORTED_MODULE_10__["BatchGuardService"]],
                canLoad: [_theme_guard_batch_guard_service__WEBPACK_IMPORTED_MODULE_10__["BatchGuardService"]],
            },
            {
                path: 'program',
                loadChildren: './program/program.module#ProgramModule',
            },
            {
                path: 'process',
                loadChildren: './process/process.module#ProcessModule',
            },
            {
                path: 'process-planning',
                loadChildren: './process-planning/process-planning.module#ProcessPlanningModule',
            },
            {
                path: 'jet-planning',
                loadChildren: './jet-planning/jet-planning.module#JetPlanningModule',
            },
            {
                path: 'supplier',
                loadChildren: './supplier/supplier.module#SupplierModule',
                canActivate: [_theme_guard_supplier_guard_service__WEBPACK_IMPORTED_MODULE_8__["SupplierGuardService"]],
                canLoad: [_theme_guard_supplier_guard_service__WEBPACK_IMPORTED_MODULE_8__["SupplierGuardService"]],
            },
            {
                path: 'shade',
                loadChildren: './shade/shade.module#ShadeModule',
                canActivate: [_theme_guard_shade_guard_service__WEBPACK_IMPORTED_MODULE_9__["ShadeGuardService"]],
                canLoad: [_theme_guard_shade_guard_service__WEBPACK_IMPORTED_MODULE_9__["ShadeGuardService"]],
            },
            {
                path: 'colour-stock',
                loadChildren: './colour-stock/colour-stock.module#ColourStockModule',
            },
            {
                path: '**',
                component: _miscellaneous_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
            }
        ],
    }];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.scss":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host /deep/ router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s; }\n@-webkit-keyframes fade {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes fade {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host /deep/ router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s; }\n@keyframes fade {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-corporate :host /deep/ router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s; }\n@keyframes fade {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvQzpcXFVzZXJzXFxERUxMXFxEb3dubG9hZHNcXG5neC13aXJlZnJhbWUtNGNhNDNjZDhhYjI1NDc4YTA0OTE3NzBjMTIwYTdhNTVmYmI4MmM1ZS9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFxfdGhlbWluZy5zY3NzIiwic3JjL2FwcC9wYWdlcy9DOlxcVXNlcnNcXERFTExcXERvd25sb2Fkc1xcbmd4LXdpcmVmcmFtZS00Y2E0M2NkOGFiMjU0NzhhMDQ5MTc3MGMxMjBhN2E1NWZiYjgyYzVlL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXGNvcmVcXF9taXhpbnMuc2NzcyIsInNyYy9hcHAvcGFnZXMvQzpcXFVzZXJzXFxERUxMXFxEb3dubG9hZHNcXG5neC13aXJlZnJhbWUtNGNhNDNjZDhhYjI1NDc4YTA0OTE3NzBjMTIwYTdhNTVmYmI4MmM1ZS9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFxjb3JlXFxfZnVuY3Rpb25zLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL0M6XFxVc2Vyc1xcREVMTFxcRG93bmxvYWRzXFxuZ3gtd2lyZWZyYW1lLTRjYTQzY2Q4YWIyNTQ3OGEwNDkxNzcwYzEyMGE3YTU1ZmJiODJjNWUvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcdGhlbWVzXFxfZGVmYXVsdC5zY3NzIiwic3JjL2FwcC9wYWdlcy9DOlxcVXNlcnNcXERFTExcXERvd25sb2Fkc1xcbmd4LXdpcmVmcmFtZS00Y2E0M2NkOGFiMjU0NzhhMDQ5MTc3MGMxMjBhN2E1NWZiYjgyYzVlL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXHRoZW1lc1xcX2Nvc21pYy5zY3NzIiwic3JjL2FwcC9wYWdlcy9DOlxcVXNlcnNcXERFTExcXERvd25sb2Fkc1xcbmd4LXdpcmVmcmFtZS00Y2E0M2NkOGFiMjU0NzhhMDQ5MTc3MGMxMjBhN2E1NWZiYjgyYzVlL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXHRoZW1lc1xcX2NvcnBvcmF0ZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9DOlxcVXNlcnNcXERFTExcXERvd25sb2Fkc1xcbmd4LXdpcmVmcmFtZS00Y2E0M2NkOGFiMjU0NzhhMDQ5MTc3MGMxMjBhN2E1NWZiYjgyYzVlL3NyY1xcYXBwXFxwYWdlc1xccGFnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUdIOztHQUVHO0FDVEg7Ozs7R0FJRztBQXNLSDs7OztHQUlHO0FBc0JIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbUhFO0FDdlRGOzs7O0dBSUc7QUNKSDs7OztHQUlHO0FESkg7Ozs7R0FJRztBREpIOzs7O0dBSUc7QUFzS0g7Ozs7R0FJRztBQXNCSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW1IRTtBR3ZURjs7OztHQUlHO0FGSkg7Ozs7R0FJRztBREpIOzs7O0dBSUc7QUFzS0g7Ozs7R0FJRztBQXNCSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW1IRTtBRXZURjs7OztHQUlHO0FESkg7Ozs7R0FJRztBREpIOzs7O0dBSUc7QUFzS0g7Ozs7R0FJRztBQXNCSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW1IRTtBSXZURjs7OztHQUlHO0FISkg7Ozs7R0FJRztBREpIOzs7O0dBSUc7QUFzS0g7Ozs7R0FJRztBQXNCSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW1IRTtBRXZURjs7OztHQUlHO0FESkg7Ozs7R0FJRztBREpIOzs7O0dBSUc7QUFzS0g7Ozs7R0FJRztBQXNCSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW1IRTtBRHJNRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQW1CRTtBTWxJSjtFQUNFLGVBQWM7RUFDZCwyQkFBa0I7VUFBbEIsbUJBQWtCLEVBV25CO0FBVEM7RUFDRTtJQUNFLFdBQVUsRUFBQTtFQUdaO0lBQ0UsV0FBVSxFQUFBLEVBQUE7QUFOZDtFQUNFO0lBQ0UsV0FBVSxFQUFBO0VBR1o7SUFDRSxXQUFVLEVBQUEsRUFBQTtBTnFHZDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQW1CRTtBTWxJSjtFQUNFLGVBQWM7RUFDZCwyQkFBa0I7VUFBbEIsbUJBQWtCLEVBV25CO0FBVEM7RUFDRTtJQUNFLFdBQVUsRUFBQTtFQUdaO0lBQ0UsV0FBVSxFQUFBLEVBQUE7QU5xR2Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFtQkU7QU1sSUo7RUFDRSxlQUFjO0VBQ2QsMkJBQWtCO1VBQWxCLG1CQUFrQixFQVduQjtBQVRDO0VBQ0U7SUFDRSxXQUFVLEVBQUE7RUFHWjtJQUNFLFdBQVUsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cblxuLyoqXG4gKiBUaGlzIGlzIGEgc3RhcnRpbmcgcG9pbnQgd2hlcmUgd2UgZGVjbGFyZSB0aGUgbWFwcyBvZiB0aGVtZXMgYW5kIGdsb2JhbGx5IGF2YWlsYWJsZSBmdW5jdGlvbnMvbWl4aW5zXG4gKi9cblxuQGltcG9ydCAnY29yZS9taXhpbnMnO1xuQGltcG9ydCAnY29yZS9mdW5jdGlvbnMnO1xuXG4kbmItZW5hYmxlZC10aGVtZXM6ICgpICFnbG9iYWw7XG4kbmItZW5hYmxlLWNzcy12YXJpYWJsZXM6IGZhbHNlICFnbG9iYWw7XG5cbiRuYi10aGVtZXM6ICgpICFnbG9iYWw7XG4kbmItdGhlbWVzLW5vbi1wcm9jZXNzZWQ6ICgpICFnbG9iYWw7XG4kbmItdGhlbWVzLWV4cG9ydDogKCkgIWdsb2JhbDtcblxuQGZ1bmN0aW9uIG5iLXRoZW1lKCRrZXkpIHtcbiAgQHJldHVybiBtYXAtZ2V0KCR0aGVtZSwgJGtleSk7XG59XG5cbkBmdW5jdGlvbiBuYi1nZXQtdmFsdWUoJHRoZW1lLCAka2V5LCAkdmFsdWUpIHtcbiAgQGlmICh0eXBlLW9mKCR2YWx1ZSkgPT0gJ3N0cmluZycpIHtcbiAgICAkdG1wOiBtYXAtZ2V0KCR0aGVtZSwgJHZhbHVlKTtcblxuICAgIEBpZiAoJHRtcCAhPSBudWxsKSB7XG4gICAgICBAcmV0dXJuIG5iLWdldC12YWx1ZSgkdGhlbWUsICR2YWx1ZSwgJHRtcCk7XG4gICAgfVxuICB9XG5cbiAgQHJldHVybiBtYXAtZ2V0KCR0aGVtZSwgJGtleSk7XG59XG5cbkBmdW5jdGlvbiBjb252ZXJ0LXRvLWNzcy12YXJpYWJsZXMoJHZhcmlhYmxlcykge1xuICAkcmVzdWx0OiAoKTtcbiAgQGVhY2ggJHZhciwgJHZhbHVlIGluICR2YXJpYWJsZXMge1xuICAgICRyZXN1bHQ6IG1hcC1zZXQoJHJlc3VsdCwgJHZhciwgJy0tdmFyKCN7JHZhcn0pJyk7XG4gIH1cblxuICBAZGVidWcgJHJlc3VsdDtcbiAgQHJldHVybiAkcmVzdWx0O1xufVxuXG5AZnVuY3Rpb24gc2V0LWdsb2JhbC10aGVtZS12YXJzKCR0aGVtZSwgJHRoZW1lLW5hbWUpIHtcbiAgJHRoZW1lOiAkdGhlbWUgIWdsb2JhbDtcbiAgJHRoZW1lLW5hbWU6ICR0aGVtZS1uYW1lICFnbG9iYWw7XG4gIEBpZiAoJG5iLWVuYWJsZS1jc3MtdmFyaWFibGVzKSB7XG4gICAgJHRoZW1lOiBjb252ZXJ0LXRvLWNzcy12YXJpYWJsZXMoJHRoZW1lKSAhZ2xvYmFsO1xuICB9XG4gIEByZXR1cm4gJHRoZW1lO1xufVxuXG5AZnVuY3Rpb24gbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCAkbmFtZSwgJGRlZmF1bHQ6IG51bGwpIHtcblxuICAkdGhlbWUtZGF0YTogKCk7XG5cblxuICBAaWYgKCRkZWZhdWx0ICE9IG51bGwpIHtcblxuICAgICR0aGVtZTogbWFwLW1lcmdlKG1hcC1nZXQoJG5iLXRoZW1lcy1ub24tcHJvY2Vzc2VkLCAkZGVmYXVsdCksICR0aGVtZSk7XG4gICAgJG5iLXRoZW1lcy1ub24tcHJvY2Vzc2VkOiBtYXAtc2V0KCRuYi10aGVtZXMtbm9uLXByb2Nlc3NlZCwgJG5hbWUsICR0aGVtZSkgIWdsb2JhbDtcblxuICAgICR0aGVtZS1kYXRhOiBtYXAtc2V0KCR0aGVtZS1kYXRhLCBkYXRhLCAkdGhlbWUpO1xuICAgICRuYi10aGVtZXMtZXhwb3J0OiBtYXAtc2V0KCRuYi10aGVtZXMtZXhwb3J0LCAkbmFtZSwgbWFwLXNldCgkdGhlbWUtZGF0YSwgcGFyZW50LCAkZGVmYXVsdCkpICFnbG9iYWw7XG5cbiAgfSBAZWxzZSB7XG4gICAgJG5iLXRoZW1lcy1ub24tcHJvY2Vzc2VkOiBtYXAtc2V0KCRuYi10aGVtZXMtbm9uLXByb2Nlc3NlZCwgJG5hbWUsICR0aGVtZSkgIWdsb2JhbDtcblxuICAgICR0aGVtZS1kYXRhOiBtYXAtc2V0KCR0aGVtZS1kYXRhLCBkYXRhLCAkdGhlbWUpO1xuICAgICRuYi10aGVtZXMtZXhwb3J0OiBtYXAtc2V0KCRuYi10aGVtZXMtZXhwb3J0LCAkbmFtZSwgbWFwLXNldCgkdGhlbWUtZGF0YSwgcGFyZW50LCBudWxsKSkgIWdsb2JhbDtcbiAgfVxuXG4gICR0aGVtZS1wYXJzZWQ6ICgpO1xuICBAZWFjaCAka2V5LCAkdmFsdWUgaW4gJHRoZW1lIHtcbiAgICAkdGhlbWUtcGFyc2VkOiBtYXAtc2V0KCR0aGVtZS1wYXJzZWQsICRrZXksIG5iLWdldC12YWx1ZSgkdGhlbWUsICRrZXksICR2YWx1ZSkpO1xuICB9XG5cbiAgLy8gZW5hYmxlIHJpZ2h0IGF3YXkgd2hlbiBpbnN0YWxsZWRcbiAgJHRoZW1lLXBhcnNlZDogc2V0LWdsb2JhbC10aGVtZS12YXJzKCR0aGVtZS1wYXJzZWQsICRuYW1lKTtcbiAgQHJldHVybiBtYXAtc2V0KCRuYi10aGVtZXMsICRuYW1lLCAkdGhlbWUtcGFyc2VkKTtcbn1cblxuQGZ1bmN0aW9uIGdldC1lbmFibGVkLXRoZW1lcygpIHtcbiAgJHRoZW1lcy10by1pbnN0YWxsOiAoKTtcblxuICBAaWYgKGxlbmd0aCgkbmItZW5hYmxlZC10aGVtZXMpID4gMCkge1xuICAgIEBlYWNoICR0aGVtZS1uYW1lIGluICRuYi1lbmFibGVkLXRoZW1lcyB7XG4gICAgICAkdGhlbWVzLXRvLWluc3RhbGw6IG1hcC1zZXQoJHRoZW1lcy10by1pbnN0YWxsLCAkdGhlbWUtbmFtZSwgbWFwLWdldCgkbmItdGhlbWVzLCAkdGhlbWUtbmFtZSkpO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgJHRoZW1lcy10by1pbnN0YWxsOiAkbmItdGhlbWVzO1xuICB9XG5cbiAgQHJldHVybiAkdGhlbWVzLXRvLWluc3RhbGw7XG59XG5cbkBtaXhpbiBpbnN0YWxsLWNzcy12YXJpYWJsZXMoJHRoZW1lLW5hbWUsICR2YXJpYWJsZXMpIHtcbiAgLm5iLXRoZW1lLSN7JHRoZW1lLW5hbWV9IHtcbiAgICBAZWFjaCAkdmFyLCAkdmFsdWUgaW4gJHZhcmlhYmxlcyB7XG4gICAgICAtLSN7JHZhcn06ICR2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVE9ETzogd2UgaGlkZSA6aG9zdCBpbnNpZGUgb2YgaXQgd2hpY2ggaXMgbm90IG9idmlvdXNcbkBtaXhpbiBuYi1pbnN0YWxsLWNvbXBvbmVudCgpIHtcblxuICAkdGhlbWVzLXRvLWluc3RhbGw6IGdldC1lbmFibGVkLXRoZW1lcygpO1xuXG4gIEBlYWNoICR0aGVtZS1uYW1lLCAkdGhlbWUgaW4gJHRoZW1lcy10by1pbnN0YWxsIHtcbiAgICAvKlxuICAgICAgOmhvc3QgY2FuIGJlIHByZWZpeGVkXG4gICAgICBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvOGQwZWUzNDkzOWYxNGMwNzg3NmQyMjJjMjViNDA1ZWQ0NThhMzRkMy9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxXG5cbiAgICAgIFdlIGhhdmUgdG8gdXNlIDpob3N0IGluc3RlZCBvZiA6aG9zdC1jb250ZXh0KCR0aGVtZSksIHRvIGJlIGFibGUgdG8gcHJlZml4IHRoZW1lIGNsYXNzXG4gICAgICB3aXRoIHNvbWV0aGluZyBkZWZpbmVkIGluc2lkZSBvZiBAY29udGVudCwgYnkgcHJlZml4aW5nICYuXG4gICAgICBGb3IgZXhhbXBsZSB0aGlzIHNjc3MgY29kZTpcbiAgICAgICAgLm5iLXRoZW1lLWRlZmF1bHQge1xuICAgICAgICAgIC5zb21lLXNlbGVjdG9yICYge1xuICAgICAgICAgICAgLi4uXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBXaWxsIHJlc3VsdCBpbiBuZXh0IGNzczpcbiAgICAgICAgLnNvbWUtc2VsZWN0b3IgLm5iLXRoZW1lLWRlZmF1bHQge1xuICAgICAgICAgIC4uLlxuICAgICAgICB9XG5cbiAgICAgIEl0IGRvZXNuJ3Qgd29yayB3aXRoIDpob3N0LWNvbnRleHQgYmVjYXVzZSBhbmd1bGFyIHNwbGl0dGluZyBpdCBpbiB0d28gc2VsZWN0b3JzIGFuZCByZW1vdmVzXG4gICAgICBwcmVmaXggaW4gb25lIG9mIHRoZSBzZWxlY3RvcnMuXG4gICAgKi9cbiAgICAubmItdGhlbWUtI3skdGhlbWUtbmFtZX0gOmhvc3Qge1xuICAgICAgJHRoZW1lOiBzZXQtZ2xvYmFsLXRoZW1lLXZhcnMoJHRoZW1lLCAkdGhlbWUtbmFtZSk7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG5iLWZvci10aGVtZSgkbmFtZSkge1xuICBAaWYgKCR0aGVtZS1uYW1lID09ICRuYW1lKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLWV4Y2VwdC10aGVtZSgkbmFtZSkge1xuICBAaWYgKCR0aGVtZS1uYW1lICE9ICRuYW1lKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gVE9ETzogYW5vdGhlciBtaXhpbmcgZm9yIHRoZSBhbG1vc3Qgc2FtZSB0aGluZ1xuQG1peGluIG5iLWluc3RhbGwtcm9vdC1jb21wb25lbnQoKSB7XG4gIEB3YXJuICdgbmItaW5zdGFsbC1yb290LWNvbXBvbmVudGAgaXMgZGVwcmljYXRlZCwgcmVwbGFjZSB3aXRoIGBuYi1pbnN0YWxsLWNvbXBvbmVudGAsIGFzIGBib2R5YCBpcyByb290IGVsZW1lbnQgbm93JztcblxuICBAaW5jbHVkZSBuYi1pbnN0YWxsLWNvbXBvbmVudCgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbmItaW5zdGFsbC1nbG9iYWwoKSB7XG4gICR0aGVtZXMtdG8taW5zdGFsbDogZ2V0LWVuYWJsZWQtdGhlbWVzKCk7XG5cbiAgQGVhY2ggJHRoZW1lLW5hbWUsICR0aGVtZSBpbiAkdGhlbWVzLXRvLWluc3RhbGwge1xuICAgIC5uYi10aGVtZS0jeyR0aGVtZS1uYW1lfSB7XG4gICAgICAkdGhlbWU6IHNldC1nbG9iYWwtdGhlbWUtdmFycygkdGhlbWUsICR0aGVtZS1uYW1lKTtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AbWl4aW4gbmItc2Nyb2xsYmFycygkZmcsICRiZywgJHNpemUsICRib3JkZXItcmFkaXVzOiAkc2l6ZSAvIDIpIHtcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6ICRzaXplO1xuICAgIGhlaWdodDogJHNpemU7XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAkZmc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogJGJnO1xuICB9XG5cbiAgLy8gVE9ETzogcmVtb3ZlXG4gIC8vIEZvciBJbnRlcm5ldCBFeHBsb3JlclxuICBzY3JvbGxiYXItZmFjZS1jb2xvcjogJGZnO1xuICBzY3JvbGxiYXItdHJhY2stY29sb3I6ICRiZztcbn1cblxuQG1peGluIG5iLXJhZGlhbC1ncmFkaWVudCgkY29sb3ItMSwgJGNvbG9yLTIsICRjb2xvci0zKSB7XG4gIGJhY2tncm91bmQ6ICRjb2xvci0yOyAvKiBPbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoYm90dG9tLCBlbGxpcHNlIGNvdmVyLCAkY29sb3ItMSAwJSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY29sb3ItMiA0NSUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNvbG9yLTMgMTAwJSk7IC8qIEZGMy42LTE1ICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGJvdHRvbSwgZWxsaXBzZSBjb3ZlciwgJGNvbG9yLTEgMCUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNvbG9yLTIgNDUlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjb2xvci0zIDEwMCUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBib3R0b20sICRjb2xvci0xIDAlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjb2xvci0yIDQ1JSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY29sb3ItMyAxMDAlKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXG4gIGZpbHRlcjogcHJvZ2lkOmR4aW1hZ2V0cmFuc2Zvcm0ubWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyRjb2xvci0xJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kQ29sb3JzdHI9JyRjb2xvci0zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR3JhZGllbnRUeXBlPTEpOyAvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50ICovXG59XG5cbkBtaXhpbiBuYi1yaWdodC1ncmFkaWVudCgkbGVmdC1jb2xvciwgJHJpZ2h0LWNvbG9yKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGxlZnQtY29sb3IsICRyaWdodC1jb2xvcik7XG59XG5cbkBtaXhpbiBuYi1oZWFkaW5ncygkZnJvbTogMSwgJHRvOiA2KSB7XG4gIEBmb3IgJGkgZnJvbSAkZnJvbSB0aHJvdWdoICR0byB7XG4gICAgaCN7JGl9IHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGhvdmVyLWZvY3VzLWFjdGl2ZSB7XG4gICY6Zm9jdXMsXG4gICY6YWN0aXZlLFxuICAmOmhvdmVyIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gY2VudGVyLWhvcml6b250YWwtYWJzb2x1dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICBsZWZ0OiA1MCU7XG59XG5cbkBtaXhpbiBpbnN0YWxsLXRodW1iKCkge1xuICAkdGh1bWItc2VsZWN0b3JzOiAoXG4gICAgJzo6LXdlYmtpdC1zbGlkZXItdGh1bWInXG4gICAgJzo6LW1vei1yYW5nZS10aHVtYidcbiAgICAnOjotbXMtdGh1bWInXG4gICk7XG5cbiAgQGVhY2ggJHNlbGVjdG9yIGluICR0aHVtYi1zZWxlY3RvcnMge1xuICAgICYjeyRzZWxlY3Rvcn0ge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBpbnN0YWxsLXRyYWNrKCkge1xuICAkdGh1bWItc2VsZWN0b3JzOiAoXG4gICAgJzo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2snXG4gICAgJzo6LW1vei1yYW5nZS10cmFjaydcbiAgICAnOjotbXMtdHJhY2snXG4gICk7XG5cbiAgQGVhY2ggJHNlbGVjdG9yIGluICR0aHVtYi1zZWxlY3RvcnMge1xuICAgICYjeyRzZWxlY3Rvcn0ge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBpbnN0YWxsLXBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnQtc2l6ZSkge1xuICAkcGxhY2Vob2xkZXItc2VsZWN0b3JzOiAoXG4gICAgJzo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcidcbiAgICAnOjotbW96LXBsYWNlaG9sZGVyJ1xuICAgICc6LW1vei1wbGFjZWhvbGRlcidcbiAgICAnOi1tcy1pbnB1dC1wbGFjZWhvbGRlcidcbiAgKTtcblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgQGluY2x1ZGUgcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplKTtcbiAgfVxuXG4gIEBlYWNoICRzZWxlY3RvciBpbiAkcGxhY2Vob2xkZXItc2VsZWN0b3JzIHtcbiAgICAmI3skc2VsZWN0b3J9IHtcbiAgICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnQtc2l6ZSk7XG4gICAgfVxuXG4gICAgJjpmb2N1cyN7JHNlbGVjdG9yfSB7XG4gICAgICBAaW5jbHVkZSBwbGFjZWhvbGRlci1mb2N1cygpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplKSB7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXItZm9jdXMoKSB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xufVxuXG5AbWl4aW4gYW5pbWF0aW9uKCRhbmltYXRlLi4uKSB7XG4gICRtYXg6IGxlbmd0aCgkYW5pbWF0ZSk7XG4gICRhbmltYXRpb25zOiAnJztcblxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRtYXgge1xuICAgICRhbmltYXRpb25zOiAjeyRhbmltYXRpb25zICsgbnRoKCRhbmltYXRlLCAkaSl9O1xuXG4gICAgQGlmICRpIDwgJG1heCB7XG4gICAgICAkYW5pbWF0aW9uczogI3skYW5pbWF0aW9ucyArICcsICd9O1xuICAgIH1cbiAgfVxuICAtd2Via2l0LWFuaW1hdGlvbjogJGFuaW1hdGlvbnM7XG4gIC1tb3otYW5pbWF0aW9uOiAgICAkYW5pbWF0aW9ucztcbiAgLW8tYW5pbWF0aW9uOiAgICAgICRhbmltYXRpb25zO1xuICBhbmltYXRpb246ICAgICAgICAgJGFuaW1hdGlvbnM7XG59XG5cbkBtaXhpbiBrZXlmcmFtZXMoJGFuaW1hdGlvbk5hbWUpIHtcbiAgQC13ZWJraXQta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW1vei1rZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEAtby1rZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEBrZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8qKlxuICogVGhpcyBtaXhpbiBnZW5lcmF0ZXMga2V5ZmFtZXMuXG4gKiBCZWNhdXNlIG9mIGFsbCBrZXlmcmFtZXMgY2FuJ3QgYmUgc2NvcGVkLFxuICogd2UgbmVlZCB0byBwdXRzIHVuaXF1ZSBuYW1lIGluIGVhY2ggYnRuLXB1bHNlIGNhbGwuXG4gKi9cbkBtaXhpbiBidG4tcHVsc2UoJG5hbWUsICRjb2xvcikge1xuICAmLmJ0bi1wdWxzZSB7XG4gICAgQGluY2x1ZGUgYW5pbWF0aW9uKGJ0bi0jeyRuYW1lfS1wdWxzZSAxLjVzIGluZmluaXRlKTtcbiAgfVxuXG4gIEBpbmNsdWRlIGtleWZyYW1lcyhidG4tI3skbmFtZX0tcHVsc2UpIHtcbiAgICAwJSB7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgb3BhY2l0eTogbmItdGhlbWUoYnRuLWRpc2FibGVkLW9wYWNpdHkpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDFyZW0gMCAkY29sb3I7XG4gICAgICBvcGFjaXR5OiAwLjg7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIG9wYWNpdHk6IG5iLXRoZW1lKGJ0bi1kaXNhYmxlZC1vcGFjaXR5KTtcbiAgICB9XG4gIH1cbn1cblxuLypcblxuQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXNjb3BpbmctMS8jaG9zdC1zZWxlY3Rvcilcbjpob3N0IGFuZCA6aG9zdC1jb250ZXh0IGFyZSBwc2V1ZG8tY2xhc3Nlcy4gU28gd2UgYXNzdW1lIHRoZXkgY291bGQgYmUgY29tYmluZWQsXG5saWtlIG90aGVyIHBzZXVkby1jbGFzc2VzLCBldmVuIHNhbWUgb25lcy5cbkZvciBleGFtcGxlOiAnOm50aC1vZi10eXBlKDJuKTpudGgtb2YtdHlwZShldmVuKScuXG5cbklkZWFsIHNvbHV0aW9uIHdvdWxkIGJlIHRvIHByZXBlbmQgYW55IHNlbGVjdG9yIHdpdGggOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLlxuVGhlbiBuZWJ1bGFyIGNvbXBvbmVudHMgd2lsbCBiZWhhdmUgYXMgYW4gaHRtbCBlbGVtZW50IGFuZCByZXNwb25kIHRvIFtkaXJdIGF0dHJpYnV0ZSBvbiBhbnkgbGV2ZWwsXG5zbyBkaXJlY3Rpb24gY291bGQgYmUgb3ZlcnJpZGRlbiBvbiBhbnkgY29tcG9uZW50IGxldmVsLlxuXG5JbXBsZW1lbnRhdGlvbiBjb2RlOlxuXG5AbWl4aW4gbmItcnRsKCkge1xuICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgQGF0LXJvb3Qge3NlbGVjdG9yLWFwcGVuZCgnOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pJywgJil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5BbmQgd2hlbiB3ZSBjYWxsIGl0IHNvbWV3aGVyZTpcblxuOmhvc3Qge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG46aG9zdC1jb250ZXh0KC4uLikge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5cblJlc3VsdCB3aWxsIGxvb2sgbGlrZTpcblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuXG4qXG4gIFNpZGUgbm90ZTpcbiAgOmhvc3QtY29udGV4dCgpOmhvc3Qgc2VsZWN0b3IgYXJlIHZhbGlkLiBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMTVGZWIvMDMwNS5odG1sXG5cbiAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIHNob3VsZCBtYXRjaCBhbnkgcGVybXV0YXRpb24sXG4gIHNvIG9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4qXG5cblxuQ3VycmVudGx5LCB0aGVyZSdyZSB0d28gcHJvYmxlbXMgd2l0aCB0aGlzIGFwcHJvYWNoOlxuXG5GaXJzdCwgaXMgdGhhdCB3ZSBjYW4ndCBjb21iaW5lIDpob3N0LCA6aG9zdC1jb250ZXh0LiBBbmd1bGFyIGJ1Z3MgIzE0MzQ5LCAjMTkxOTkuXG5Gb3IgdGhlIG1vbWVudCBvZiB3cml0aW5nLCB0aGUgb25seSBwb3NzaWJsZSB3YXkgaXM6XG46aG9zdCB7XG4gIDpob3N0LWNvbnRleHQoLi4uKSB7XG4gICAgLi4uXG4gIH1cbn1cbkl0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSBtaXhpbiBjb3VsZCBiZSBjYWxsZWQgc29tZXdoZXJlIGRlZXBlciwgbGlrZTpcbjpob3N0IHtcbiAgcCB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkgeyAuLi4gfVxuICB9XG59XG5XZSBhcmUgbm90IGFibGUgdG8gZ28gdXAgdG8gOmhvc3QgbGV2ZWwgdG8gcGxhY2UgY29udGVudCBwYXNzZWQgdG8gbWl4aW4uXG5cblRoZSBzZWNvbmQgcHJvYmxlbSBpcyB0aGF0IHdlIG9ubHkgY2FuIGJlIHN1cmUgdGhhdCB3ZSBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIGFub3RoZXJcbjpob3N0Lzpob3N0LWNvbnRleHQgcHNldWRvLWNsYXNzIHdoZW4gY2FsbGVkIGluIHRoZW1lIGZpbGVzICgqLnRoZW1lLnNjc3MpLlxuICAqXG4gICAgU2lkZSBub3RlOlxuICAgIEN1cnJlbnRseSwgbmItaW5zdGFsbC1jb21wb25lbnQgdXNlcyBhbm90aGVyIGFwcHJvYWNoIHdoZXJlIDpob3N0IHByZXBlbmRlZCB3aXRoIHRoZSB0aGVtZSBuYW1lXG4gICAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi81Yjk2MDc4NjI0YjBhNDc2MGYyZGJjZjZmZGYwYmQ2Mjc5MWJlNWJiL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDEpLFxuICAgIGJ1dCBpdCB3YXMgbWFkZSB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50IHJlYWxpemF0aW9uIG9mIHJ0bCBhbmQgaXQgY2FuIGJlIHJld3JpdHRlbiBiYWNrIHRvXG4gICAgOmhvc3QtY29udGV4dCgkdGhlbWUpIG9uY2Ugd2Ugd2lsbCBiZSBhYmxlIHRvIHVzZSBtdWx0aXBsZSBzaGFkb3cgc2VsZWN0b3JzLlxuICAqXG5CdXQgd2hlbiBpdCdzIGNhbGxlZCBpbiAqLmNvbXBvbmVudC5zY3NzIHdlIGNhbid0IGJlIHN1cmUsIHRoYXQgc2VsZWN0b3Igc3RhcnRzIHdpdGggOmhvc3QvOmhvc3QtY29udGV4dCxcbmJlY2F1c2UgYW5ndWxhciBhbGxvd3Mgb21pdHRpbmcgcHNldWRvLWNsYXNzZXMgaWYgd2UgZG9uJ3QgbmVlZCB0byBzdHlsZSA6aG9zdCBjb21wb25lbnQgaXRzZWxmLlxuV2UgY2FuIGJyZWFrIHN1Y2ggc2VsZWN0b3JzLCBieSBqdXN0IGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gdGhlbS5cbiAgKioqXG4gICAgUG9zc2libGUgc29sdXRpb25cbiAgICBjaGVjayBpZiB3ZSBpbiB0aGVtZSBieSBzb21lIHRoZW1lIHZhcmlhYmxlcyBhbmQgaWYgc28gYXBwZW5kLCBvdGhlcndpc2UgbmVzdCBsaWtlXG4gICAgQGF0LXJvb3QgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAgIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gICAgICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgICAgIHsmfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBXaGF0IGlmIDpob3N0IHNwZWNpZmllZD8gQ2FuIHdlIGFkZCBzcGFjZSBpbiA6aG9zdC1jb250ZXh0KC4uLikgOmhvc3Q/XG4gICAgT3IgbWF5YmUgYWRkIDpob3N0IHNlbGVjdG9yIGFueXdheT8gSWYgbXVsdGlwbGUgOmhvc3Qgc2VsZWN0b3JzIGFyZSBhbGxvd2VkXG4gICoqKlxuXG5cblByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgYXBwcm9hY2guXG5cbjEuIERpcmVjdGlvbiBjYW4gYmUgYXBwbGllZCBvbmx5IG9uIGRvY3VtZW50IGxldmVsLCBiZWNhdXNlIG1peGluIHByZXBlbmRzIHRoZW1lIGNsYXNzLFxud2hpY2ggcGxhY2VkIG9uIHRoZSBib2R5LlxuMi4gKi5jb21wb25lbnQuc2NzcyBzdHlsZXMgc2hvdWxkIGJlIGluIDpob3N0IHNlbGVjdG9yLiBPdGhlcndpc2UgYW5ndWxhciB3aWxsIGFkZCBob3N0XG5hdHRyaWJ1dGUgdG8gW2Rpcj1ydGxdIGF0dHJpYnV0ZSBhcyB3ZWxsLlxuXG5cbkdlbmVyYWwgcHJvYmxlbXMuXG5cbkx0ciBpcyBkZWZhdWx0IGRvY3VtZW50IGRpcmVjdGlvbiwgYnV0IGZvciBwcm9wZXIgd29yayBvZiBuYi1sdHIgKG1lYW5zIGx0ciBvbmx5KSxcbltkaXI9bHRyXSBzaG91bGQgYmUgc3BlY2lmaWVkIGF0IGxlYXN0IHNvbWV3aGVyZS4gJzpub3QoW2Rpcj1ydGxdJyBub3QgYXBwbGljYWJsZSBoZXJlLFxuYmVjYXVzZSBpdCdzIHNhdGlzZnkgYW55IHBhcmVudCwgdGhhdCBkb24ndCBoYXZlIFtkaXI9cnRsXSBhdHRyaWJ1dGUuXG5QcmV2aW91cyBhcHByb2FjaCB3YXMgdG8gdXNlIHNpbmdsZSBydGwgbWl4aW4gYW5kIHJlc2V0IGx0ciBwcm9wZXJ0aWVzIHRvIGluaXRpYWwgdmFsdWUuXG5CdXQgc29tZXRpbWVzIGl0J3MgaGFyZCB0byBmaW5kLCB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZSBzaG91bGQgYmUuIEFuZCBzdWNoIG1peGluIGNhbGwgbG9va3MgdG9vIHZlcmJvc2UuXG4qL1xuXG5AbWl4aW4gX3ByZXBlbmQtd2l0aC1zZWxlY3Rvcigkc2VsZWN0b3IsICRwcm9wOiBudWxsLCAkdmFsdWU6IG51bGwpIHtcbiAgI3skc2VsZWN0b3J9ICYge1xuICAgIEBpZiAkcHJvcCAhPSBudWxsIHtcbiAgICAgICN7JHByb3B9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLWx0cigkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gIEBpbmNsdWRlIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJ1tkaXI9bHRyXScsICRwcm9wLCAkdmFsdWUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbmItcnRsKCRwcm9wOiBudWxsLCAkdmFsdWU6IG51bGwpIHtcbiAgQGluY2x1ZGUgX3ByZXBlbmQtd2l0aC1zZWxlY3RvcignW2Rpcj1ydGxdJywgJHByb3AsICR2YWx1ZSkge1xuICAgIEBjb250ZW50O1xuICB9O1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG4vLy8gU2xpZ2h0bHkgbGlnaHRlbiBhIGNvbG9yXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3IgLSBjb2xvciB0byB0aW50XG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRwZXJjZW50YWdlIC0gcGVyY2VudGFnZSBvZiBgJGNvbG9yYCBpbiByZXR1cm5lZCBjb2xvclxuLy8vIEByZXR1cm4ge0NvbG9yfVxuQGZ1bmN0aW9uIHRpbnQoJGNvbG9yLCAkcGVyY2VudGFnZSkge1xuICBAcmV0dXJuIG1peCh3aGl0ZSwgJGNvbG9yLCAkcGVyY2VudGFnZSk7XG59XG5cbi8vLyBTbGlnaHRseSBkYXJrZW4gYSBjb2xvclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIC0gY29sb3IgdG8gc2hhZGVcbi8vLyBAcGFyYW0ge051bWJlcn0gJHBlcmNlbnRhZ2UgLSBwZXJjZW50YWdlIG9mIGAkY29sb3JgIGluIHJldHVybmVkIGNvbG9yXG4vLy8gQHJldHVybiB7Q29sb3J9XG5AZnVuY3Rpb24gc2hhZGUoJGNvbG9yLCAkcGVyY2VudGFnZSkge1xuICBAcmV0dXJuIG1peChibGFjaywgJGNvbG9yLCAkcGVyY2VudGFnZSk7XG59XG5cbkBmdW5jdGlvbiBtYXAtc2V0KCRtYXAsICRrZXksICR2YWx1ZTogbnVsbCkge1xuICAkbmV3OiAoJGtleTogJHZhbHVlKTtcbiAgQHJldHVybiBtYXAtbWVyZ2UoJG1hcCwgJG5ldyk7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBpbXBvcnQgJy4uL2NvcmUvZnVuY3Rpb25zJztcbkBpbXBvcnQgJy4uL2NvcmUvbWl4aW5zJztcblxuJHRoZW1lOiAoXG4gIGZvbnQtbWFpbjogdW5xdW90ZSgnXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWYnKSxcbiAgZm9udC1zZWNvbmRhcnk6IGZvbnQtbWFpbixcblxuICBmb250LXdlaWdodC10aGluOiAyMDAsXG4gIGZvbnQtd2VpZ2h0LWxpZ2h0OiAzMDAsXG4gIGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwLFxuICBmb250LXdlaWdodC1ib2xkZXI6IDUwMCxcbiAgZm9udC13ZWlnaHQtYm9sZDogNjAwLFxuICBmb250LXdlaWdodC11bHRyYS1ib2xkOiA4MDAsXG5cbiAgLy8gVE9ETzogdXNlIGl0IGFzIGEgZGVmYXVsdCBmb250LXNpemVcbiAgYmFzZS1mb250LXNpemU6IDE2cHgsXG5cbiAgZm9udC1zaXplLXhsZzogMS4yNXJlbSxcbiAgZm9udC1zaXplLWxnOiAxLjEyNXJlbSxcbiAgZm9udC1zaXplOiAxcmVtLFxuICBmb250LXNpemUtc206IDAuODc1cmVtLFxuICBmb250LXNpemUteHM6IDAuNzVyZW0sXG5cbiAgcmFkaXVzOiAwLjM3NXJlbSxcbiAgcGFkZGluZzogMS4yNXJlbSxcbiAgbWFyZ2luOiAxLjVyZW0sXG4gIGxpbmUtaGVpZ2h0OiAxLjI1LFxuXG4gIGNvbG9yLWJnOiAjZmZmZmZmLFxuICBjb2xvci1iZy1hY3RpdmU6ICNlOWVkZjIsXG4gIGNvbG9yLWZnOiAjYTRhYmIzLFxuICBjb2xvci1mZy1oZWFkaW5nOiAjMmEyYTJhLFxuICBjb2xvci1mZy10ZXh0OiAjNGI0YjRiLFxuICBjb2xvci1mZy1oaWdobGlnaHQ6ICM0MGRjN2UsXG5cbiAgc2VwYXJhdG9yOiAjZWJlZWYyLFxuXG4gIGNvbG9yLWdyYXk6IHJnYmEoODEsIDExMywgMTY1LCAwLjE1KSxcbiAgY29sb3ItbmV1dHJhbDogdHJhbnNwYXJlbnQsXG4gIGNvbG9yLXdoaXRlOiAjZmZmZmZmLFxuICBjb2xvci1kaXNhYmxlZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLFxuXG4gIGNvbG9yLXByaW1hcnk6ICM4YTdmZmYsXG4gIGNvbG9yLXN1Y2Nlc3M6ICM0MGRjN2UsXG4gIGNvbG9yLWluZm86ICM0Y2E2ZmYsXG4gIGNvbG9yLXdhcm5pbmc6ICNmZmExMDAsXG4gIGNvbG9yLWRhbmdlcjogI2ZmNGM2YSxcblxuICAvLyBUT0RPOiBtb3ZlIHRvIGNvbnN0YW50c1xuICBzb2NpYWwtY29sb3ItZmFjZWJvb2s6ICMzYjU5OTgsXG4gIHNvY2lhbC1jb2xvci10d2l0dGVyOiAjNTVhY2VlLFxuICBzb2NpYWwtY29sb3ItZ29vZ2xlOiAjZGQ0YjM5LFxuICBzb2NpYWwtY29sb3ItbGlua2VkaW46ICMwMTc3YjUsXG4gIHNvY2lhbC1jb2xvci1naXRodWI6ICM2YjZiNmIsXG4gIHNvY2lhbC1jb2xvci1zdGFja292ZXJmbG93OiAjMmY5NmU4LFxuICBzb2NpYWwtY29sb3ItZHJpYmJsZTogI2YyNjc5OCxcbiAgc29jaWFsLWNvbG9yLWJlaGFuY2U6ICMwMDkzZmEsXG5cbiAgYm9yZGVyLWNvbG9yOiBjb2xvci1ncmF5LFxuICBzaGFkb3c6IDAgMnB4IDEycHggMCAjZGZlM2ViLFxuXG4gIGxpbmstY29sb3I6ICMzZGNjNmQsXG4gIGxpbmstY29sb3ItaG92ZXI6ICMyZWU1NmIsXG4gIGxpbmstY29sb3ItdmlzaXRlZDogbGluay1jb2xvcixcblxuICBzY3JvbGxiYXItZmc6ICNkYWRhZGEsXG4gIHNjcm9sbGJhci1iZzogI2YyZjJmMixcbiAgc2Nyb2xsYmFyLXdpZHRoOiA1cHgsXG4gIHNjcm9sbGJhci10aHVtYi1yYWRpdXM6IDIuNXB4LFxuXG4gIHJhZGlhbC1ncmFkaWVudDogbm9uZSxcbiAgbGluZWFyLWdyYWRpZW50OiBub25lLFxuXG4gIGNhcmQtZm9udC1zaXplOiBmb250LXNpemUsXG4gIGNhcmQtbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBjYXJkLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIGNhcmQtZmc6IGNvbG9yLWZnLCAvLyBUT0RPOiBub3QgdXNlZFxuICBjYXJkLWZnLXRleHQ6IGNvbG9yLWZnLXRleHQsXG4gIGNhcmQtZmctaGVhZGluZzogY29sb3ItZmctaGVhZGluZywgLy8gVE9ETzogbm90IHVzZWRcbiAgY2FyZC1iZzogY29sb3ItYmcsXG4gIGNhcmQtaGVpZ2h0LXh4c21hbGw6IDk2cHgsXG4gIGNhcmQtaGVpZ2h0LXhzbWFsbDogMjE2cHgsXG4gIGNhcmQtaGVpZ2h0LXNtYWxsOiAzMzZweCxcbiAgY2FyZC1oZWlnaHQtbWVkaXVtOiA0NTZweCxcbiAgY2FyZC1oZWlnaHQtbGFyZ2U6IDU3NnB4LFxuICBjYXJkLWhlaWdodC14bGFyZ2U6IDY5NnB4LFxuICBjYXJkLWhlaWdodC14eGxhcmdlOiA4MTZweCxcbiAgY2FyZC1zaGFkb3c6IHNoYWRvdyxcbiAgY2FyZC1ib3JkZXItd2lkdGg6IDAsXG4gIGNhcmQtYm9yZGVyLXR5cGU6IHNvbGlkLFxuICBjYXJkLWJvcmRlci1jb2xvcjogY29sb3ItYmcsXG4gIGNhcmQtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBjYXJkLXBhZGRpbmc6IHBhZGRpbmcsXG4gIGNhcmQtbWFyZ2luOiBtYXJnaW4sXG4gIGNhcmQtaGVhZGVyLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgY2FyZC1oZWFkZXItZm9udC1zaXplOiBmb250LXNpemUtbGcsXG4gIGNhcmQtaGVhZGVyLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkLFxuICBjYXJkLXNlcGFyYXRvcjogc2VwYXJhdG9yLFxuICBjYXJkLWhlYWRlci1mZzogY29sb3ItZmcsIC8vIFRPRE86IG5vdCB1c2VkXG4gIGNhcmQtaGVhZGVyLWZnLWhlYWRpbmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGNhcmQtaGVhZGVyLWFjdGl2ZS1iZzogY29sb3ItZmcsXG4gIGNhcmQtaGVhZGVyLWFjdGl2ZS1mZzogY29sb3ItYmcsXG4gIGNhcmQtaGVhZGVyLWRpc2FibGVkLWJnOiBjb2xvci1kaXNhYmxlZCxcbiAgY2FyZC1oZWFkZXItcHJpbWFyeS1iZzogY29sb3ItcHJpbWFyeSxcbiAgY2FyZC1oZWFkZXItaW5mby1iZzogY29sb3ItaW5mbyxcbiAgY2FyZC1oZWFkZXItc3VjY2Vzcy1iZzogY29sb3Itc3VjY2VzcyxcbiAgY2FyZC1oZWFkZXItd2FybmluZy1iZzogY29sb3Itd2FybmluZyxcbiAgY2FyZC1oZWFkZXItZGFuZ2VyLWJnOiBjb2xvci1kYW5nZXIsXG4gIGNhcmQtaGVhZGVyLWJvcmRlci13aWR0aDogMXB4LFxuICBjYXJkLWhlYWRlci1ib3JkZXItdHlwZTogc29saWQsXG4gIGNhcmQtaGVhZGVyLWJvcmRlci1jb2xvcjogY2FyZC1zZXBhcmF0b3IsXG5cbiAgaGVhZGVyLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgaGVhZGVyLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBoZWFkZXItbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBoZWFkZXItZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGhlYWRlci1iZzogY29sb3ItYmcsXG4gIGhlYWRlci1oZWlnaHQ6IDQuNzVyZW0sXG4gIGhlYWRlci1wYWRkaW5nOiAxLjI1cmVtLFxuICBoZWFkZXItc2hhZG93OiBzaGFkb3csXG5cbiAgZm9vdGVyLWhlaWdodDogNC43MjVyZW0sXG4gIGZvb3Rlci1wYWRkaW5nOiAxLjI1cmVtLFxuICBmb290ZXItZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGZvb3Rlci1mZy1oaWdobGlnaHQ6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGZvb3Rlci1iZzogY29sb3ItYmcsXG4gIGZvb3Rlci1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgZm9vdGVyLXNoYWRvdzogc2hhZG93LFxuXG4gIGxheW91dC1mb250LWZhbWlseTogZm9udC1tYWluLFxuICBsYXlvdXQtZm9udC1zaXplOiBmb250LXNpemUsXG4gIGxheW91dC1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIGxheW91dC1mZzogY29sb3ItZmcsXG4gIGxheW91dC1iZzogI2ViZWZmNSxcbiAgbGF5b3V0LW1pbi1oZWlnaHQ6IDEwMHZoLFxuICBsYXlvdXQtY29udGVudC13aWR0aDogOTAwcHgsXG4gIGxheW91dC13aW5kb3ctbW9kZS1taW4td2lkdGg6IDMwMHB4LFxuICBsYXlvdXQtd2luZG93LW1vZGUtbWF4LXdpZHRoOiAxOTIwcHgsXG4gIGxheW91dC13aW5kb3ctbW9kZS1iZzogbGF5b3V0LWJnLFxuICBsYXlvdXQtd2luZG93LW1vZGUtcGFkZGluZy10b3A6IDQuNzVyZW0sXG4gIGxheW91dC13aW5kb3ctc2hhZG93OiBzaGFkb3csXG4gIGxheW91dC1wYWRkaW5nOiAyLjI1cmVtIDIuMjVyZW0gMC43NXJlbSxcbiAgbGF5b3V0LW1lZGl1bS1wYWRkaW5nOiAxLjVyZW0gMS41cmVtIDAuNXJlbSxcbiAgbGF5b3V0LXNtYWxsLXBhZGRpbmc6IDFyZW0gMXJlbSAwLFxuXG4gIHNpZGViYXItZm9udC1zaXplOiBmb250LXNpemUsXG4gIHNpZGViYXItbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBzaWRlYmFyLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBzaWRlYmFyLWJnOiBjb2xvci1iZyxcbiAgc2lkZWJhci1oZWlnaHQ6IDEwMHZoLFxuICBzaWRlYmFyLXdpZHRoOiAxNnJlbSxcbiAgc2lkZWJhci13aWR0aC1jb21wYWN0OiAzLjVyZW0sXG4gIHNpZGViYXItcGFkZGluZzogcGFkZGluZyxcbiAgc2lkZWJhci1oZWFkZXItaGVpZ2h0OiAzLjVyZW0sXG4gIHNpZGViYXItZm9vdGVyLWhlaWdodDogMy41cmVtLFxuICBzaWRlYmFyLXNoYWRvdzogc2hhZG93LFxuXG4gIG1lbnUtZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICBtZW51LWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBtZW51LWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkZXIsXG4gIG1lbnUtZmc6IGNvbG9yLWZnLXRleHQsXG4gIG1lbnUtYmc6IGNvbG9yLWJnLFxuICBtZW51LWFjdGl2ZS1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgbWVudS1hY3RpdmUtYmc6IGNvbG9yLWJnLFxuICBtZW51LWFjdGl2ZS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZCxcblxuICBtZW51LXN1Ym1lbnUtYmc6IGNvbG9yLWJnLFxuICBtZW51LXN1Ym1lbnUtZmc6IGNvbG9yLWZnLXRleHQsXG4gIG1lbnUtc3VibWVudS1hY3RpdmUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIG1lbnUtc3VibWVudS1hY3RpdmUtYmc6IGNvbG9yLWJnLFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZmctaGlnaGxpZ2h0LFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLXNoYWRvdzogbm9uZSxcbiAgbWVudS1zdWJtZW51LWhvdmVyLWZnOiBtZW51LXN1Ym1lbnUtYWN0aXZlLWZnLFxuICBtZW51LXN1Ym1lbnUtaG92ZXItYmc6IG1lbnUtc3VibWVudS1iZyxcbiAgbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLXdpZHRoOiAwLjEyNXJlbSxcbiAgbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1wYWRkaW5nOiAwLjVyZW0gMXJlbSxcbiAgbWVudS1zdWJtZW51LWl0ZW0tY29udGFpbmVyLXBhZGRpbmc6IDAgMS4yNXJlbSxcbiAgbWVudS1zdWJtZW51LXBhZGRpbmc6IDAuNXJlbSxcblxuICBtZW51LWdyb3VwLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkZXIsXG4gIG1lbnUtZ3JvdXAtZm9udC1zaXplOiAwLjg3NXJlbSxcbiAgbWVudS1ncm91cC1mZzogY29sb3ItZmcsXG4gIG1lbnUtZ3JvdXAtcGFkZGluZzogMXJlbSAxLjI1cmVtLFxuICBtZW51LWl0ZW0tcGFkZGluZzogMC42NzVyZW0gMC43NXJlbSxcbiAgbWVudS1pdGVtLXNlcGFyYXRvcjogc2VwYXJhdG9yLFxuICBtZW51LWljb24tZm9udC1zaXplOiAyLjVyZW0sXG4gIG1lbnUtaWNvbi1tYXJnaW46IDAgMC4yNXJlbSAwLFxuICBtZW51LWljb24tY29sb3I6IGNvbG9yLWZnLFxuICBtZW51LWljb24tYWN0aXZlLWNvbG9yOiBjb2xvci1mZy1oZWFkaW5nLFxuXG4gIHRhYnMtZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICB0YWJzLWZvbnQtc2l6ZTogZm9udC1zaXplLWxnLFxuICB0YWJzLWNvbnRlbnQtZm9udC1mYW1pbHk6IGZvbnQtbWFpbixcbiAgdGFicy1jb250ZW50LWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICB0YWJzLWFjdGl2ZS1iZzogdHJhbnNwYXJlbnQsXG4gIHRhYnMtYWN0aXZlLWZvbnQtd2VpZ2h0OiBjYXJkLWhlYWRlci1mb250LXdlaWdodCxcbiAgdGFicy1wYWRkaW5nOiBwYWRkaW5nLFxuICB0YWJzLWNvbnRlbnQtcGFkZGluZzogMCxcbiAgdGFicy1oZWFkZXItYmc6IHRyYW5zcGFyZW50LFxuICB0YWJzLXNlcGFyYXRvcjogc2VwYXJhdG9yLFxuICB0YWJzLWZnOiBjb2xvci1mZyxcbiAgdGFicy1mZy10ZXh0OiBjb2xvci1mZy10ZXh0LFxuICB0YWJzLWZnLWhlYWRpbmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIHRhYnMtYmc6IHRyYW5zcGFyZW50LFxuICB0YWJzLXNlbGVjdGVkOiBjb2xvci1zdWNjZXNzLFxuICB0YWJzLXNlbGVjdGVkLXNlY29uZC1jb2xvcjogY29sb3Itc3VjY2VzcyxcbiAgdGFicy1zZWxlY3RlZC1kZWdyZWVzOiAwLFxuICB0YWJzLWljb24tb25seS1tYXgtd2lkdGg6IDU3NnB4LFxuXG4gIHJvdXRlLXRhYnMtZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICByb3V0ZS10YWJzLWZvbnQtc2l6ZTogZm9udC1zaXplLWxnLFxuICByb3V0ZS10YWJzLWFjdGl2ZS1iZzogdHJhbnNwYXJlbnQsXG4gIHJvdXRlLXRhYnMtYWN0aXZlLWZvbnQtd2VpZ2h0OiBjYXJkLWhlYWRlci1mb250LXdlaWdodCxcbiAgcm91dGUtdGFicy1wYWRkaW5nOiBwYWRkaW5nLFxuICByb3V0ZS10YWJzLWhlYWRlci1iZzogdHJhbnNwYXJlbnQsXG4gIHJvdXRlLXRhYnMtc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG4gIHJvdXRlLXRhYnMtZmc6IGNvbG9yLWZnLFxuICByb3V0ZS10YWJzLWZnLWhlYWRpbmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIHJvdXRlLXRhYnMtYmc6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzLXNlbGVjdGVkOiBjb2xvci1zdWNjZXNzLFxuICByb3V0ZS10YWJzLWljb24tb25seS1tYXgtd2lkdGg6IDU3NnB4LFxuXG4gIHVzZXItZm9udC1zaXplOiBmb250LXNpemUsXG4gIHVzZXItbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICB1c2VyLWJnOiBjb2xvci1iZyxcbiAgdXNlci1mZzogY29sb3ItZmcsXG4gIHVzZXItZmctaGlnaGxpZ2h0OiAjYmNjM2NjLFxuICB1c2VyLWZvbnQtZmFtaWx5LXNlY29uZGFyeTogZm9udC1zZWNvbmRhcnksXG4gIHVzZXItc2l6ZS1zbWFsbDogMS41cmVtLFxuICB1c2VyLXNpemUtbWVkaXVtOiAyLjVyZW0sXG4gIHVzZXItc2l6ZS1sYXJnZTogMy4yNXJlbSxcbiAgdXNlci1zaXplLXhsYXJnZTogNHJlbSxcblxuICBwb3BvdmVyLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBwb3BvdmVyLWJnOiBjb2xvci1iZyxcbiAgcG9wb3Zlci1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MsXG4gIHBvcG92ZXItYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBwb3BvdmVyLXNoYWRvdzogbm9uZSxcbiAgcG9wb3Zlci1hcnJvdy1zaXplOiAxMXB4LFxuXG4gIGNvbnRleHQtbWVudS1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgY29udGV4dC1tZW51LWJnOiBjb2xvci1iZyxcbiAgY29udGV4dC1tZW51LWFjdGl2ZS1mZzogY29sb3Itd2hpdGUsXG4gIGNvbnRleHQtbWVudS1hY3RpdmUtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIGNvbnRleHQtbWVudS1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MsXG4gIGNvbnRleHQtbWVudS1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIGNvbnRleHQtbWVudS1zaGFkb3c6IG5vbmUsXG4gIGNvbnRleHQtbWVudS1hcnJvdy1zaXplOiAxMXB4LFxuXG4gIGFjdGlvbnMtZm9udC1zaXplOiBmb250LXNpemUsXG4gIGFjdGlvbnMtZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICBhY3Rpb25zLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgYWN0aW9ucy1mZzogY29sb3ItZmcsXG4gIGFjdGlvbnMtYmc6IGNvbG9yLWJnLFxuICBhY3Rpb25zLXNlcGFyYXRvcjogc2VwYXJhdG9yLFxuICBhY3Rpb25zLXBhZGRpbmc6IHBhZGRpbmcsXG4gIGFjdGlvbnMtc2l6ZS1zbWFsbDogMS41cmVtLFxuICBhY3Rpb25zLXNpemUtbWVkaXVtOiAyLjI1cmVtLFxuICBhY3Rpb25zLXNpemUtbGFyZ2U6IDMuNXJlbSxcblxuICBzZWFyY2gtYnRuLW9wZW4tZmc6IGNvbG9yLWZnLFxuICBzZWFyY2gtYnRuLWNsb3NlLWZnOlx0Y29sb3ItZmcsXG4gIHNlYXJjaC1iZzogbGF5b3V0LWJnLFxuICBzZWFyY2gtYmctc2Vjb25kYXJ5OiBjb2xvci1mZyxcbiAgc2VhcmNoLXRleHQ6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIHNlYXJjaC1pbmZvOiBjb2xvci1mZyxcbiAgc2VhcmNoLWRhc2g6IGNvbG9yLWZnLFxuICBzZWFyY2gtcGxhY2Vob2xkZXI6IGNvbG9yLWZnLFxuXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgc21hcnQtdGFibGUtaGVhZGVyLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkLFxuICBzbWFydC10YWJsZS1oZWFkZXItbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBzbWFydC10YWJsZS1oZWFkZXItZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1iZzogY29sb3ItYmcsXG5cbiAgc21hcnQtdGFibGUtZm9udC1mYW1pbHk6IGZvbnQtbWFpbixcbiAgc21hcnQtdGFibGUtZm9udC1zaXplOiBmb250LXNpemUsXG4gIHNtYXJ0LXRhYmxlLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIHNtYXJ0LXRhYmxlLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgc21hcnQtdGFibGUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIHNtYXJ0LXRhYmxlLWJnOiBjb2xvci1iZyxcblxuICBzbWFydC10YWJsZS1iZy1ldmVuOiAjZjVmN2ZjLFxuICBzbWFydC10YWJsZS1mZy1zZWNvbmRhcnk6IGNvbG9yLWZnLFxuICBzbWFydC10YWJsZS1iZy1hY3RpdmU6ICNlNmYzZmYsXG4gIHNtYXJ0LXRhYmxlLXBhZGRpbmc6IDAuODc1cmVtIDEuMjVyZW0sXG4gIHNtYXJ0LXRhYmxlLWZpbHRlci1wYWRkaW5nOiAwLjM3NXJlbSAwLjVyZW0sXG4gIHNtYXJ0LXRhYmxlLXNlcGFyYXRvcjogc2VwYXJhdG9yLFxuICBzbWFydC10YWJsZS1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG5cbiAgc21hcnQtdGFibGUtcGFnaW5nLWJvcmRlci1jb2xvcjogc2VwYXJhdG9yLFxuICBzbWFydC10YWJsZS1wYWdpbmctYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1mZy1hY3RpdmU6ICNmZmZmZmYsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1iZy1hY3RpdmU6IGNvbG9yLXN1Y2Nlc3MsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ob3ZlcjogcmdiYSgwLCAwLCAwLCAwLjA1KSxcblxuICB0b2FzdHItYmc6IGNvbG9yLWJnLFxuICB0b2FzdHItcGFkZGluZzogMS4xMjVyZW0sXG4gIHRvYXN0ci1mZzogY29sb3ItZmctdGV4dCxcbiAgdG9hc3RyLWJvcmRlcjogMC4xMjVyZW0gc29saWQsXG4gIHRvYXN0ci1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIHRvYXN0ci1ib3JkZXItY29sb3I6ICNiY2MzY2MsXG4gIHRvYXN0ci1pY29uLXJhZGl1czogMC4yNXJlbSxcbiAgdG9hc3RyLXNoYWRvdzogc2hhZG93LFxuXG4gIGJ0bi1mZzogY29sb3Itd2hpdGUsXG4gIGJ0bi1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIGJ0bi1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIGJ0bi1kaXNhYmxlZC1vcGFjaXR5OiAwLjMsXG4gIGJ0bi1jdXJzb3I6IGRlZmF1bHQsXG5cbiAgYnRuLXByaW1hcnktYmc6IGNvbG9yLXByaW1hcnksXG4gIGJ0bi1zZWNvbmRhcnktYmc6IHRyYW5zcGFyZW50LFxuICBidG4taW5mby1iZzogY29sb3ItaW5mbyxcbiAgYnRuLXN1Y2Nlc3MtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIGJ0bi13YXJuaW5nLWJnOiBjb2xvci13YXJuaW5nLFxuICBidG4tZGFuZ2VyLWJnOiBjb2xvci1kYW5nZXIsXG5cbiAgYnRuLXNlY29uZGFyeS1ib3JkZXI6ICNkYWRmZTYsXG4gIGJ0bi1zZWNvbmRhcnktYm9yZGVyLXdpZHRoOiAycHgsXG5cbiAgYnRuLXBhZGRpbmcteS1sZzogMC44NzVyZW0sXG4gIGJ0bi1wYWRkaW5nLXgtbGc6IDEuNzVyZW0sXG4gIGJ0bi1mb250LXNpemUtbGc6IGZvbnQtc2l6ZS1sZyxcblxuICAvLyBkZWZhdWx0IHNpemVcbiAgYnRuLXBhZGRpbmcteS1tZDogMC43NXJlbSxcbiAgYnRuLXBhZGRpbmcteC1tZDogMS41cmVtLFxuICBidG4tZm9udC1zaXplLW1kOiAxcmVtLFxuXG4gIGJ0bi1wYWRkaW5nLXktc206IDAuNjI1cmVtLFxuICBidG4tcGFkZGluZy14LXNtOiAxLjVyZW0sXG4gIGJ0bi1mb250LXNpemUtc206IDAuODc1cmVtLFxuXG4gIGJ0bi1wYWRkaW5nLXkteHM6IDAuNXJlbSxcbiAgYnRuLXBhZGRpbmcteC14czogMS4yNXJlbSxcbiAgYnRuLWZvbnQtc2l6ZS14czogMC43NXJlbSxcblxuICBidG4tYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBidG4tcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IDAuMjVyZW0sXG4gIGJ0bi1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuNzVyZW0sXG4gIGJ0bi1yb3VuZC1ib3JkZXItcmFkaXVzOiAxLjVyZW0sXG5cbiAgYnRuLWhlcm8tc2hhZG93OiBub25lLFxuICBidG4taGVyby10ZXh0LXNoYWRvdzogbm9uZSxcbiAgYnRuLWhlcm8tYmV2ZWwtc2l6ZTogMCAwIDAgMCxcbiAgYnRuLWhlcm8tZ2xvdy1zaXplOiAwIDAgMCAwLFxuICBidG4taGVyby1wcmltYXJ5LWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1zdWNjZXNzLWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby13YXJuaW5nLWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1pbmZvLWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1kYW5nZXItZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLXNlY29uZGFyeS1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tZGVncmVlOiAyMGRlZyxcbiAgYnRuLWhlcm8tcHJpbWFyeS1kZWdyZWU6IGJ0bi1oZXJvLWRlZ3JlZSxcbiAgYnRuLWhlcm8tc3VjY2Vzcy1kZWdyZWU6IGJ0bi1oZXJvLWRlZ3JlZSxcbiAgYnRuLWhlcm8td2FybmluZy1kZWdyZWU6IDEwZGVnLFxuICBidG4taGVyby1pbmZvLWRlZ3JlZTogLTEwZGVnLFxuICBidG4taGVyby1kYW5nZXItZGVncmVlOiAtMjBkZWcsXG4gIGJ0bi1oZXJvLXNlY29uZGFyeS1kZWdyZWU6IGJ0bi1oZXJvLWRlZ3JlZSxcbiAgYnRuLWhlcm8tYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuXG4gIGJ0bi1vdXRsaW5lLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBidG4tb3V0bGluZS1ob3Zlci1mZzogI2ZmZmZmZixcbiAgYnRuLW91dGxpbmUtZm9jdXMtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG5cbiAgYnRuLWdyb3VwLWJnOiBsYXlvdXQtYmcsXG4gIGJ0bi1ncm91cC1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgYnRuLWdyb3VwLXNlcGFyYXRvcjogI2RhZGZlNixcblxuICBmb3JtLWNvbnRyb2wtdGV4dC1wcmltYXJ5LWNvbG9yOiBjb2xvci1mZy1oZWFkaW5nLFxuICBmb3JtLWNvbnRyb2wtYmc6IGNvbG9yLWJnLFxuICBmb3JtLWNvbnRyb2wtZm9jdXMtYmc6IGNvbG9yLWJnLFxuXG4gIGZvcm0tY29udHJvbC1ib3JkZXItd2lkdGg6IDJweCxcbiAgZm9ybS1jb250cm9sLWJvcmRlci10eXBlOiBzb2xpZCxcbiAgZm9ybS1jb250cm9sLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgZm9ybS1jb250cm9sLXNlbWktcm91bmQtYm9yZGVyLXJhZGl1czogMC43NXJlbSxcbiAgZm9ybS1jb250cm9sLXJvdW5kLWJvcmRlci1yYWRpdXM6IDEuNXJlbSxcbiAgZm9ybS1jb250cm9sLWJvcmRlci1jb2xvcjogI2RhZGZlNixcbiAgZm9ybS1jb250cm9sLXNlbGVjdGVkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2VzcyxcblxuICBmb3JtLWNvbnRyb2wtaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8sXG4gIGZvcm0tY29udHJvbC1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2VzcyxcbiAgZm9ybS1jb250cm9sLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlcixcbiAgZm9ybS1jb250cm9sLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLFxuXG4gIGZvcm0tY29udHJvbC1wbGFjZWhvbGRlci1jb2xvcjogY29sb3ItZmcsXG4gIGZvcm0tY29udHJvbC1wbGFjZWhvbGRlci1mb250LXNpemU6IDFyZW0sXG5cbiAgZm9ybS1jb250cm9sLWZvbnQtc2l6ZTogMXJlbSxcbiAgZm9ybS1jb250cm9sLXBhZGRpbmc6IDAuNzVyZW0gMS4xMjVyZW0sXG4gIGZvcm0tY29udHJvbC1mb250LXNpemUtc206IGZvbnQtc2l6ZS1zbSxcbiAgZm9ybS1jb250cm9sLXBhZGRpbmctc206IDAuMzc1cmVtIDEuMTI1cmVtLFxuICBmb3JtLWNvbnRyb2wtZm9udC1zaXplLWxnOiBmb250LXNpemUtbGcsXG4gIGZvcm0tY29udHJvbC1wYWRkaW5nLWxnOiAxLjEyNXJlbSxcblxuICBmb3JtLWNvbnRyb2wtbGFiZWwtZm9udC13ZWlnaHQ6IDQwMCxcblxuICBmb3JtLWNvbnRyb2wtZmVlZGJhY2stZm9udC1zaXplOiAwLjg3NXJlbSxcbiAgZm9ybS1jb250cm9sLWZlZWRiYWNrLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG5cbiAgY2hlY2tib3gtYmc6IHRyYW5zcGFyZW50LFxuICBjaGVja2JveC1zaXplOiAxLjI1cmVtLFxuICBjaGVja2JveC1ib3JkZXItc2l6ZTogMnB4LFxuICBjaGVja2JveC1ib3JkZXItY29sb3I6IGZvcm0tY29udHJvbC1ib3JkZXItY29sb3IsXG4gIGNoZWNrYm94LWNoZWNrbWFyazogdHJhbnNwYXJlbnQsXG5cbiAgY2hlY2tib3gtY2hlY2tlZC1iZzogdHJhbnNwYXJlbnQsXG4gIGNoZWNrYm94LWNoZWNrZWQtc2l6ZTogMS4yNXJlbSxcbiAgY2hlY2tib3gtY2hlY2tlZC1ib3JkZXItc2l6ZTogMnB4LFxuICBjaGVja2JveC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2VzcyxcbiAgY2hlY2tib3gtY2hlY2tlZC1jaGVja21hcms6IGNvbG9yLWZnLWhlYWRpbmcsXG5cbiAgY2hlY2tib3gtZGlzYWJsZWQtYmc6IHRyYW5zcGFyZW50LFxuICBjaGVja2JveC1kaXNhYmxlZC1zaXplOiAxLjI1cmVtLFxuICBjaGVja2JveC1kaXNhYmxlZC1ib3JkZXItc2l6ZTogMnB4LFxuICBjaGVja2JveC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGNoZWNrYm94LWRpc2FibGVkLWNoZWNrbWFyazogY29sb3ItZmctaGVhZGluZyxcblxuICBtb2RhbC1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgbW9kYWwtbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBtb2RhbC1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBtb2RhbC1mZzogY29sb3ItZmctdGV4dCxcbiAgbW9kYWwtZmctaGVhZGluZzogY29sb3ItZmctaGVhZGluZyxcbiAgbW9kYWwtYmc6IGNvbG9yLWJnLFxuICBtb2RhbC1ib3JkZXI6IHRyYW5zcGFyZW50LFxuICBtb2RhbC1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIG1vZGFsLXBhZGRpbmc6IHBhZGRpbmcsXG4gIG1vZGFsLWhlYWRlci1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIG1vZGFsLWhlYWRlci1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZGVyLFxuICBtb2RhbC1oZWFkZXItZm9udC1zaXplOiBmb250LXNpemUtbGcsXG4gIG1vZGFsLWJvZHktZm9udC1mYW1pbHk6IGZvbnQtbWFpbixcbiAgbW9kYWwtYm9keS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBtb2RhbC1ib2R5LWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBtb2RhbC1zZXBhcmF0b3I6IHNlcGFyYXRvcixcblxuICBiYWRnZS1mZy10ZXh0OiBjb2xvci13aGl0ZSxcbiAgYmFkZ2UtcHJpbWFyeS1iZy1jb2xvcjogY29sb3ItcHJpbWFyeSxcbiAgYmFkZ2Utc3VjY2Vzcy1iZy1jb2xvcjogY29sb3Itc3VjY2VzcyxcbiAgYmFkZ2UtaW5mby1iZy1jb2xvcjogY29sb3ItaW5mbyxcbiAgYmFkZ2Utd2FybmluZy1iZy1jb2xvcjogY29sb3Itd2FybmluZyxcbiAgYmFkZ2UtZGFuZ2VyLWJnLWNvbG9yOiBjb2xvci1kYW5nZXIsXG5cbiAgcHJvZ3Jlc3MtYmFyLWhlaWdodC14bGc6IDEuNzVyZW0sXG4gIHByb2dyZXNzLWJhci1oZWlnaHQtbGc6IDEuNXJlbSxcbiAgcHJvZ3Jlc3MtYmFyLWhlaWdodDogMS4zNzVyZW0sXG4gIHByb2dyZXNzLWJhci1oZWlnaHQtc206IDEuMjVyZW0sXG4gIHByb2dyZXNzLWJhci1oZWlnaHQteHM6IDFyZW0sXG4gIHByb2dyZXNzLWJhci1hbmltYXRpb24tZHVyYXRpb246IDQwMG1zLFxuICBwcm9ncmVzcy1iYXItZm9udC1zaXplLXhsZzogZm9udC1zaXplLXhsZyxcbiAgcHJvZ3Jlc3MtYmFyLWZvbnQtc2l6ZS1sZzogZm9udC1zaXplLWxnLFxuICBwcm9ncmVzcy1iYXItZm9udC1zaXplOiBmb250LXNpemUsXG4gIHByb2dyZXNzLWJhci1mb250LXNpemUtc206IGZvbnQtc2l6ZS1zbSxcbiAgcHJvZ3Jlc3MtYmFyLWZvbnQtc2l6ZS14czogZm9udC1zaXplLXhzLFxuICBwcm9ncmVzcy1iYXItcmFkaXVzOiByYWRpdXMsXG4gIHByb2dyZXNzLWJhci1iZzogbGF5b3V0LWJnLFxuICBwcm9ncmVzcy1iYXItZm9udC1jb2xvcjogY29sb3Itd2hpdGUsXG4gIHByb2dyZXNzLWJhci1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZCxcbiAgcHJvZ3Jlc3MtYmFyLWRlZmF1bHQtYmc6IGNvbG9yLWluZm8sXG4gIHByb2dyZXNzLWJhci1wcmltYXJ5LWJnOiBjb2xvci1wcmltYXJ5LFxuICBwcm9ncmVzcy1iYXItc3VjY2Vzcy1iZzogY29sb3Itc3VjY2VzcyxcbiAgcHJvZ3Jlc3MtYmFyLWluZm8tYmc6IGNvbG9yLWluZm8sXG4gIHByb2dyZXNzLWJhci13YXJuaW5nLWJnOiBjb2xvci13YXJuaW5nLFxuICBwcm9ncmVzcy1iYXItZGFuZ2VyLWJnOiBjb2xvci1kYW5nZXIsXG5cbiAgYWxlcnQtZm9udC1zaXplOiBmb250LXNpemUsXG4gIGFsZXJ0LWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgYWxlcnQtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgYWxlcnQtZmc6IGNvbG9yLXdoaXRlLFxuICBhbGVydC1vdXRsaW5lLWZnOiBjb2xvci1mZyxcbiAgYWxlcnQtYmc6IGNvbG9yLWJnLFxuICBhbGVydC1hY3RpdmUtYmc6IGNvbG9yLWZnLFxuICBhbGVydC1kaXNhYmxlZC1iZzogY29sb3ItZGlzYWJsZWQsXG4gIGFsZXJ0LWRpc2FibGVkLWZnOiBjb2xvci1mZyxcbiAgYWxlcnQtcHJpbWFyeS1iZzogY29sb3ItcHJpbWFyeSxcbiAgYWxlcnQtaW5mby1iZzogY29sb3ItaW5mbyxcbiAgYWxlcnQtc3VjY2Vzcy1iZzogY29sb3Itc3VjY2VzcyxcbiAgYWxlcnQtd2FybmluZy1iZzogY29sb3Itd2FybmluZyxcbiAgYWxlcnQtZGFuZ2VyLWJnOiBjb2xvci1kYW5nZXIsXG4gIGFsZXJ0LWhlaWdodC14eHNtYWxsOiA1MnB4LFxuICBhbGVydC1oZWlnaHQteHNtYWxsOiA3MnB4LFxuICBhbGVydC1oZWlnaHQtc21hbGw6IDkycHgsXG4gIGFsZXJ0LWhlaWdodC1tZWRpdW06IDExMnB4LFxuICBhbGVydC1oZWlnaHQtbGFyZ2U6IDEzMnB4LFxuICBhbGVydC1oZWlnaHQteGxhcmdlOiAxNTJweCxcbiAgYWxlcnQtaGVpZ2h0LXh4bGFyZ2U6IDE3MnB4LFxuICBhbGVydC1zaGFkb3c6IG5vbmUsXG4gIGFsZXJ0LWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgYWxlcnQtcGFkZGluZzogMXJlbSAxLjEyNXJlbSxcbiAgYWxlcnQtY2xvc2FibGUtcGFkZGluZzogM3JlbSxcbiAgYWxlcnQtYnV0dG9uLXBhZGRpbmc6IDNyZW0sXG4gIGFsZXJ0LW1hcmdpbjogbWFyZ2luLFxuXG4gIGNoYXQtZm9udC1zaXplOiBmb250LXNpemUsXG4gIGNoYXQtZmc6IGNvbG9yLXdoaXRlLFxuICBjaGF0LWJnOiBjb2xvci1iZyxcbiAgY2hhdC1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIGNoYXQtZmctdGV4dDogY29sb3ItZmctdGV4dCxcbiAgY2hhdC1oZWlnaHQteHhzbWFsbDogOTZweCxcbiAgY2hhdC1oZWlnaHQteHNtYWxsOiAyMTZweCxcbiAgY2hhdC1oZWlnaHQtc21hbGw6IDMzNnB4LFxuICBjaGF0LWhlaWdodC1tZWRpdW06IDQ1NnB4LFxuICBjaGF0LWhlaWdodC1sYXJnZTogNTc2cHgsXG4gIGNoYXQtaGVpZ2h0LXhsYXJnZTogNjk2cHgsXG4gIGNoYXQtaGVpZ2h0LXh4bGFyZ2U6IDgxNnB4LFxuICBjaGF0LWJvcmRlcjogYm9yZGVyLFxuICBjaGF0LXBhZGRpbmc6IHBhZGRpbmcsXG4gIGNoYXQtc2hhZG93OiBzaGFkb3csXG4gIGNoYXQtc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG4gIGNoYXQtbWVzc2FnZS1mZzogY29sb3Itd2hpdGUsXG4gIGNoYXQtbWVzc2FnZS1iZzogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNGNhNmZmLCAjNTliZmZmKSxcbiAgY2hhdC1tZXNzYWdlLXJlcGx5LWJnOiBjb2xvci1iZy1hY3RpdmUsXG4gIGNoYXQtbWVzc2FnZS1yZXBseS1mZzogY29sb3ItZmctdGV4dCxcbiAgY2hhdC1tZXNzYWdlLWF2YXRhci1iZzogY29sb3ItZmcsXG4gIGNoYXQtbWVzc2FnZS1zZW5kZXItZmc6IGNvbG9yLWZnLFxuICBjaGF0LW1lc3NhZ2UtcXVvdGUtZmc6IGNvbG9yLWZnLFxuICBjaGF0LW1lc3NhZ2UtcXVvdGUtYmc6IGNvbG9yLWJnLWFjdGl2ZSxcbiAgY2hhdC1tZXNzYWdlLWZpbGUtZmc6IGNvbG9yLWZnLFxuICBjaGF0LW1lc3NhZ2UtZmlsZS1iZzogdHJhbnNwYXJlbnQsXG4gIGNoYXQtZm9ybS1iZzogdHJhbnNwYXJlbnQsXG4gIGNoYXQtZm9ybS1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgY2hhdC1mb3JtLWJvcmRlcjogc2VwYXJhdG9yLFxuICBjaGF0LWZvcm0tcGxhY2Vob2xkZXItZmc6IGNvbG9yLWZnLFxuICBjaGF0LWZvcm0tYWN0aXZlLWJvcmRlcjogY29sb3ItZmcsXG4gIGNoYXQtYWN0aXZlLWJnOiBjb2xvci1mZyxcbiAgY2hhdC1kaXNhYmxlZC1iZzogY29sb3ItZGlzYWJsZWQsXG4gIGNoYXQtZGlzYWJsZWQtZmc6IGNvbG9yLWZnLFxuICBjaGF0LXByaW1hcnktYmc6IGNvbG9yLXByaW1hcnksXG4gIGNoYXQtaW5mby1iZzogY29sb3ItaW5mbyxcbiAgY2hhdC1zdWNjZXNzLWJnOiBjb2xvci1zdWNjZXNzLFxuICBjaGF0LXdhcm5pbmctYmc6IGNvbG9yLXdhcm5pbmcsXG4gIGNoYXQtZGFuZ2VyLWJnOiBjb2xvci1kYW5nZXIsXG5cbiAgc3Bpbm5lci1iZzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgzKSxcbiAgc3Bpbm5lci1jaXJjbGUtYmc6IGNvbG9yLWJnLWFjdGl2ZSxcbiAgc3Bpbm5lci1mZzogY29sb3ItZmctdGV4dCxcbiAgc3Bpbm5lci1hY3RpdmUtYmc6IGNvbG9yLWZnLFxuICBzcGlubmVyLWRpc2FibGVkLWJnOiBjb2xvci1kaXNhYmxlZCxcbiAgc3Bpbm5lci1kaXNhYmxlZC1mZzogY29sb3ItZmcsXG4gIHNwaW5uZXItcHJpbWFyeS1iZzogY29sb3ItcHJpbWFyeSxcbiAgc3Bpbm5lci1pbmZvLWJnOiBjb2xvci1pbmZvLFxuICBzcGlubmVyLXN1Y2Nlc3MtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIHNwaW5uZXItd2FybmluZy1iZzogY29sb3Itd2FybmluZyxcbiAgc3Bpbm5lci1kYW5nZXItYmc6IGNvbG9yLWRhbmdlcixcbiAgc3Bpbm5lci14eHNtYWxsOiAxLjI1cmVtLFxuICBzcGlubmVyLXhzbWFsbDogMS41cmVtLFxuICBzcGlubmVyLXNtYWxsOiAxLjc1cmVtLFxuICBzcGlubmVyLW1lZGl1bTogMnJlbSxcbiAgc3Bpbm5lci1sYXJnZTogMi4yNXJlbSxcbiAgc3Bpbm5lci14bGFyZ2U6IDIuNXJlbSxcbiAgc3Bpbm5lci14eGxhcmdlOiAzcmVtLFxuXG4gIHN0ZXBwZXItaW5kZXgtc2l6ZTogMnJlbSxcbiAgc3RlcHBlci1sYWJlbC1mb250LXNpemU6IGZvbnQtc2l6ZS1zbSxcbiAgc3RlcHBlci1sYWJlbC1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZGVyLFxuICBzdGVwcGVyLWFjY2VudC1jb2xvcjogY29sb3ItcHJpbWFyeSxcbiAgc3RlcHBlci1jb21wbGV0ZWQtZmc6IGNvbG9yLXdoaXRlLFxuICBzdGVwcGVyLWZnOiBjb2xvci1mZyxcbiAgc3RlcHBlci1jb21wbGV0ZWQtaWNvbi1zaXplOiAxLjVyZW0sXG4gIHN0ZXBwZXItY29tcGxldGVkLWljb24td2VpZ2h0OiBmb250LXdlaWdodC11bHRyYS1ib2xkLFxuICBzdGVwcGVyLXN0ZXAtcGFkZGluZzogcGFkZGluZyxcblxuICBhY2NvcmRpb24tcGFkZGluZzogcGFkZGluZyxcbiAgYWNjb3JkaW9uLXNlcGFyYXRvcjogc2VwYXJhdG9yLFxuICBhY2NvcmRpb24taGVhZGVyLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgYWNjb3JkaW9uLWhlYWRlci1mb250LXNpemU6IGZvbnQtc2l6ZS1sZyxcbiAgYWNjb3JkaW9uLWhlYWRlci1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBhY2NvcmRpb24taGVhZGVyLWZnLWhlYWRpbmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGFjY29yZGlvbi1oZWFkZXItZGlzYWJsZWQtZmc6IGNvbG9yLWZnLFxuICBhY2NvcmRpb24taGVhZGVyLWJvcmRlci13aWR0aDogMXB4LFxuICBhY2NvcmRpb24taGVhZGVyLWJvcmRlci10eXBlOiBzb2xpZCxcbiAgYWNjb3JkaW9uLWhlYWRlci1ib3JkZXItY29sb3I6IGFjY29yZGlvbi1zZXBhcmF0b3IsXG4gIGFjY29yZGlvbi1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIGFjY29yZGlvbi1pdGVtLWJnOiBjb2xvci1iZyxcbiAgYWNjb3JkaW9uLWl0ZW0tZm9udC1zaXplOiBmb250LXNpemUsXG4gIGFjY29yZGlvbi1pdGVtLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIGFjY29yZGlvbi1pdGVtLWZvbnQtZmFtaWx5OiBmb250LW1haW4sXG4gIGFjY29yZGlvbi1pdGVtLWZnLXRleHQ6IGNvbG9yLWZnLXRleHQsXG4gIGFjY29yZGlvbi1pdGVtLXNoYWRvdzogc2hhZG93LFxuXG4gIGxpc3QtaXRlbS1ib3JkZXItY29sb3I6IHRhYnMtc2VwYXJhdG9yLFxuICBsaXN0LWl0ZW0tcGFkZGluZzogMXJlbSxcblxuICBjYWxlbmRhci13aWR0aDogMjEuODc1cmVtLFxuICBjYWxlbmRhci1ib2R5LWhlaWdodDogMjUuNjI1cmVtLFxuICBjYWxlbmRhci1oZWFkZXItdGl0bGUtZm9udC1zaXplOiBmb250LXNpemUteGxnLFxuICBjYWxlbmRhci1oZWFkZXItdGl0bGUtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGQsXG4gIGNhbGVuZGFyLWhlYWRlci1zdWItdGl0bGUtZm9udC1zaXplOiBmb250LXNpemUsXG4gIGNhbGVuZGFyLWhlYWRlci1zdWItdGl0bGUtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LXRoaW4sXG4gIGNhbGVuZGFyLW5hdmlnYXRpb24tYnV0dG9uLXdpZHRoOiAxMHJlbSxcbiAgY2FsZW5kYXItc2VsZWN0ZWQtaXRlbS1iZzogY29sb3Itc3VjY2VzcyxcbiAgY2FsZW5kYXItaG92ZXItaXRlbS1iZzogY2FsZW5kYXItc2VsZWN0ZWQtaXRlbS1iZyxcbiAgY2FsZW5kYXItdG9kYXktaXRlbS1iZzogY29sb3ItYmctYWN0aXZlLFxuICBjYWxlbmRhci1hY3RpdmUtaXRlbS1iZzogY29sb3Itc3VjY2VzcyxcbiAgY2FsZW5kYXItZmc6IGNvbG9yLWZnLXRleHQsXG4gIGNhbGVuZGFyLXNlbGVjdGVkLWZnOiBjb2xvci13aGl0ZSxcbiAgY2FsZW5kYXItdG9kYXktZmc6IGNhbGVuZGFyLWZnLFxuICBjYWxlbmRhci1kYXktY2VsbC13aWR0aDogMi42MjVyZW0sXG4gIGNhbGVuZGFyLWRheS1jZWxsLWhlaWdodDogMi42MjVyZW0sXG4gIGNhbGVuZGFyLW1vbnRoLWNlbGwtd2lkdGg6IDQuMjVyZW0sXG4gIGNhbGVuZGFyLW1vbnRoLWNlbGwtaGVpZ2h0OiAyLjM3NXJlbSxcbiAgY2FsZW5kYXIteWVhci1jZWxsLXdpZHRoOiBjYWxlbmRhci1tb250aC1jZWxsLXdpZHRoLFxuICBjYWxlbmRhci15ZWFyLWNlbGwtaGVpZ2h0OiBjYWxlbmRhci1tb250aC1jZWxsLWhlaWdodCxcbiAgY2FsZW5kYXItaW5hY3RpdmUtb3BhY2l0eTogMC41LFxuICBjYWxlbmRhci1kaXNhYmxlZC1vcGFjaXR5OiAwLjMsXG4gIGNhbGVuZGFyLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgY2FsZW5kYXItd2Vla2RheS13aWR0aDogY2FsZW5kYXItZGF5LWNlbGwtd2lkdGgsXG4gIGNhbGVuZGFyLXdlZWtkYXktaGVpZ2h0OiAxLjc1cmVtLFxuICBjYWxlbmRhci13ZWVrZGF5LWZvbnQtc2l6ZTogZm9udC1zaXplLXhzLFxuICBjYWxlbmRhci13ZWVrZGF5LWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIGNhbGVuZGFyLXdlZWtkYXktZmc6IGNvbG9yLWZnLFxuICBjYWxlbmRhci13ZWVrZGF5LWhvbGlkYXktZmc6IGNvbG9yLWRhbmdlcixcbiAgY2FsZW5kYXItcmFuZ2UtYmctaW4tcmFuZ2U6ICNlYmZiZjIsXG5cbiAgY2FsZW5kYXItbGFyZ2Utd2lkdGg6IDI0LjM3NXJlbSxcbiAgY2FsZW5kYXItbGFyZ2UtYm9keS1oZWlnaHQ6IDI3Ljc1cmVtLFxuICBjYWxlbmRhci1kYXktY2VsbC1sYXJnZS13aWR0aDogM3JlbSxcbiAgY2FsZW5kYXItZGF5LWNlbGwtbGFyZ2UtaGVpZ2h0OiAzcmVtLFxuICBjYWxlbmRhci1tb250aC1jZWxsLWxhcmdlLXdpZHRoOiA0LjI1cmVtLFxuICBjYWxlbmRhci1tb250aC1jZWxsLWxhcmdlLWhlaWdodDogMi4zNzVyZW0sXG4gIGNhbGVuZGFyLXllYXItY2VsbC1sYXJnZS13aWR0aDogY2FsZW5kYXItbW9udGgtY2VsbC13aWR0aCxcbiAgY2FsZW5kYXIteWVhci1jZWxsLWxhcmdlLWhlaWdodDogY2FsZW5kYXItbW9udGgtY2VsbC1oZWlnaHQsXG5cbiAgb3ZlcmxheS1iYWNrZHJvcC1iZzogcmdiYSgwLCAwLCAwLCAwLjI4OCksXG5cbiAgdG9vbHRpcC1iZzogY29sb3ItZmctdGV4dCxcbiAgdG9vbHRpcC1wcmltYXJ5LWJnOiBjb2xvci1wcmltYXJ5LFxuICB0b29sdGlwLWluZm8tYmc6IGNvbG9yLWluZm8sXG4gIHRvb2x0aXAtc3VjY2Vzcy1iZzogY29sb3Itc3VjY2VzcyxcbiAgdG9vbHRpcC13YXJuaW5nLWJnOiBjb2xvci13YXJuaW5nLFxuICB0b29sdGlwLWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuICB0b29sdGlwLWZnOiBjb2xvci1iZy1hY3RpdmUsXG4gIHRvb2x0aXAtc3RhdHVzLWZnOiBjb2xvci1iZy1hY3RpdmUsXG4gIHRvb2x0aXAtc2hhZG93OiBzaGFkb3csXG4gIHRvb2x0aXAtZm9udC1zaXplOiBmb250LXNpemUsXG5cbiAgc2VsZWN0LWJvcmRlci13aWR0aDogMnB4LFxuICBzZWxlY3QtbWF4LWhlaWdodDogMjByZW0sXG4gIHNlbGVjdC1iZzogY29sb3ItYmcsXG5cbiAgc2VsZWN0LWNoZWNrYm94LWNvbG9yOiBjaGVja2JveC1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1jaGVja21hcmstY29sb3I6IGNoZWNrYm94LWJvcmRlci1jb2xvcixcblxuICBzZWxlY3Qtb3B0aW9uLWRpc2FibGVkLWJnOiAjZjJmNGY3LFxuICBzZWxlY3Qtb3B0aW9uLWRpc2FibGVkLW9wYWNpdHk6IDAuMyxcbiAgc2VsZWN0LW9wdGlvbi1wYWRkaW5nOiAwLjc1cmVtIDEuNXJlbSxcblxuICBkYXRlcGlja2VyLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBkYXRlcGlja2VyLWJnOiBjb2xvci1iZyxcbiAgZGF0ZXBpY2tlci1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MsXG4gIGRhdGVwaWNrZXItYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBkYXRlcGlja2VyLXNoYWRvdzogbm9uZSxcbiAgZGF0ZXBpY2tlci1hcnJvdy1zaXplOiAxMXB4LFxuXG4gIHJhZGlvLWJnOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tZmc6IGNvbG9yLWZnLXRleHQsXG4gIHJhZGlvLXNpemU6IDEuMjVyZW0sXG4gIHJhZGlvLWJvcmRlci1zaXplOiAycHgsXG4gIHJhZGlvLWJvcmRlci1jb2xvcjogZm9ybS1jb250cm9sLWJvcmRlci1jb2xvcixcbiAgcmFkaW8tY2hlY2ttYXJrOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tY2hlY2tlZC1iZzogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWNoZWNrZWQtc2l6ZTogMS4yNXJlbSxcbiAgcmFkaW8tY2hlY2tlZC1ib3JkZXItc2l6ZTogMnB4LFxuICByYWRpby1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2VzcyxcbiAgcmFkaW8tY2hlY2tlZC1jaGVja21hcms6IGNvbG9yLXN1Y2Nlc3MsXG4gIHJhZGlvLWRpc2FibGVkLWJnOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tZGlzYWJsZWQtc2l6ZTogMS4yNXJlbSxcbiAgcmFkaW8tZGlzYWJsZWQtYm9yZGVyLXNpemU6IDJweCxcbiAgcmFkaW8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiByYWRpby1ib3JkZXItY29sb3IsXG4gIHJhZGlvLWRpc2FibGVkLWNoZWNrbWFyazogcmFkaW8tY2hlY2ttYXJrLFxuKTtcblxuLy8gcmVnaXN0ZXIgdGhlIHRoZW1lXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSgkdGhlbWUsIGRlZmF1bHQpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AaW1wb3J0ICcuLi9jb3JlL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICcuLi9jb3JlL21peGlucyc7XG5AaW1wb3J0ICdkZWZhdWx0JztcblxuLy8gZGVmYXVsdCB0aGUgYmFzZSB0aGVtZVxuJHRoZW1lOiAoXG4gIHJhZGl1czogMC41cmVtLFxuXG4gIGNvbG9yLWJnOiAjM2QzNzgwLFxuICBjb2xvci1iZy1hY3RpdmU6ICM0OTQyOTksXG4gIGNvbG9yLWZnOiAjYTFhMWU1LFxuICBjb2xvci1mZy1oZWFkaW5nOiAjZmZmZmZmLFxuICBjb2xvci1mZy10ZXh0OiAjZDFkMWZmLFxuICBjb2xvci1mZy1oaWdobGlnaHQ6ICMwMGY5YTYsXG5cbiAgY29sb3ItZ3JheTogcmdiYSg4MSwgMTEzLCAxNjUsIDAuMTUpLFxuICBjb2xvci1uZXV0cmFsOiB0cmFuc3BhcmVudCxcbiAgY29sb3Itd2hpdGU6ICNmZmZmZmYsXG4gIGNvbG9yLWRpc2FibGVkOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXG5cbiAgY29sb3ItcHJpbWFyeTogIzc2NTlmZixcbiAgY29sb3Itc3VjY2VzczogIzAwZDk3NyxcbiAgY29sb3ItaW5mbzogIzAwODhmZixcbiAgY29sb3Itd2FybmluZzogI2ZmYTEwMCxcbiAgY29sb3ItZGFuZ2VyOiAjZmYzODZhLFxuXG4gIGxpbmstY29sb3I6ICMwMGY5YTYsXG4gIGxpbmstY29sb3ItaG92ZXI6ICMxNGZmYmUsXG5cbiAgc2VwYXJhdG9yOiAjMzQyZTczLFxuICBzaGFkb3c6IDAgOHB4IDIwcHggMCByZ2JhKDQwLCAzNywgODksIDAuNiksXG5cbiAgY2FyZC1oZWFkZXItZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGRlcixcblxuICBsYXlvdXQtYmc6ICMyZjI5NmIsXG5cbiAgc2Nyb2xsYmFyLWZnOiAjNTU0ZGIzLFxuICBzY3JvbGxiYXItYmc6ICMzMzJlNzMsXG5cbiAgcmFkaWFsLWdyYWRpZW50OiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDUwJSA1MCUsICM0MjNmOGMsICMzMDJjNmUpLFxuICBsaW5lYXItZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzE3MTc0OSwgIzQxMzc4OSksXG5cbiAgc2lkZWJhci1mZzogY29sb3Itc2Vjb25kYXJ5LFxuICBzaWRlYmFyLWJnOiBjb2xvci1iZyxcblxuICBoZWFkZXItZmc6IGNvbG9yLXdoaXRlLFxuICBoZWFkZXItYmc6IGNvbG9yLWJnLFxuXG4gIGZvb3Rlci1mZzogY29sb3ItZmcsXG4gIGZvb3Rlci1iZzogY29sb3ItYmcsXG5cbiAgYWN0aW9ucy1mZzogY29sb3ItZmcsXG4gIGFjdGlvbnMtYmc6IGNvbG9yLWJnLFxuXG4gIHVzZXItZmc6IGNvbG9yLWJnLFxuICB1c2VyLWJnOiBjb2xvci1mZyxcbiAgdXNlci1mZy1oaWdobGlnaHQ6IGNvbG9yLWZnLWhpZ2hsaWdodCxcblxuICBwb3BvdmVyLWJvcmRlcjogY29sb3ItcHJpbWFyeSxcbiAgcG9wb3Zlci1zaGFkb3c6IHNoYWRvdyxcblxuICBjb250ZXh0LW1lbnUtYWN0aXZlLWJnOiBjb2xvci1wcmltYXJ5LFxuICBjb250ZXh0LW1lbnUtYm9yZGVyOiBjb2xvci1wcmltYXJ5LFxuXG4gIGZvb3Rlci1oZWlnaHQ6IGhlYWRlci1oZWlnaHQsXG5cbiAgc2lkZWJhci13aWR0aDogMTYuMjVyZW0sXG4gIHNpZGViYXItd2lkdGgtY29tcGFjdDogMy40NXJlbSxcblxuICBtZW51LWZnOiBjb2xvci1mZyxcbiAgbWVudS1iZzogY29sb3ItYmcsXG4gIG1lbnUtYWN0aXZlLWZnOiBjb2xvci13aGl0ZSxcbiAgbWVudS1ncm91cC1mZzogY29sb3Itd2hpdGUsXG4gIG1lbnUtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgbWVudS1hY3RpdmUtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGRlcixcbiAgbWVudS1zdWJtZW51LWJnOiBsYXlvdXQtYmcsXG4gIG1lbnUtc3VibWVudS1mZzogY29sb3ItZmcsXG4gIG1lbnUtc3VibWVudS1hY3RpdmUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIG1lbnUtc3VibWVudS1hY3RpdmUtYmc6IHJnYmEoMCwgMjU1LCAxNzAsIDAuMjUpLFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZmctaGlnaGxpZ2h0LFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLXNoYWRvdzogMCAycHggMTJweCAwIHJnYmEoMCwgMjU1LCAxNzAsIDAuMjUpLFxuICBtZW51LWl0ZW0tcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtLFxuICBtZW51LWl0ZW0tc2VwYXJhdG9yOiB0cmFuc3BhcmVudCxcblxuICBidG4taGVyby1zaGFkb3c6IDAgNHB4IDEwcHggMCByZ2JhKDMzLCA3LCA3NywgMC41KSxcbiAgYnRuLWhlcm8tdGV4dC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyksXG4gIGJ0bi1oZXJvLWJldmVsLXNpemU6IDAgM3B4IDAgMCxcbiAgYnRuLWhlcm8tZ2xvdy1zaXplOiAwIDJweCA4cHggMCxcbiAgYnRuLWhlcm8tcHJpbWFyeS1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tc3VjY2Vzcy1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8td2FybmluZy1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8taW5mby1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tZGFuZ2VyLWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1zZWNvbmRhcnktZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1zZWNvbmRhcnktYm9yZGVyOiBjb2xvci1wcmltYXJ5LFxuICBidG4tb3V0bGluZS1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgYnRuLW91dGxpbmUtaG92ZXItZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGJ0bi1vdXRsaW5lLWZvY3VzLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBidG4tZ3JvdXAtYmc6ICMzNzMyNzMsXG4gIGJ0bi1ncm91cC1zZXBhcmF0b3I6ICMzMTJjNjYsXG5cbiAgZm9ybS1jb250cm9sLWJnOiAjMzczMTdhLFxuICBmb3JtLWNvbnRyb2wtZm9jdXMtYmc6IHNlcGFyYXRvcixcbiAgZm9ybS1jb250cm9sLWJvcmRlci1jb2xvcjogc2VwYXJhdG9yLFxuICBmb3JtLWNvbnRyb2wtc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LFxuXG4gIGNoZWNrYm94LWJnOiB0cmFuc3BhcmVudCxcbiAgY2hlY2tib3gtc2l6ZTogMS4yNXJlbSxcbiAgY2hlY2tib3gtYm9yZGVyLXNpemU6IDJweCxcbiAgY2hlY2tib3gtYm9yZGVyLWNvbG9yOiBjb2xvci1mZyxcbiAgY2hlY2tib3gtY2hlY2ttYXJrOiB0cmFuc3BhcmVudCxcblxuICBjaGVja2JveC1jaGVja2VkLWJnOiB0cmFuc3BhcmVudCxcbiAgY2hlY2tib3gtY2hlY2tlZC1zaXplOiAxLjI1cmVtLFxuICBjaGVja2JveC1jaGVja2VkLWJvcmRlci1zaXplOiAycHgsXG4gIGNoZWNrYm94LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuICBjaGVja2JveC1jaGVja2VkLWNoZWNrbWFyazogY29sb3ItZmctaGVhZGluZyxcblxuICBjaGVja2JveC1kaXNhYmxlZC1iZzogdHJhbnNwYXJlbnQsXG4gIGNoZWNrYm94LWRpc2FibGVkLXNpemU6IDEuMjVyZW0sXG4gIGNoZWNrYm94LWRpc2FibGVkLWJvcmRlci1zaXplOiAycHgsXG4gIGNoZWNrYm94LWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItZmctaGVhZGluZyxcbiAgY2hlY2tib3gtZGlzYWJsZWQtY2hlY2ttYXJrOiBjb2xvci1mZy1oZWFkaW5nLFxuXG4gIHNlYXJjaC1iZzogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTcxNzQ5LCAjNDEzNzg5KSxcblxuICBzbWFydC10YWJsZS1oZWFkZXItZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgc21hcnQtdGFibGUtaGVhZGVyLWJnOiBjb2xvci1iZy1hY3RpdmUsXG4gIHNtYXJ0LXRhYmxlLWJnLWV2ZW46ICMzYTM0N2EsXG4gIHNtYXJ0LXRhYmxlLWJnLWFjdGl2ZTogY29sb3ItYmctYWN0aXZlLFxuXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnksXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ib3JkZXItd2lkdGg6IDJweCxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWZnLWFjdGl2ZTogY29sb3ItZmctaGVhZGluZyxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWJnLWFjdGl2ZTogY29sb3ItcHJpbWFyeSxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWhvdmVyOiByZ2JhKDAsIDAsIDAsIDAuMiksXG5cbiAgYmFkZ2UtZmctdGV4dDogY29sb3Itd2hpdGUsXG4gIGJhZGdlLXByaW1hcnktYmctY29sb3I6IGNvbG9yLXByaW1hcnksXG4gIGJhZGdlLXN1Y2Nlc3MtYmctY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIGJhZGdlLWluZm8tYmctY29sb3I6IGNvbG9yLWluZm8sXG4gIGJhZGdlLXdhcm5pbmctYmctY29sb3I6IGNvbG9yLXdhcm5pbmcsXG4gIGJhZGdlLWRhbmdlci1iZy1jb2xvcjogY29sb3ItZGFuZ2VyLFxuXG4gIHNwaW5uZXItYmc6IHJnYmEoNjEsIDU1LCAxMjgsIDAuOSksXG4gIHN0ZXBwZXItYWNjZW50LWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuXG4gIHRhYnMtc2VsZWN0ZWQtc2Vjb25kLWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuICB0YWJzLXNlbGVjdGVkLWRlZ3JlZXM6IDIwZGVnLFxuXG4gIGNhbGVuZGFyLWFjdGl2ZS1pdGVtLWJnOiBjb2xvci1wcmltYXJ5LFxuICBjYWxlbmRhci1zZWxlY3RlZC1pdGVtLWJnOiBjb2xvci1wcmltYXJ5LFxuICBjYWxlbmRhci1yYW5nZS1iZy1pbi1yYW5nZTogIzRlNDA5NSxcbiAgY2FsZW5kYXItdG9kYXktaXRlbS1iZzogIzM1MmY2ZSxcblxuICBzZWxlY3Qtb3B0aW9uLWRpc2FibGVkLWJnOiAjMzEyZTc1LFxuXG4gIHRvYXN0ci1jb2xvci1mZzogY29sb3Itd2hpdGUsXG4gIHRvYXN0ci1wYWRkaW5nOiAxLjI1cmVtLFxuICB0b2FzdHItYm9yZGVyOiAwLFxuICB0b2FzdHItZGVmYXVsdC1iYWNrZ3JvdW5kOiAjYmNjM2NjLFxuXG4gIHRvb2x0aXAtZmc6IGNvbG9yLWJnLFxuICB0b29sdGlwLXN0YXR1cy1mZzogY29sb3Itd2hpdGUsXG5cbiAgZGF0ZXBpY2tlci1ib3JkZXI6IGNvbG9yLXByaW1hcnksXG4gIGRhdGVwaWNrZXItc2hhZG93OiBzaGFkb3csXG5cbiAgcmFkaW8tY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnksXG4gIHJhZGlvLWNoZWNrZWQtY2hlY2ttYXJrOiBjb2xvci1wcmltYXJ5LFxuKTtcblxuLy8gcmVnaXN0ZXIgdGhlIHRoZW1lXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSgkdGhlbWUsIGNvc21pYywgZGVmYXVsdCk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBpbXBvcnQgJy4uL2NvcmUvZnVuY3Rpb25zJztcbkBpbXBvcnQgJy4uL2NvcmUvbWl4aW5zJztcbkBpbXBvcnQgJ2RlZmF1bHQnO1xuXG4vLyBkZWZhdWx0IHRoZSBiYXNlIHRoZW1lXG4kdGhlbWU6IChcbiAgaGVhZGVyLWZnOiAjZjdmYWZiLFxuICBoZWFkZXItYmc6ICMxMTEyMTgsXG5cbiAgbGF5b3V0LWJnOiAjZjFmNWY4LFxuXG4gIGNvbG9yLWZnLWhlYWRpbmc6ICMxODE4MTgsXG4gIGNvbG9yLWZnLXRleHQ6ICM0YjRiNGIsXG4gIGNvbG9yLWZnLWhpZ2hsaWdodDogY29sb3ItZmcsXG5cbiAgc2VwYXJhdG9yOiAjY2RkNWRjLFxuXG4gIHJhZGl1czogMC4xN3JlbSxcblxuICBzY3JvbGxiYXItYmc6ICNlM2U5ZWUsXG5cbiAgY29sb3ItcHJpbWFyeTogIzczYTFmZixcbiAgY29sb3Itc3VjY2VzczogIzVkY2ZlMyxcbiAgY29sb3ItaW5mbzogI2JhN2ZlYyxcbiAgY29sb3Itd2FybmluZzogI2ZmYTM2YixcbiAgY29sb3ItZGFuZ2VyOiAjZmY2YjgzLFxuXG4gIGJ0bi1zZWNvbmRhcnktYmc6ICNlZGYyZjUsXG4gIGJ0bi1zZWNvbmRhcnktYm9yZGVyOiAjZWRmMmY1LFxuXG4gIGFjdGlvbnMtZmc6ICNkM2RiZTUsXG4gIGFjdGlvbnMtYmc6IGNvbG9yLWJnLFxuXG4gIHNpZGViYXItYmc6ICNlM2U5ZWUsXG5cbiAgYm9yZGVyLWNvbG9yOiAjZDVkYmUwLFxuXG4gIG1lbnUtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGRlcixcbiAgbWVudS1mZzogY29sb3ItZmctdGV4dCxcbiAgbWVudS1iZzogI2UzZTllZSxcbiAgbWVudS1hY3RpdmUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIG1lbnUtYWN0aXZlLWJnOiBtZW51LWJnLFxuXG4gIG1lbnUtc3VibWVudS1iZzogbWVudS1iZyxcbiAgbWVudS1zdWJtZW51LWZnOiBjb2xvci1mZy10ZXh0LFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWJnOiAjY2RkNWRjLFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWJvcmRlci1jb2xvcjogbWVudS1zdWJtZW51LWFjdGl2ZS1iZyxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1zaGFkb3c6IG5vbmUsXG4gIG1lbnUtc3VibWVudS1ob3Zlci1mZzogbWVudS1zdWJtZW51LWFjdGl2ZS1mZyxcbiAgbWVudS1zdWJtZW51LWhvdmVyLWJnOiBtZW51LWJnLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItd2lkdGg6IDAuMTI1cmVtLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIG1lbnUtc3VibWVudS1pdGVtLXBhZGRpbmc6IDAuNXJlbSAxcmVtLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1jb250YWluZXItcGFkZGluZzogMCAxLjI1cmVtLFxuICBtZW51LXN1Ym1lbnUtcGFkZGluZzogMC41cmVtLFxuXG4gIGJ0bi1ib3JkZXItcmFkaXVzOiBidG4tc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzLFxuXG4gIGJ0bi1oZXJvLWRlZ3JlZTogMGRlZyxcbiAgYnRuLWhlcm8tcHJpbWFyeS1kZWdyZWU6IGJ0bi1oZXJvLWRlZ3JlZSxcbiAgYnRuLWhlcm8tc3VjY2Vzcy1kZWdyZWU6IGJ0bi1oZXJvLWRlZ3JlZSxcbiAgYnRuLWhlcm8td2FybmluZy1kZWdyZWU6IGJ0bi1oZXJvLWRlZ3JlZSxcbiAgYnRuLWhlcm8taW5mby1kZWdyZWU6IGJ0bi1oZXJvLWRlZ3JlZSxcbiAgYnRuLWhlcm8tZGFuZ2VyLWRlZ3JlZTogYnRuLWhlcm8tZGVncmVlLFxuICBidG4taGVyby1zZWNvbmRhcnktZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLWdsb3ctc2l6ZTogMCAwIDIwcHggMCxcbiAgYnRuLWhlcm8tcHJpbWFyeS1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tc3VjY2Vzcy1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8td2FybmluZy1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8taW5mby1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tZGFuZ2VyLWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1zZWNvbmRhcnktZ2xvdy1zaXplOiAwIDAgMCAwLFxuICBidG4taGVyby1ib3JkZXItcmFkaXVzOiBidG4tYm9yZGVyLXJhZGl1cyxcblxuICBjYXJkLXNoYWRvdzogbm9uZSxcbiAgY2FyZC1ib3JkZXItd2lkdGg6IDFweCxcbiAgY2FyZC1ib3JkZXItY29sb3I6IGJvcmRlci1jb2xvcixcbiAgY2FyZC1oZWFkZXItYm9yZGVyLXdpZHRoOiAwLFxuXG4gIGxpbmstY29sb3I6ICM1ZGNmZTMsXG4gIGxpbmstY29sb3ItaG92ZXI6ICM3ZGNmZTMsXG4gIGxpbmstY29sb3ItdmlzaXRlZDogbGluay1jb2xvcixcblxuICBhY3Rpb25zLXNlcGFyYXRvcjogI2YxZjRmNSxcblxuICBtb2RhbC1zZXBhcmF0b3I6IGJvcmRlci1jb2xvcixcblxuICB0YWJzLXNlbGVjdGVkOiBjb2xvci1wcmltYXJ5LFxuICB0YWJzLXNlbGVjdGVkLXNlY29uZC1jb2xvcjogY29sb3ItcHJpbWFyeSxcbiAgdGFicy1zZXBhcmF0b3I6ICNlYmVjZWUsXG5cbiAgc21hcnQtdGFibGUtcGFnaW5nLWJnLWFjdGl2ZTogY29sb3ItcHJpbWFyeSxcblxuICByb3V0ZS10YWJzLXNlbGVjdGVkOiBjb2xvci1wcmltYXJ5LFxuXG4gIHBvcG92ZXItYm9yZGVyOiBjb2xvci1wcmltYXJ5LFxuXG4gIGZvb3Rlci1zaGFkb3c6IG5vbmUsXG4gIGZvb3Rlci1zZXBhcmF0b3I6IGJvcmRlci1jb2xvcixcbiAgZm9vdGVyLWZnLWhpZ2hsaWdodDogIzJhMmEyYSxcblxuICBjYWxlbmRhci10b2RheS1pdGVtLWJnOiAjYTJiMmM3LFxuICBjYWxlbmRhci1hY3RpdmUtaXRlbS1iZzogY29sb3ItcHJpbWFyeSxcbiAgY2FsZW5kYXItcmFuZ2UtYmctaW4tcmFuZ2U6ICNlM2VjZmUsXG4gIGNhbGVuZGFyLXRvZGF5LWZnOiBjb2xvci13aGl0ZSxcblxuICB0b2FzdHItaWNvbi1yYWRpdXM6IHJhZGl1cyxcblxuICBkYXRlcGlja2VyLWJvcmRlcjogY29sb3ItcHJpbWFyeSxcbik7XG5cbi8vIHJlZ2lzdGVyIHRoZSB0aGVtZVxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBjb3Jwb3JhdGUsIGRlZmF1bHQpO1xuIiwiQGltcG9ydCAnLi4vQHRoZW1lL3N0eWxlcy90aGVtZXMnO1xuXG5AaW5jbHVkZSBuYi1pbnN0YWxsLWNvbXBvbmVudCgpIHtcbiAgL2RlZXAvIHJvdXRlci1vdXRsZXQgKyAqIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBhbmltYXRpb246IGZhZGUgMXM7XG5cbiAgICBAa2V5ZnJhbWVzIGZhZGUge1xuICAgICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB9XG5cbiAgICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages-menu */ "./src/app/pages/pages-menu.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PagesComponent = /** @class */ (function () {
    function PagesComponent() {
        this.menu = _pages_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"];
    }
    PagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-pages',
            styles: [__webpack_require__(/*! ./pages.component.scss */ "./src/app/pages/pages.component.scss")],
            template: "\n    <ngx-sample-layout>\n      <nb-menu [items]=\"menu\"></nb-menu>\n      <router-outlet></router-outlet>\n    </ngx-sample-layout>\n  ",
        })
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages-routing.module.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _miscellaneous_miscellaneous_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./miscellaneous/miscellaneous.module */ "./src/app/pages/miscellaneous/miscellaneous.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PAGES_COMPONENTS = [
    _pages_component__WEBPACK_IMPORTED_MODULE_1__["PagesComponent"],
];
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
                _miscellaneous_miscellaneous_module__WEBPACK_IMPORTED_MODULE_4__["MiscellaneousModule"]
            ],
            declarations: PAGES_COMPONENTS.slice(),
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map