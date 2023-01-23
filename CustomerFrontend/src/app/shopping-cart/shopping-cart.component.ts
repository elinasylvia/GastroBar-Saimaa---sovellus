import { Component, OnInit } from '@angular/core';
import { LogincodeService } from '../services/logincode.service';
import { ItemService } from '../services/item.service';
import { BasketsService } from '../api/services';
import { OrdersService } from '../services/orders.service';
import { Router } from "@angular/router"; // reititin nappuloita varten
import { Order, Products } from '../api/models';

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

  constructor(public router: Router, private ordersService: OrdersService, public logincodeService: LogincodeService, public itemService: ItemService, private basketsService: BasketsService) {
    // annettu koodi haetaan servicen kautta welcome komponentista
    this.given = this.logincodeService.getText();
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
        // this.itemData[0], this.itemData[1], this.itemData[2]
      });
  }

  // toimiva
  deleteBasketProduct(id?: number): void {
    if (id == null) {
      return;
    }
    // lähetetään nyt tällä tavoin tuo id:n arvo servicelle
    this.itemService.onSubmit(id);

    if (confirm("Haluatko varmasti poistaa kohteen ")) {
      this.itemService.deleteById({ id: id }).subscribe((response: any) => {
        // console.log(response);
        this.reload();
      });
    }
  }

  reload(): void {
    this.loadItems();
  }

  goBack() {
    // tähän joku tilaus lähetetty confirmaatio

    // huom. tähän kategoriat
    this.router.navigate(['item/1']);
  }

  // huom. yritetaan tehda post
  // eli lähetetään korin sisältö order kantaan
  // kopsattu tuolta item page > missä se toimii jo
  // eli tehään siitä order "olio"
  makeOrder(): void {
    let order: Order = {
      // order kentät : id, tablenumber, (products) orders, ordertime, status
      tableNumber: this.given,

      orders: this.itemData, // mikä tää order nyt on

      orderTime: this.current_date.toISOString(),
      status: "open" // yritetään nyt laittaa tieto vain tähän
    }

    console.log("tämän alla tulostettu itemData");
    console.log(this.itemData);

    this.ordersService.create(order).subscribe(() => {
      console.log('Order saved');
      this.router.navigate(['item/1']);
    });
  }

}
