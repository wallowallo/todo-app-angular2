import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Todo } from '../_models/todo';
import { User } from '../_models/user';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class TodoService {
  private todosUrl = 'https://todo-express-backend.herokuapp.com/';

  constructor (private http: Http) {}

  getTodoById (userId: string): Observable<any> {
    return this.http.get(`${this.todosUrl}/${userId}`)
                    .map(this.extractData)
										.catch(this.handleError);
  }

  newTodo (userId: string, title: string, description: string): Observable<Todo> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.todosUrl}/${userId}`, { userId, title, description }, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

	deleteTodo(id: string): Observable<any> {
	  return this.http.delete(`${this.todosUrl}/${id}`);
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
