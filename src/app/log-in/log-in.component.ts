import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response, Jsonp } from '@angular/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import '../rxjs-operators';

import { LoginService } from '../_services/login.service';
//import { AppService } from '../app.service';
import { User } from '../_models/user';

@Component({
  moduleId: 'module.id',
  selector: 'app-log-in',
  templateUrl: './log-in.component.html'
})

export class LogInComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  errorMessage: string;
  users: User[];
  User: FormGroup;
  username: FormControl;
  password: FormControl;

  constructor (private loginService: LoginService, builder: FormBuilder, private route: ActivatedRoute, private router: Router) {
	  this.username = new FormControl('', []);
	  this.password = new FormControl('', []);
	  this.User = builder.group({
	  	username: this.username,
	  	password: this.password
  	});
	}

	ngOnInit() {
    this.loginService.logout();
    this.returnUrl = '/todo';
  };

  logInUser (user: string) {
    console.log('user', user);
    this.loginService.logInUser(user)
                   .subscribe(
                       data => {
                                 this.router.navigate([this.returnUrl]);
                       },
                       error =>  this.errorMessage = <any>error);
  }
}
