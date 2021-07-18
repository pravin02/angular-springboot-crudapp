import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ShipAddComponent } from "./components/ship-add/ship-add.component";
import { ShipEditComponent } from "./components/ship-edit/ship-edit.component";
import { ShipListComponent } from "./components/ship-list/ship-list.component";
import { ShipService } from "./services/ship.service";
import { ShipRoutingModule } from "./ship-routing.module";
import ShipComponent from "./ship.component";

@NgModule({
    declarations: [
        ShipComponent,
        ShipListComponent,
        ShipAddComponent,
        ShipEditComponent
    ],
    providers: [ShipService],
    imports: [
        CommonModule,
        ShipRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ]
})
export class ShipModule { }