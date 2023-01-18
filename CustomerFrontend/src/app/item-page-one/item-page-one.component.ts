import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Router } from "@angular/router"; // reititin nappuloita varten
import { LogincodeService } from '../services/logincode.service'; // haetaan loginissa annettu koodi
import { Basket } from '../api/models';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-item-page-one',
  templateUrl: './item-page-one.component.html',
  styleUrls: ['./item-page-one.component.css']
})
export class ItemPageOneComponent implements OnInit {

  itemData: any;

  // mikä oli alussa annettu koodi
  given: any;

  // tuodaan esiin aika
  // kannassa joku häiriö kun näyttää kaikki ajat samanlaisina
  // antaa kuitenkin lisätä kantaan tällä
  current_date: Date = new Date();

  // mihin saadaan inputin arvo
  inputValue: any;

  constructor(public itemService: ItemService, public router: Router, public logincodeService: LogincodeService) {

  }

  ngOnInit(): void {
    // lataa yksi tuote aina ngOnInitissä
    this.loadItem();

    // hae alussa annettu koodi
    this.given = this.logincodeService.getText();
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

  // nappulaa painetaan mennään nyt vaan koriin
  send(): any {
    this.router.navigate(['cart']);
  }


  // inputin hakua varten (post)
  change(event: any) {
    this.inputValue = event.target.value;
  }

  // POST toimii
  addItemToBasket(): void {
    console.log(this.inputValue);
    let basket: Basket = {
      tableNumber: this.given,
      item: this.itemData.name,
      price: this.itemData.price,
      amount: this.inputValue,
      orderTime: this.current_date.toISOString()
    }
    this.itemService.create(basket).subscribe(() => {
      console.log('Basket saved');
    });
  }
}
