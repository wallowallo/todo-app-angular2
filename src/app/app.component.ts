import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response, Jsonp } from '@angular/http';
import {
    FormBuilder,
      FormControl,
        FormGroup,
} from '@angular/forms';

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

  constructor (private jsonp: Jsonp, builder: FormBuilder) {
	  this.title = new FormControl('', []);
	  this.description = new FormControl('', []);
	  this.addTodo = builder.group({
	  	title: this.title,
	  	description: this.description
  	});
   this.jsonp
   .get(`http://localhost:3000`)
	 .subscribe(data => console.log(data), error => console.log(error));

	}

  newTodo() {
		this.todos.push(this.addTodo.value);
		this.addTodo.reset();
  }
}
