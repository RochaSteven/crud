import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoComponent } from './producto/producto.component'
const routes: Routes = [
    {path:'',  redirectTo:'/producto',  pathMatch: 'full', },
    {path:'producto', component:ProductoComponent},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
