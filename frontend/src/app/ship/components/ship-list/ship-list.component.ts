import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Ship } from '../../ship.model';
import { ShipService } from '../../services/ship.service';
import Page from '../../../models/page.model';
import { ToastrService } from 'ngx-toastr';
import { Constants } from '../../../core/constants';


@Component({
  selector: 'app-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.scss']
})
export class ShipListComponent implements OnInit {

  ships: Ship[] = [];
  page: Page = {
    totalRecords: 0,
    pageNumber: 1,
    recordsPerPage: 20,
    search: ''
  };


  constructor(private shipService: ShipService,
    private toastrService: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.getShipList();
  }

  getShipList() {
    this.shipService.getShipList()
      .subscribe(response => {
        this.ships = response;
        if (!this.ships.length) {
          this.toastrService.error("Their are no records as of now", Constants.TITLE_ERROR);
        }
      }, error => {
        this.toastrService.error("Error while fetching ship list", Constants.TITLE_ERROR);
      });
  }

  deleteShip(shipCode: string) {
    this.shipService.deleteShip(shipCode)
      .subscribe(response => {
        if (response.status) {
          this.toastrService.success(response.message, Constants.TITLE_SUCCESS);
          this.getShipList();
        } else {
          this.toastrService.error(response.message, Constants.TITLE_ERROR);
        }
      }, error => {
        this.toastrService.error("Error while adding ship details", Constants.TITLE_ERROR);
      });
  }


  goToEditShip(shipCode: string) {
    this.router.navigate(['ships/update', shipCode]);
  }

}
