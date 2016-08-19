"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require("@angular/router-deprecated");
var restaurante_service_1 = require("../services/restaurante.service");
var RestauranteDetailComponent = (function () {
    function RestauranteDetailComponent(_restauranteService, _routerParams) {
        this._restauranteService = _restauranteService;
        this._routerParams = _routerParams;
    }
    RestauranteDetailComponent.prototype.ngOnInit = function () {
        this.getRestaurante();
    };
    RestauranteDetailComponent.prototype.getRestaurante = function () {
        var _this = this;
        var id = this._routerParams.get('id');
        this._restauranteService.getRestaurante(id)
            .subscribe(function (response) {
            console.log(response);
            _this.restaurante = response;
        }, function (error) {
            console.log("Error ocurred...");
        });
    };
    RestauranteDetailComponent = __decorate([
        core_1.Component({
            selector: "restaurantes-detail",
            templateUrl: "app/view/restaurantes-detail.html",
            providers: [restaurante_service_1.RestauranteService]
        }), 
        __metadata('design:paramtypes', [restaurante_service_1.RestauranteService, router_deprecated_1.RouteParams])
    ], RestauranteDetailComponent);
    return RestauranteDetailComponent;
}());
exports.RestauranteDetailComponent = RestauranteDetailComponent;
//# sourceMappingURL=restaurantes-detail.component.js.map