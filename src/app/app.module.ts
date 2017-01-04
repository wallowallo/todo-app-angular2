import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppService } from './app.service';

//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { TodoData } from './todo-data';



@NgModule({
  declarations: [
    AppComponent,
    //AppService
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    //InMemoryWebApiModule.forRoot(TodoData)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
