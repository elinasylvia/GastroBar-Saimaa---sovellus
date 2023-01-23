import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { OrdersService } from '../services/orders.service';
import { Products } from '../api/models';

@Component({
  selector: 'app-staff-orders',
  templateUrl: './staff-orders.component.html',
  styleUrls: ['./staff-orders.component.css']
})
export class StaffOrdersComponent implements OnInit {

  resres: any;

  // gettiä varten
  itemDataOne: any;
  itemDataTwo: any;
  itemDataThree: any;
  itemDataFour: any;

  constructor(public ordersService: OrdersService) {
  }

  ngOnInit(): void {
    this.loadOrdersOne();
    this.loadOrdersTwo();
    this.loadOrdersThree();
    this.loadOrdersFour();
  }

  // haetaan servicestä ja kannasta
  loadOrdersOne(): void {
    this.ordersService.getTableOne()
      .subscribe
      (data => {
        this.itemDataOne = data
        // console.log(this.itemDataOne);
        // this.itemData[0], this.itemData[1], this.itemData[2]
      });
  }

  /*
  loadOrdersOne(): void {
    this.ordersService.getTableOne()
      .subscribe
      (data => {
        this.itemDataOne = data
        // console.log(this.itemDataOne);
        // this.itemData[0], this.itemData[1], this.itemData[2]
      });
  }*/

  // haetaan servicestä ja kannasta
  loadOrdersTwo(): void {
    this.ordersService.getTableTwo()
      .subscribe
      (data => {
        this.itemDataTwo = data;
        console.log(this.itemDataTwo);
        // this.itemData[0], this.itemData[1], this.itemData[2]
      });
  }

  // haetaan servicestä ja kannasta
  loadOrdersThree(): void {
    this.ordersService.getTableThree()
      .subscribe
      (data => {
        this.itemDataThree = data;
        console.log(this.itemDataThree);
        // this.itemData[0], this.itemData[1], this.itemData[2]
      });
  }

  // haetaan servicestä ja kannasta
  loadOrdersFour(): void {
    this.ordersService.getTableFour()
      .subscribe
      (data => {
        this.itemDataFour = data;
        console.log(this.itemDataFour);
        // this.itemData[0], this.itemData[1], this.itemData[2]
      });
  }

  updateOrderStatus(id?: number): void {
    // kopsattu basket deletestä, pitäisi muokata jotenkin putiksi

    if (id == null) {
      return;
    }
    /*
    // lähetetään nyt tällä tavoin tuo id:n arvo servicelle
    this.itemService.onSubmit(id);

    if (confirm("Haluatko varmasti poistaa kohteen ")) {
      this.itemService.deleteById({ id: id }).subscribe((response: any) => {
        // console.log(response);
        this.reload();
      });
    }*/
  }

  // reload tota updatea varten
  reload(): void {
    this.loadOrdersOne();
    this.loadOrdersTwo();
    this.loadOrdersThree();
    this.loadOrdersFour();
  }

}
