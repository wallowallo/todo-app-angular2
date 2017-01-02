import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response, Jsonp } from '@angular/http';
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/operator/debounceTime'; 
import 'rxjs/add/operator/distinctUntilChanged'; 
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/switchMap'; 
import 'rxjs/add/operator/toPromise';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

export class Todo {
  title: string;
  description: string;
}

const TODOS: Todo[] = [
  { title: 'Do homework', description: 'Mathmatics' },
  { title: 'Clean my room', description: 'Stow away clothes' },
  { title: 'Hit the gym', description: 'Do chest and back exercises' },
];

@Component({
  moduleId: 'module.id',
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  header = 'Todo:';
  todos = TODOS;

  addTodo: FormGroup;
  title: FormControl;
  description: FormControl;

  constructor (private http: Http, builder: FormBuilder) {
	  this.title = new FormControl('', []);
	  this.description = new FormControl('', []);
	  this.addTodo = builder.group({
	  	title: this.title,
	  	description: this.description
  	});
   this.http
   .get(`http://localhost:3000`)
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

  newTodo() {
		this.todos.push(this.addTodo.value);
		this.addTodo.reset();
  }
}
