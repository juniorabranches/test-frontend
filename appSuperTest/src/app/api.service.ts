import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlBase = 'https://reqres.in/api/';

  constructor(public http: Http, public jsonp: Jsonp) { }

  public getPedidos() {
    return new Promise(resolve => {
        this.http.get(`${this.urlBase}unknown.json`)
            .subscribe(res => resolve(res.json()));
    });
  }

}
