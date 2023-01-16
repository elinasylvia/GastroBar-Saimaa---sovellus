import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-testi',
  templateUrl: './testi.component.html',
  styleUrls: ['./testi.component.css']
})
export class TestiComponent implements OnInit {

  itemData: any;

  constructor(public itemService: ItemService) {
  }

  ngOnInit(): void {
  }

  loadItems(): void {
    this.itemService.get()
      .subscribe
      (data => {
        this.itemData = data;
        console.log('itemData: ' + this.itemData);
      }, err => {
        console.log('Service unavailable');
      }, () => {
        console.log('COMPLETE................');
      });
  }
}
