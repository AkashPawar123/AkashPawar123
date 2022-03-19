import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { Nav1Component } from './main/nav1/nav1.component';
import { Menu1Component } from './main/menu1/menu1.component';
import { LoginComponent } from './main/login/login.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainComponent,
    Nav1Component,
    Menu1Component,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MainModule { }
