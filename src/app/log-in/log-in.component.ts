import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response, Jsonp } from '@angular/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import '../rxjs-operators';

import { AppService } from '../app.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  errorMessage: string;
  User: FormGroup;
  username: FormControl;
  password: FormControl;

  constructor (private appService: AppService, builder: FormBuilder) {
	  this.username = new FormControl('', []);
	  this.password = new FormControl('', []);
	  this.User = builder.group({
	  	username: this.username,
	  	password: this.password
  	});
	}

	ngOnInit() {}

  getUser (user: string) {
    this.appService.getUser(user)
                   .subscribe(
                       user => console.log(user),
                       error =>  this.errorMessage = <any>error);
  }
}
