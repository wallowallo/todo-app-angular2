import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response, Jsonp } from '@angular/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { JwtHelper } from 'angular2-jwt';
import '../_helpers/rxjs-operators';

import { TodoService, UserService } from '../_services/index';
import { Todo } from '../_models/todo';
import { User } from '../_models/user';

@Component({
  moduleId: 'module.id',
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit {
  jwtHelper: JwtHelper = new JwtHelper();
  errorMessage: string;
  currentUser: string;
  header = 'Todo List:';
  todos: Todo[];

  addTodo: FormGroup;
  title: FormControl;
  description: FormControl;

  constructor (private todoService: TodoService, builder: FormBuilder) {
    this.currentUser = this.jwtHelper.decodeToken(localStorage.getItem('currentUser'));
	  this.title = new FormControl('', []);
	  this.description = new FormControl('', []);
	  this.addTodo = builder.group({
	  	title: this.title,
	  	description: this.description
  	});
	}

	ngOnInit() { this.getTodo(); }

  // useJwtHelper() {
  //   var token = localStorage.getItem('currentUser');
  //
  //   console.log(
  //     this.jwtHelper.decodeToken(token)
  //   );
  // }

	getTodo() {
		this.todoService.getTodo()
										.subscribe(
											 todos => this.todos = todos,
											 error => this.errorMessage = <any>error
										);
	}

  newTodo (username: string, todo: string, description: string) {
    this.todoService.newTodo(username, todo, description)
                   .subscribe(
                       todo => this.todos.push(todo),
                       error =>  this.errorMessage = <any>error);
    this.addTodo.reset();
  }

	deleteTodo(id: string) {
		this.todoService.deleteTodo(id)
									 .subscribe(res => this.todos = this.todos.filter((todo) => res._body !== todo.description));
	}
}
