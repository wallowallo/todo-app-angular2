import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

export class Todo {
  description: string;
} 

const TODOS: Todo[] = [
  { description: 'Do homework' },
  { description: 'Clean my room' },
  { description: 'Do the dishes' },
  { description: 'Go to the gym' }
]; 

@Component({
  moduleId: 'module.id',
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo:';
  todos = TODOS;
}
