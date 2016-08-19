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
var restaurantes_model_1 = require("../model/restaurantes.model");
var RestaurantesAddComponent = (function () {
    function RestaurantesAddComponent(_restauranteService, _routeParams, _router) {
        this._restauranteService = _restauranteService;
        this._routeParams = _routeParams;
        this._router = _router;
        this.active = true;
    }
    RestaurantesAddComponent.prototype.ngOnInit = function () {
        this.restaurante = new restaurantes_model_1.Restaurante(this._routeParams.get('code'), 0, "Python", true, "None", this._routeParams.get('title'));
        console.log("restaurante-add component cargado");
        console.log(this.restaurante);
    };
    RestaurantesAddComponent.prototype.onSubmit = function () {
        var _this = this;
        this._restauranteService.addRestaurante(this.restaurante)
            .subscribe(function (response) {
            _this.message = response;
        }, function (error) {
            console.log(_this.restaurante);
            console.log("ERROR EN EL SERVIDOR");
        });
        console.log("Submit");
    };
    RestaurantesAddComponent = __decorate([
        core_1.Component({
            selector: "restaurantes-add",
            templateUrl: "app/view/restaurantes-add.html",
            providers: [restaurante_service_1.RestauranteService]
        }), 
        __metadata('design:paramtypes', [restaurante_service_1.RestauranteService, router_deprecated_1.RouteParams, router_deprecated_1.Router])
    ], RestaurantesAddComponent);
    return RestaurantesAddComponent;
}());
exports.RestaurantesAddComponent = RestaurantesAddComponent;
//# sourceMappingURL=restaurantes-add.component.js.map