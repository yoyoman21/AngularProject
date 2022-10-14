import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisteruserComponent } from './components/registeruser/registeruser.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import {  FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { QuestionformComponent } from './questionform/questionform.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisteruserComponent,
    ListuserComponent,
    
    QuestionformComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
