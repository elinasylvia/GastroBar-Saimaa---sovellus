import { Component, OnInit } from '@angular/core';
import { Order } from '../api/models';
import { BillsService } from '../services/bills.service';

/*Periaatteessa sama kun staff-orders, mutta muokataan haetaan "billing" statuksella olevat,
ja muokataan ne "closed"*/

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  // gettiä varten
  itemDataOne: any;
  itemDataTwo: any;
  itemDataThree: any;
  itemDataFour: any;

  current_date: Date = new Date();

  constructor(public billsService: BillsService) {
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
    this.billsService.getTableOne()
      .subscribe
      (data => {
        this.itemDataOne = data
      });
  }

  // haetaan servicestä ja kannasta
  // 2 pöydälle
  loadOrdersTwo(): void {
    this.billsService.getTableTwo()
      .subscribe
      (data => {
        this.itemDataTwo = data;
        console.log(this.itemDataTwo);
      });
  }

  // haetaan servicestä ja kannasta
  // 3 pöydälle
  loadOrdersThree(): void {
    this.billsService.getTableThree()
      .subscribe
      (data => {
        this.itemDataThree = data;
        console.log(this.itemDataThree);
      });
  }

  // haetaan servicestä ja kannasta
  // 4 pöydälle
  loadOrdersFour(): void {
    this.billsService.getTableFour()
      .subscribe
      (data => {
        this.itemDataFour = data;
        console.log(this.itemDataFour);
      });
  }

  // muokataan tilauksen status "closed"
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
      status: "closed"
    }
    console.log("mikä on itemdataone[0].tablenumber: " + this.itemDataOne[0].tableNumber);

    this.billsService.onUpdateSubmit(id);
    if (confirm("Haluatko merkitä tuotteen laskun suljetuksi ")) {
      this.billsService.updateById({ id: id }, orri).subscribe((response: any) => {
        this.reload();
      });
    }
  }

  // muokataan tilauksen status "closed"
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
      status: "closed"
    }
    console.log("mikä on itemdatatwo[0].tablenumber: " + this.itemDataTwo[0].tableNumber);

    this.billsService.onUpdateSubmit(id);
    if (confirm("Haluatko merkitä tuotteen laskun suljetuksi ")) {
      this.billsService.updateById({ id: id }, orri).subscribe((response: any) => {
        this.reload();
      });
    }
  }

  // muokataan tilauksen status "closed"
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
      status: "closed"
    }
    console.log("mikä on itemdatathree[0].tablenumber: " + this.itemDataThree[0].tableNumber);

    this.billsService.onUpdateSubmit(id);
    if (confirm("Haluatko merkitä tuotteen laskun suljetuksi ")) {
      this.billsService.updateById({ id: id }, orri).subscribe((response: any) => {
        this.reload();
      });
    }
  }

  // muokataan tilauksen status "closed"
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
      status: "closed"
    }
    console.log("mikä on itemdatafour[0].tablenumber: " + this.itemDataFour[0].tableNumber);

    this.billsService.onUpdateSubmit(id);
    if (confirm("Haluatko merkitä tuotteen laskun suljetuksi ")) {
      this.billsService.updateById({ id: id }, orri).subscribe((response: any) => {
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
