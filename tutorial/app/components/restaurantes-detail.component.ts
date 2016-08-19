import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router, RouteParams} from "@angular/router-deprecated";
import {RestauranteService} from "../services/restaurante.service";
import {Restaurante} from "../model/restaurantes.model";

@Component({
    selector: "restaurantes-detail",
    templateUrl: "app/view/restaurantes-detail.html",
    providers: [RestauranteService]
})

export class RestauranteDetailComponent implements OnInit{
  public parametro;
  public restaurante: Restaurante[];
  constructor(
    private _restauranteService: RestauranteService,
    private _routerParams: RouteParams
  ){}

  ngOnInit() {
    this.getRestaurante();
  }

  getRestaurante() {
    let id = this._routerParams.get('id');
    this._restauranteService.getRestaurante(id)
    .subscribe(
      response => {
        console.log(response);
        this.restaurante = response;
      }, error => {
        console.log("Error ocurred...");
      }
    );
  }
}
