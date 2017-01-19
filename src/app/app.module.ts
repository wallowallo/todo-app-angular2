import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlertComponent } from './_directives/index'
import { LogInComponent } from './log-in/index';
import { SignUpComponent } from './sign-up/index';
import { TodoComponent } from './todo/index';
import { AuthGuard } from './_guards/index';

import { LoginService, SignupService, TodoService, AlertService, UserService } from './_services/index';

import { routing } from './_routing/app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    LogInComponent,
    SignUpComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    LoginService,
    SignupService,
    AlertService,
    TodoService,
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
