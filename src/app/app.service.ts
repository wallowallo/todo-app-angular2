import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Todo } from './_models/todo';
import { User } from './_models/user';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AppService {
  private todosUrl = 'http://localhost:3000';

  constructor (private http: Http) {}

  getTodo (): Observable<Todo[]> {
    return this.http.get(this.todosUrl)
                    .map(this.extractData)
										.catch(this.handleError);
  }

  newTodo (title: string, description: string): Observable<Todo> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.todosUrl, { title, description }, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

	deleteTodo(id: string): Observable<any> {
	  return this.http.delete(`${this.todosUrl}/${id}`);
	}

//  getUser (): Observable<User[]> {
//    return this.http.get(this.todosUrl + '/api/login', this.jwt())
//                    .map(res => res.json())
//                    .catch(this.handleError);
//  }

  logInUser(user: string): Observable<User> {
    return this.http.post(this.todosUrl + '/api/login', user, this.jwt())
                    .map(res => {
																	 let user = res.json();
              									   if (user && user.token) {
                   								  	localStorage.setItem('currentUser', JSON.stringify(user));
																	 }
               				 					})
                    .catch(this.handleError);
  }

  newUser(user: string): Observable<User> {
    return this.http.post(this.todosUrl + '/api/register',  user, this.jwt())
                    .map(res => res.json())
                    .catch(this.handleError);
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

  private extractData(res: Response) {
     let body = res.json();
     return body.data || { };
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
