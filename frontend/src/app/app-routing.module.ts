import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoRouteFoundComponent } from './no-route/NoRouteFoundCompoent';

const routes: Routes = [
  {
    path: 'ship',
    loadChildren: () => import('./ship/ship.module').then(m => m.ShipModule)
  },
  { path: '', redirectTo: '/ship', pathMatch: 'full' },
  { path: '**', component: NoRouteFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
