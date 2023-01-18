import { Component, OnInit } from '@angular/core';
import { LogincodeService } from '../services/logincode.service';
import { ItemService } from '../services/item.service';
import { BasketsService } from '../api/services';

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

  constructor(public logincodeService: LogincodeService, public itemService: ItemService, private basketsService: BasketsService) {
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
}
