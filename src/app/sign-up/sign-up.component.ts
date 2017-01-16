import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response, Jsonp } from '@angular/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import '../rxjs-operators';

import { AppService } from '../app.service';
import { User } from '../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  errorMessage: string;
  addUser: FormGroup;
  username: FormControl;
  password: FormControl;

  constructor (private appService: AppService, builder: FormBuilder) {
	  this.username = new FormControl('', []);
	  this.password = new FormControl('', []);
	  this.addUser = builder.group({
	  	username: this.username,
	  	password: this.password
  	});
	}

	ngOnInit() {}

  newUser (user: string) {
    this.appService.newUser(user)
                   .subscribe(
                       user => console.log(user),
                       error =>  this.errorMessage = <any>error);
    this.addUser.reset();
  }
}
