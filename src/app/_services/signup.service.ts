import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Todo } from '../_models/todo';
import { User } from '../_models/user';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SignupService {
  private registerUrl = '/register';

  constructor (private http: Http) {}

  newUser(user: string): Observable<User> {
    return this.http.post(this.registerUrl, user, this.jwt())
                    .map(res => res.json())
                    .catch(this.handleError);
  }

	  private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }

    private handleError (error: Response | any) {
     let errMsg: string;
     if (error instanceof Response) {
       const body = error.json() || '';
       const err = body.error || JSON.stringify(body);
       errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
     } else {
       errMsg = error.message ? error.message : error.toString();
     }
     console.error(errMsg);
     return Observable.throw(errMsg);
   }
}
