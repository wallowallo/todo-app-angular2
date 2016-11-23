import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  constructor (builder: FormBuilder) {
	  this.title = new FormControl('', []);
	  this.description = new FormControl('', []);
	  this.addTodo = builder.group({
	  	title: this.title,
	  	description: this.description
  	});
  }

  login () {
    console.log(this.addTodo.value);                                 
 }
}
