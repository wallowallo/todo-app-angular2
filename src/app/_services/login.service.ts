import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { User } from '../_models/user';


@Injectable()
export class LoginService {
  private loginUrl = 'https://angular2-todolist.herokuapp.com/api/login';

  constructor (private http: Http) {}

  logInUser(user: string): Observable<any> {
    return this.http.post(this.loginUrl, user, this.jwt())
                    .map((response: Response) => {
																	 let user = response.json();
              									   if (user && user.token) {
                   								  	localStorage.setItem('currentUser', JSON.stringify(user));
																	 }
               				 					});
  }

	logout() {
      localStorage.removeItem('currentUser');
   }

	  private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
