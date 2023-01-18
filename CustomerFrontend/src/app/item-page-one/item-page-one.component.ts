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

  // yritetään nyt tehä siitä formia tms POST
  sentBasket: any;

  constructor(public itemService: ItemService, public router: Router, public logincodeService: LogincodeService) {
    // post pohdiskelua
    /*
    this.sentBasket = new FormGroup({
      tableNumber: new FormControl(),
      item: new FormControl(),
      price: new FormControl(),
      amount: new FormControl(),
      OrderTime: new FormControl(),
    });*/
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


  // yritetään postata kantaan tää tieto
  // huom. tässä on haettu item. ja tällä esimerkillä yritetään vaa luoda item
  // mutta haluattaisiin luoda basket
  addItemToBasket(): void {
    let basket: Basket = {
      tableNumber: this.sentBasket.get('itemData.tablenumber')!.value,
      item: this.sentBasket.get('itemData.name')!.value,
      price: this.sentBasket.get('itemData.price')!.value,
      amount: this.sentBasket.get('itemData.amount')!.value
    }
    this.itemService.create(basket).subscribe(() => {
      console.log('Basket saved');
    });
  }
}
