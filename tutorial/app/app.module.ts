import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ROUTER_PROVIDERS } from "@angular/router-deprecated";
import { HTTP_PROVIDERS } from "@angular/http";
import { AppComponent }  from './app.component';
import { FormsModule }   from '@angular/forms';

import {RestauranteDetailComponent} from "./components/restaurantes-detail.component";
import {RestaurantesAddComponent} from "./components/restaurantes-add.component";
import {RestaurantesListComponent} from "./components/restaurantes-list.component";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, RestaurantesListComponent, RestaurantesAddComponent, RestauranteDetailComponent ],
  providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
