import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class AppService { 

  constructor (private http: Http) {}

  getTodo() {
    this.http.get(`http://localhost:3000`)
         .map(res => res.json())
  }
}
