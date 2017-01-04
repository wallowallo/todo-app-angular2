import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response, Jsonp } from '@angular/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import './rxjs-operators';

import { AppService } from './app.service';
import { Todo } from './todo';

@Component({
  moduleId: 'module.id',
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
	providers: [ AppService ]
})

export class AppComponent implements OnInit {
	errorMessage: string;
  header = 'Todo:';
  todos: Todo[];

  addTodo: FormGroup;
  title: FormControl;
  description: FormControl;

  constructor (private appService: AppService, builder: FormBuilder) {
	  this.title = new FormControl('', []);
	  this.description = new FormControl('', []);
	  this.addTodo = builder.group({
	  	title: this.title,
	  	description: this.description
  	});
	}

	ngOnInit() { this.getTodo(); }

	getTodo() {
		this.appService.getTodo()
										.subscribe(
											 todos => this.todos = todos,
											 error => this.errorMessage = <any>error
										);
	}

  // addTodo (title: string, description: string) {
  //   if (!title) { return; }
  //   this.appService.addTodo(title, description)
  //                  .subscribe(
  //                      todo  => this.todos.push(todo),
  //                      error =>  this.errorMessage = <any>error);
  // }

  newTodo() {
		this.todos.push(this.addTodo.value);
		this.addTodo.reset();
  }
}
