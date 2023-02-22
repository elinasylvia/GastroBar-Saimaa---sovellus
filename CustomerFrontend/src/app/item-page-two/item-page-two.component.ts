import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Router } from "@angular/router"; // reititin nappuloita varten
import { LogincodeService } from '../services/logincode.service'; // haetaan loginissa annettu koodi
import { Basket } from '../api/models';

@Component({
  selector: 'app-item-page-one',
  templateUrl: './item-page-two.component.html',
  styleUrls: ['./item-page-two.component.css']
})
export class ItemPageTwoComponent implements OnInit {

  itemData: any;

  // mikä oli alussa annettu koodi
  given: any;
  cust: string;

  stat: any;

  // tuodaan esiin aika
  current_date: Date = new Date();

  // mihin saadaan inputin arvo
  inputValue: any;

  constructor(public itemService: ItemService, public router: Router, public logincodeService: LogincodeService) {
    this.stat = "basket";

    // haetaan se asiakas koodi
    this.cust = this.logincodeService.sendCustomerCode();
    // hae alussa annettu koodi
    this.given = this.logincodeService.getText();
    // lataa yksi tuote aina ngOnInitissä
    this.loadItem();

  }

  addToCart(productId: string) { }

  ngOnInit(): void {

  }

  // yhtä hakua varten
  loadItem(): void {
    this.itemService.getTwo()
      .subscribe
      (data => {
        this.itemData = data;
        console.log(this.itemData);
        // this.itemData[0], this.itemData[1], this.itemData[2]
      });
  }

  // inputin hakua varten (post)
  change(event: any) {
    this.inputValue = event.target.value;
  }

  // POST / lähetetään tuote ostoskoriin
  addItemToBasket(): void {
    console.log(this.inputValue);
    let basket: Basket = {
      tableNumber: this.given,
      customerCode: this.cust,
      item: this.itemData.name,
      price: this.itemData.price,
      amount: this.inputValue,
      orderTime: this.current_date.toISOString(),
      status: this.stat
    }
    this.itemService.create(basket).subscribe(() => {
      console.log('Basket saved');
      // siirrytään seuraavaan tuotteeseen, kun kategoriat ei vielä projektissa
      this.router.navigate(['item/2']);
    });
  }
}
