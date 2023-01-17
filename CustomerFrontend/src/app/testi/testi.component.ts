import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { ItemsService } from '../api/services';
import { ItemDto } from '../api/models';

@Component({
  selector: 'app-testi',
  templateUrl: './testi.component.html',
  styleUrls: ['./testi.component.css']
})
export class TestiComponent implements OnInit {

  itemData: any;
  itemData2: any;

  constructor(public itemService: ItemService, public itemsService: ItemsService) {
  }

  ngOnInit(): void {
    // hae kaikki
    this.loadItems();

    // yhtä varten
    this.loadItems2();
  }

  // hae kaikki
  loadItems(): void {
    this.itemService.get()
      .subscribe
      (data => {
        this.itemData = data;
        console.log(this.itemData);
        // this.itemData[0], this.itemData[1], this.itemData[2]
      });
  }

  // yhtä hakua varten
  loadItems2(): void {
    this.itemService.getOne()
      .subscribe
      (data => {
        this.itemData2 = data;
        console.log(this.itemData2);
        // this.itemData[0], this.itemData[1], this.itemData[2]
      });
  }

}
