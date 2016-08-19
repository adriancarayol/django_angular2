import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Restaurante} from "../model/restaurantes.model";

@Injectable()
export class RestauranteService {
    constructor(private _http: Http){}

    getRestaurantes() {
      return this._http.get('http://127.0.0.1:8000/snippets/')
        .map(response => response.json());
    }

    getRestaurante(id: string) {
      return this._http.get('http://127.0.0.1:8000/snippets/'+id+'/')
        .map(response => response.json());
    }

    addRestaurante(restaurante: Restaurante) {
      let params = JSON.stringify({ title: restaurante.title, code: restaurante.code });
      let headers = new Headers({ 'Content-Type': 'application/json' });

      return this._http.post("http://127.0.0.1:8000/snippets/", params, {headers: headers})
                .map(res => res.json());
    }
}
