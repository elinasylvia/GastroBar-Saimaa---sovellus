import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { OrdersService } from '../services/orders.service';
import { Order, Products } from '../api/models';

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

  current_date: Date = new Date();


  constructor(public ordersService: OrdersService) {
  }

  ngOnInit(): void {
    this.loadOrdersOne();
    this.loadOrdersTwo();
    this.loadOrdersThree();
    this.loadOrdersFour();
  }

  // haetaan servicestä ja kannasta
  // 1 pöydälle
  loadOrdersOne(): void {
    this.ordersService.getTableOne()
      .subscribe
      (data => {
        this.itemDataOne = data
      });
  }

  // haetaan servicestä ja kannasta
  // 2 pöydälle
  loadOrdersTwo(): void {
    this.ordersService.getTableTwo()
      .subscribe
      (data => {
        this.itemDataTwo = data;
        console.log(this.itemDataTwo);
      });
  }

  // haetaan servicestä ja kannasta
  // 3 pöydälle
  loadOrdersThree(): void {
    this.ordersService.getTableThree()
      .subscribe
      (data => {
        this.itemDataThree = data;
        console.log(this.itemDataThree);
      });
  }

  // haetaan servicestä ja kannasta
  // 4 pöydälle
  loadOrdersFour(): void {
    this.ordersService.getTableFour()
      .subscribe
      (data => {
        this.itemDataFour = data;
        console.log(this.itemDataFour);
      });
  }

  // muokataan tilauksen status "billing"
  // 1 pöydälle
  updateOrderStatus(id?: number): void {
    if (id == null) {
      return;
    }
    let orri: Order = {
      id: id,
      tableNumber: this.itemDataOne[0].tableNumber,
      orders: this.itemDataOne[0].orders,
      orderTime: this.itemDataOne[0].orderTime,
      status: "billing"
    }
    console.log("mikä on itemdataone[0].tablenumber: " + this.itemDataOne[0].tableNumber);

    this.ordersService.onUpdateSubmit(id);
    if (confirm("Haluatko merkitä tuotteen valmiiksi ")) {
      this.ordersService.updateById({ id: id }, orri).subscribe((response: any) => {
        this.reload();
      });
    }
  }

  // muokataan tilauksen status "billing"
  // 2 pöydälle
  updateOrderStatusTableTwo(id?: number): void {
    if (id == null) {
      return;
    }
    let orri: Order = {
      id: id,
      tableNumber: this.itemDataTwo[0].tableNumber,
      orders: this.itemDataTwo[0].orders,
      orderTime: this.itemDataTwo[0].orderTime,
      status: "billing"
    }
    console.log("mikä on itemdatatwo[0].tablenumber: " + this.itemDataTwo[0].tableNumber);

    this.ordersService.onUpdateSubmit(id);
    if (confirm("Haluatko merkitä tuotteen valmiiksi ")) {
      this.ordersService.updateById({ id: id }, orri).subscribe((response: any) => {
        this.reload();
      });
    }
  }

  // muokataan tilauksen status "billing"
  // 3 pöydälle
  updateOrderStatusTableThree(id?: number): void {
    if (id == null) {
      return;
    }
    let orri: Order = {
      id: id,
      tableNumber: this.itemDataThree[0].tableNumber,
      orders: this.itemDataThree[0].orders,
      orderTime: this.itemDataThree[0].orderTime,
      status: "billing"
    }
    console.log("mikä on itemdatathree[0].tablenumber: " + this.itemDataThree[0].tableNumber);

    this.ordersService.onUpdateSubmit(id);
    if (confirm("Haluatko merkitä tuotteen valmiiksi ")) {
      this.ordersService.updateById({ id: id }, orri).subscribe((response: any) => {
        this.reload();
      });
    }
  }

  // muokataan tilauksen status "billing"
  // 4 pöydälle
  updateOrderStatusTableFour(id?: number): void {
    if (id == null) {
      return;
    }
    let orri: Order = {
      id: id,
      tableNumber: this.itemDataFour[0].tableNumber,
      orders: this.itemDataFour[0].orders,
      orderTime: this.itemDataFour[0].orderTime,
      status: "billing"
    }
    console.log("mikä on itemdatafour[0].tablenumber: " + this.itemDataFour[0].tableNumber);

    this.ordersService.onUpdateSubmit(id);
    if (confirm("Haluatko merkitä tuotteen valmiiksi ")) {
      this.ordersService.updateById({ id: id }, orri).subscribe((response: any) => {
        this.reload();
      });
    }
  }

  // reload tota updatea varten
  reload(): void {
    this.loadOrdersOne();
    this.loadOrdersTwo();
    this.loadOrdersThree();
    this.loadOrdersFour();
  }

}
