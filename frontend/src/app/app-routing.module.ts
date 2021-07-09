import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpAddComponent } from './emp-add/emp-add.component';
import { EmpEditComponent } from './emp-edit/emp-edit.component';
import { EmpListComponent } from './emp-list/emp-list.component';

const routes: Routes = [
  { path: 'emp-list', component: EmpListComponent },
  { path: 'emp-add', component: EmpAddComponent },
  { path: 'emp-edit/:id', component: EmpEditComponent },
  { path: '', redirectTo: '/empl-list', pathMatch: 'full' },
  { path: '**', component: EmpListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
