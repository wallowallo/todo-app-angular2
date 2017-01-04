import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Todo } from './todo';
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
