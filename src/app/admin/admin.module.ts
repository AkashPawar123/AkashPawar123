import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { ProductsComponent } from './products/products.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    MenuComponent,
    NavComponent,
    ProductsComponent,
    ProductCreateComponent,
    ProductEditComponent, 
    AdminComponent
   
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class AdminModule { }
