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
      new Product("", "assets/images/burger.jpg", 19, "Boston hampurilainen", "1"),
      new Product("", "assets/images/mushroompasta2.jpg", 15, "Taivaallinen sienipasta", "2"),
      new Product("", "assets/images/ceasar-salaatti.jpg", 14, "Ceasar-salaatti", "3"),
      new Product("", "assets/images/risotto.jpg", 16, "Sitruunarisotto", "4"),
    ];
    this.drinksArray = [
      new Product("", "assets/images/beer.jpg", 8, "Olut", "2")
    ];
  }
}
