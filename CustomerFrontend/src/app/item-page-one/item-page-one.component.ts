import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item-page-one',
  templateUrl: './item-page-one.component.html',
  styleUrls: ['./item-page-one.component.css']
})
export class ItemPageOneComponent implements OnInit {

  itemData: any;

  constructor(public itemService: ItemService) { }

  ngOnInit(): void {
    this.loadItem();
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

}
