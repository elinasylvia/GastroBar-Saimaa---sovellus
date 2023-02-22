import { Component, OnInit } from '@angular/core';
import { LogincodeService } from '../services/logincode.service';
import { ItemService } from '../services/item.service';
import { BasketsService } from '../api/services';
import { OrdersService } from '../services/orders.service';
import { Router } from "@angular/router"; // reititin nappuloita varten
import { Order, Products, Basket, BasketDto } from '../api/models';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  // koodia varten
  given: any;

  // gettiä varten
  itemData: any;

  // aika
  current_date: Date = new Date();

  stat: any;

  arrLength: number;


  constructor(public router: Router, private ordersService: OrdersService, public logincodeService: LogincodeService, public itemService: ItemService, private basketsService: BasketsService) {
    // annettu koodi haetaan servicen kautta welcome komponentista
    this.given = this.logincodeService.getText();

    this.stat = "open";
    this.arrLength = 0;
  }

  // ladataan kannasta
  ngOnInit(): void {
    this.loadItems();
  }

  // haetaan servicestä ja kannasta
  loadItems(): void {
    this.itemService.getTable()
      .subscribe
      (data => {
        this.itemData = data;
        console.log(this.itemData);
        this.itemData[0], this.itemData[1], this.itemData[2]
      });
  }

  // toimiva
  // plus(id: number) {
  //   let item = this.itemData.find(item => item.productId === id);
  //   if (item) {
  //     item.amount++;
  //   }
  // }
  // minus(id: number) {
  //   let item = this.itemData.find(item => item.productId === id);
  //   if (item && item.amount > 0) {
  //     item.amount--;
  //   }
  // }

  // getTotal() {
  //   return this.itemData
  //     .map(item => item.amount * (item.price ?? 0))
  //     .reduce((prev, curr) => prev + curr, 0);
  // }

  deleteBasketProduct(id?: number): void {
    if (id == null) {
      return;
    }

    // if (confirm("Haluatko varmasti poistaa kohteen ")) {
    //   let item = this.itemData.find(item => item.productId === id);
    //   if (item) {
    //     this.itemData.splice(this.itemData.indexOf(item), 1);
    //   }
    // }
    // lähetetään nyt tällä tavoin tuo id:n arvo servicelle
    // this.itemService.onSubmit(id);

    // if (confirm("Haluatko varmasti poistaa kohteen ")) {
    //   this.itemService.deleteById({ id: id }).subscribe((response: any) => {
    //     // console.log(response);
    //     this.reload();
    //   });
    // }
  }

  // PUT jokaiselle tuotteelle
  putBasketProduct(id?: number): void {
    if (id == null) {
      return;
    }

    // tämä tulostaa sen pituuden mitä ostoskorissa on 
    this.arrLength = this.itemData.length - 1;

    console.log("pituus" + this.arrLength);
    console.log("id on " + id);
    console.log("tablenumber on " + this.given);
    console.log("price on " + this.itemData[this.arrLength].price);
    console.log("amout on " + this.itemData[this.arrLength].amount)
    console.log("aika on " + this.current_date.toISOString());
    console.log("status on " + this.stat);
    console.log("item on" + this.itemData[this.arrLength].item);

    let orri: Basket = {
      // basket = tablenumber, item, price, amount + nyt sit myös status ja ordertime
      productId: id,
      tableNumber: this.given,
      item: this.itemData[this.arrLength].item,
      price: this.itemData[this.arrLength].price,
      amount: this.itemData[this.arrLength].amount,
      orderTime: this.current_date.toISOString(),
      status: this.stat
    }

    this.ordersService.onUpdateSubmit(id);
    if (confirm("Haluatko merkitä tuotteen valmiiksi ")) {
      this.ordersService.updateByProuductId({ id: id }, orri).subscribe((response: any) => {
        // huom. tästä pitäisi varmaan poistaa tuo reload, niin se ei poista sitä ennen lähetystä
        // this.reload();
      });
    }
  }

  reload(): void {
    this.loadItems();
  }


  // order malliluokka huomioiden :
  // POST eli sinetöidään tilaus
  makeOrder(): void {
    let order: Order = {
      // order kentät : id, tablenumber, (products) orders, ordertime, status
      tableNumber: this.given,
      orders: this.itemData,
      orderTime: this.current_date.toISOString(),
      status: "open"
    }

    console.log("tämän alla tulostettu itemData");
    console.log(this.itemData);

    if (confirm("Haluatko varmasti lähettää tilauksen ")) {
      localStorage.clear();
      this.ordersService.create(order).subscribe(() => {
        console.log('Order saved');
        this.router.navigate(['staff-orders']);
        // ehkä tää reload vois tulla tänne
        // this.reload();
      });
    }

  }

}
