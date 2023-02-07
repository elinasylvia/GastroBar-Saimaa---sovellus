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
      new Product("Briossisämpylän välissä 180g naudanlihapihvi, cheddarjuusto, chilimajoneesi,    salaatti, punasipuli. Lisukkeena ranskalaiset.", "assets/images/burger.jpg", 15.90, "Boston hampurilainen", "1"),
      new Product("Kermainen sienipasta parmesaanijuustolla ja rucolalla", "assets/images/mushroompasta2.jpg", 12.90, "Taivaallinen sienipasta", "2")
    ];
    this.drinksArray = [
      new Product("Mallasolut", "assets/images/beer.jpg", 6.9, "Olut", "1")
    ];
  }
}
