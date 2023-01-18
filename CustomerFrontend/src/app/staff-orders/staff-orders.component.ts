import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-staff-orders',
  templateUrl: './staff-orders.component.html',
  styleUrls: ['./staff-orders.component.css']
})
export class StaffOrdersComponent implements OnInit {

  // gettiä varten
  itemData: any;

  constructor(public ordersService: OrdersService) { }

  ngOnInit(): void {
  }

  // haetaan servicestä ja kannasta
  loadOrdersOne(): void {
    this.ordersService.getTableOne()
      .subscribe
      (data => {
        this.itemData = data;
        console.log(this.itemData);
        // this.itemData[0], this.itemData[1], this.itemData[2]
      });
  }

  // haetaan servicestä ja kannasta
  loadOrdersTwo(): void {
    this.ordersService.getTableTwo()
      .subscribe
      (data => {
        this.itemData = data;
        console.log(this.itemData);
        // this.itemData[0], this.itemData[1], this.itemData[2]
      });
  }

  // haetaan servicestä ja kannasta
  loadOrdersThree(): void {
    this.ordersService.getTableThree()
      .subscribe
      (data => {
        this.itemData = data;
        console.log(this.itemData);
        // this.itemData[0], this.itemData[1], this.itemData[2]
      });
  }

  // haetaan servicestä ja kannasta
  loadOrdersFour(): void {
    this.ordersService.getTableFour()
      .subscribe
      (data => {
        this.itemData = data;
        console.log(this.itemData);
        // this.itemData[0], this.itemData[1], this.itemData[2]
      });
  }

}
