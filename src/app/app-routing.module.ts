import { NgModule, Component } from '@angular/core';
import { PtoComponent } from './pto/pto.component';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  { path: 'main', component: MenuComponent },
  { path: 'addPto', component: PtoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
