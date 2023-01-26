import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Basket } from '../api/models';
import { ItemService } from '../services/item.service';
import { LogincodeService } from '../services/logincode.service';

@Component({
  selector: 'app-item-page-two',
  templateUrl: './item-page-two.component.html',
  styleUrls: ['./item-page-two.component.css']
})
export class ItemPageTwoComponent implements OnInit {
  itemData: any;

  // mikä oli alussa annettu koodi
  given: any;

  stat: any;

  // tuodaan esiin aika
  current_date: Date = new Date();

  // mihin saadaan inputin arvo
  inputValue: any;

  constructor(public itemService: ItemService, public router: Router, public logincodeService: LogincodeService) {
    this.stat = "basket";
  }

  ngOnInit(): void {
    // lataa yksi tuote aina ngOnInitissä
    this.loadItem();

    // hae alussa annettu koodi
    this.given = this.logincodeService.getText();
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

  // POST toimii
  addItemToBasket(): void {
    console.log(this.inputValue);
    let basket: Basket = {
      tableNumber: this.given,
      item: this.itemData.name,
      price: this.itemData.price,
      amount: this.inputValue,
      orderTime: this.current_date.toISOString(),
      status: this.stat
    }
    this.itemService.create(basket).subscribe(() => {
      console.log('Basket saved');
      this.router.navigate(['cart']);
    });
  }
}

