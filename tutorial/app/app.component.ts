import {Component} from "@angular/core";
import {RestaurantesListComponent} from "./components/restaurantes-list.component";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "@angular/router-deprecated";
import {RestauranteDetailComponent} from "./components/restaurantes-detail.component";
import {RestaurantesAddComponent} from "./components/restaurantes-add.component";

@Component({
    selector: "my-app",
    templateUrl: "app/view/home.html",
    directives: [ROUTER_DIRECTIVES],
})

@RouteConfig([
  {path: '/', name: "Home", component: RestaurantesListComponent, useAsDefault: true},
  {path: '/restaurante/:id', name: "Restaurante", component: RestauranteDetailComponent},
  {path: '/crear-restaurante/', name: "CrearRestaurante", component: RestaurantesAddComponent}
])

export class AppComponent{
    public titulo: string = "Restaurantes con Angular 2";
}
