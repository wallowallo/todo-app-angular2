import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TodoComponent } from './todo/todo.component';

import { AppService } from './app.service';
import { LoginService } from './_services/login.service';
import { SignupService } from './_services/signup.service';
import { TodoService } from './_services/todo.service';
import { AlertService } from './_services/alert.service';
import { UserService } from './_services/user.service';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/sign-up', pathMatch: 'full' },
  { path: 'log-in',  component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'todo', component: TodoComponent },
//  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppService,
    LoginService,
    SignupService,
    AlertService,
    TodoService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
