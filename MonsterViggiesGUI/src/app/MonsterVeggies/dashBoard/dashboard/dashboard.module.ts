import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
   path:'',
   component:DashboardComponent
 }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    RouterModule.forChild(routes),
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class DashboardModule { }
