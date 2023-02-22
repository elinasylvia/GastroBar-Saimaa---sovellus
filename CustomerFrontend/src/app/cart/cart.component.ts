import { Component, OnInit } from '@angular/core';
import { Products } from '../api/models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  itemData: Products[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  loadItems(): void {
    this.itemData = [{ productId: 1, item: 'Hamppari', price: 10, amount: 2, imageUrl: '../../assets/images/bostonburger.jpg' },
    { productId: 2, item: 'Hamppari2', price: 5, amount: 1, imageUrl: '../../assets/images/bostonburger.jpg' }];
  }

  plus(id: number) {
    let item = this.itemData.find(item => item.productId === id);
    if (item) {
      item.amount++;
    }
  }
  minus(id: number) {
    let item = this.itemData.find(item => item.productId === id);
    if (item && item.amount > 0) {
      item.amount--;
    }
  }

  getTotal() {
    return this.itemData
      .map(item => item.amount * (item.price ?? 0))
      .reduce((prev, curr) => prev + curr, 0);
  }

  deleteBasketProduct(id?: number): void {
    if (id == null) {
      return;
    }

    if (confirm("Haluatko varmasti poistaa kohteen ")) {
      let item = this.itemData.find(item => item.productId === id);
      if (item) {
        this.itemData.splice(this.itemData.indexOf(item), 1);
      }
    }

  }
}
