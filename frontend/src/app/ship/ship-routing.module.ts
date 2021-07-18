import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShipAddComponent } from './components/ship-add/ship-add.component';
import { ShipEditComponent } from './components/ship-edit/ship-edit.component';
import { ShipListComponent } from './components/ship-list/ship-list.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'list', component: ShipListComponent },
            { path: 'add', component: ShipAddComponent },
            { path: 'edit/:id', component: ShipEditComponent }
        ]
    },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', component: ShipListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShipRoutingModule { }
