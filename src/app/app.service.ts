import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService { 

  constructor (private http: Http) {}

  getTodo() {
    return this.http.get(`http://localhost:3000`)
                    .map(res => res.json())
  }
}
