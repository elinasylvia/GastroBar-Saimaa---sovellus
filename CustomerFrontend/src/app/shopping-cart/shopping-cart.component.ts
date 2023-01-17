import { Component, OnInit } from '@angular/core';
import { LogincodeService } from '../services/logincode.service';
import { ItemService } from '../services/item.service';

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

  constructor(public logincodeService: LogincodeService, public itemService: ItemService) {
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
}
