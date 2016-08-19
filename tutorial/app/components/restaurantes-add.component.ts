import { Component, OnInit } from '@angular/core';
import { Router, RouteParams } from "@angular/router-deprecated";
import { RestauranteService } from "../services/restaurante.service";
import { Restaurante } from "../model/restaurantes.model";

@Component({
    selector: "restaurantes-add",
    templateUrl: "app/view/restaurantes-add.html",
    providers: [RestauranteService]
})

export class RestaurantesAddComponent implements OnInit{
    public restaurante: Restaurante;
    public status:boolean;
    public active = true;
    public message:string;
    
    constructor(
      private _restauranteService: RestauranteService,
      private _routeParams: RouteParams,
      private _router: Router
    ){}

    ngOnInit() {
      this.restaurante = new Restaurante(
        this._routeParams.get('code'),
        0,
        "Python",
        true,
        "None",
        this._routeParams.get('title')
      )
      console.log("restaurante-add component cargado");
      console.log(this.restaurante);
    }

    onSubmit() {
      this._restauranteService.addRestaurante(this.restaurante)
        .subscribe(
            response => {
                this.message = response;
            }, error => {
              console.log(this.restaurante);
              console.log("ERROR EN EL SERVIDOR");
            }
        );
      console.log("Submit");
    }
}
