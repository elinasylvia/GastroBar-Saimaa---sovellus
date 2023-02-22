import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Router } from "@angular/router"; // reititin nappuloita varten
import { LogincodeService } from '../services/logincode.service'; // haetaan loginissa annettu koodi
import { Basket } from '../api/models';

@Component({
  selector: 'app-item-page-one',
  templateUrl: './item-page-one.component.html',
  styleUrls: ['./item-page-one.component.css']
})
export class ItemPageOneComponent implements OnInit {

  itemData: any;

  // mikä oli alussa annettu koodi
  given: any;
  cust: string;

  stat: any;

  // tuodaan esiin aika
  current_date: Date = new Date();

  // mihin saadaan inputin arvo
  inputValue: any;

  // arvo amountille
  arvo: any;

  constructor(public itemService: ItemService, public router: Router, public logincodeService: LogincodeService) {
    this.stat = "basket";

    // haetaan se asiakas koodi
    this.cust = this.logincodeService.sendCustomerCode();

    this.arvo = 0;
  }

  addToCart(productId: string) { }

  ngOnInit(): void {
    this.loadItem();

    // hae alussa annettu koodi
    this.given = this.logincodeService.getText();

    // testausta
    console.log(this.given);
    console.log(this.cust);
  }

  // yhtä hakua varten
  loadItem(): void {
    this.itemService.getOne()
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

  // toimiva
  plus(arv: number) {
    arv = this.arvo++;
  }

  minus(arv: number) {
    if (arv && this.arvo > 0)
      arv = this.arvo--;
  }

  // POST / lähetetään tuote ostoskoriin
  addItemToBasket(): void {
    console.log(this.inputValue);
    let basket: Basket = {
      tableNumber: this.given,
      customerCode: this.cust,
      item: this.itemData.name,
      price: this.itemData.price,
      amount: this.arvo.toString(),
      orderTime: this.current_date.toISOString(),
      status: this.stat
    }
    this.itemService.create(basket).subscribe(() => {
      console.log('Basket saved');
      // siirrytään seuraavaan tuotteeseen, kun kategoriat ei vielä projektissa
      this.router.navigate(['cart']);
    });
  }
}