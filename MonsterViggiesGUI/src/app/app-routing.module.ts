import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './MonsterVeggies/dashBoard/dashboard/dashboard.component';

const routes: Routes = [
   {
    path:'dashboard',
    loadChildren:'./MonsterVeggies/dashBoard/dashboard/dashboard.module#DashboardModule'
 
  },
  {
    path:'',
    loadChildren:'./MonsterVeggies/dashBoard/dashboard/dashboard.module#DashboardModule'
 
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
