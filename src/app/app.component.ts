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

export class AppComponent {}
