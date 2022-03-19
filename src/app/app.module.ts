import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { MainModule } from './main/main.module';
import {  HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
 



@NgModule({   
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    MainModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
