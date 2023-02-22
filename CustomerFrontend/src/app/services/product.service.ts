import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productArray: Array<Product>;
  drinksArray: Array<Product>;
  getData(): any {
    return this.productArray;
  }
  getDrinksData(): any {
    return this.drinksArray;
  }
  constructor() {
    this.productArray = [
      new Product("", "assets/images/burger.jpg", 18.90, "Boston hampurilainen", "1"),
      new Product("", "assets/images/mushroompasta2.jpg", 14.90, "Taivaallinen sienipasta", "2"),
      new Product("", "assets/images/ceasar-salaatti.jpg", 12.90, "Ceasar-salaatti", "3"),
      new Product("", "assets/images/risotto.jpg", 15.90, "Sitruunarisotto", "4"),
    ];
    this.drinksArray = [
      new Product("", "assets/images/beer.jpg", 6.9, "Olut", "2")
    ];
  }
}
