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

  constructor (private builder: FormBuilder) {
	  this.title = new FormControl('', []);
	  this.description = new FormControl('', []);
	  this.addTodo = builder.group({
	  	title: this.title,
	  	description: this.description
  	});
	}

  private extractData(res: Response) {
	  let body = res.json();
	  return body.data || { };
	}

  newTodo() {
		this.todos.push(this.addTodo.value);
		this.addTodo.reset();
  }
}
