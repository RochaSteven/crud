import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { FormComponent } from './vistas/form/form.component';
import {Route, RouterModule } from '@angular/router';
const routes:Route []=[
  {path:'', component:ProductoComponent},
  {path:'form', component:FormComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    FormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
