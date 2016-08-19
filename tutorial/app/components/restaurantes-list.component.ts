import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "@angular/router-deprecated";
import {RestauranteService} from "../services/restaurante.service";
import {Restaurante} from "../model/restaurantes.model";

@Component({
    selector: "restaurantes-list",
    templateUrl: "app/view/restaurantes-list.html",
    directives: [ROUTER_DIRECTIVES],
    providers: [RestauranteService]
})

export class RestaurantesListComponent implements OnInit{
    public titulo:string = "Lista de restaurantes";
    public restaurantes: Restaurante[];
    public status:boolean;
    public loading;
    constructor(private _restauranteService: RestauranteService){}

    ngOnInit() {
      this.loading = 'show';
      this.getRestaurantes();
      console.log("restaurante-list component cargado");
    }

    getRestaurantes(){
      this._restauranteService.getRestaurantes()
          .subscribe(
            result => {
              console.log(result.data);
              this.restaurantes = result.data;
              this.status = result.status;
              if (!this.status) {
                alert("ERROR EN EL SERVER");
              }
              this.loading = 'hide';
            }, error => {
              console.log("Error ocurred...");
            }
          );
    }
}
