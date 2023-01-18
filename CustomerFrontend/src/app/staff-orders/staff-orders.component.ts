import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-staff-orders',
  templateUrl: './staff-orders.component.html',
  styleUrls: ['./staff-orders.component.css']
})
export class StaffOrdersComponent implements OnInit {

  // gettiä varten
  itemDataOne: any;
  itemDataTwo: any;
  itemDataThree: any;
  itemDataFour: any;

  constructor(public ordersService: OrdersService) { }

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
        this.itemDataOne = data;
        console.log(this.itemDataOne);
        // this.itemData[0], this.itemData[1], this.itemData[2]
      });
  }

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

}
