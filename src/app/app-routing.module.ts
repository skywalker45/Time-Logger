import { NgModule, Component } from '@angular/core';
import { PtoComponent } from './pto/pto.component';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { OptionsComponent } from './options/options.component';


const routes: Routes = [
  { path: 'addPto', component: PtoComponent},
  { path: '', component: OptionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
