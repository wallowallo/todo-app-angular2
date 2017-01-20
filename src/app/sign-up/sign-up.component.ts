import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response, Jsonp } from '@angular/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import '../_helpers/rxjs-operators';

import { SignupService, AlertService } from '../_services/index'
import { User } from '../_models/user';

@Component({
  moduleId: 'module.id',
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent {
  returnUrl: string;
  errorMessage: string;
  addUser: FormGroup;
  username: FormControl;
  password: FormControl;

  constructor (
    builder: FormBuilder,
    private signupService: SignupService,
    private alertService: AlertService,
    private router: Router) {

	     this.username = new FormControl('', []);
	     this.password = new FormControl('', []);
	     this.addUser = builder.group({
	  	 username: this.username,
	  	 password: this.password
  	 });
	 }

  newUser (user: string) {
    this.signupService.newUser(user)
                   .subscribe(
                     data => {
                               this.alertService.success('Registration successful', true);
                               this.router.navigate(['/log-in']);
                     },
                       error =>  this.alertService.error(error));
    this.addUser.reset();
  }
}
