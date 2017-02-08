import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import '../_helpers/rxjs-operators';

import { AlertService, LoginService } from '../_services/index';
import { User } from '../_models/user';

@Component({
  moduleId: 'module.id',
  selector: 'app-log-in',
  templateUrl: './log-in.component.html'
})

export class LogInComponent implements OnInit {
  returnUrl: string;
  loading = false;
  errorMessage: string;
  users: User[];
  User: FormGroup;
  username: FormControl;
  password: FormControl;

  constructor (
    private loginService: LoginService,
    builder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {

	     this.username = new FormControl('', []);
	     this.password = new FormControl('', []);
	     this.User = builder.group({
	  	 username: this.username,
	  	 password: this.password
  	});
	}

	ngOnInit() {
    this.loginService.logout();
    this.returnUrl = '/todo'|| '/log-in';
  };

  logInUser (user: string) {
    this.loading = true;
    this.loginService.logInUser(user)
                   .subscribe(
                       data => {
                                 this.router.navigate([this.returnUrl]);
                       },
                       error =>  {this.errorMessage = <any>error
                                  this.loading = false;});
  }
}
