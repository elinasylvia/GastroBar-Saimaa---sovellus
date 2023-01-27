import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productArray: Array<Product>;
  getData(): any {
    return this.productArray;
  }
  constructor() {
    this.productArray = [
      new Product("Briossisämpylän välissä 180g naudanlihapihvi, cheddarjuusto, chilimajoneesi,    salaatti, punasipuli. Lisukkeena ranskalaiset.", "assets/images/bostonburger.jpg", 15.90, "Boston hampurilainen"),
      new Product("Briossisämpylän välissä 180g naudanlihapihvi, cheddarjuusto, chilimajoneesi,    salaatti, punasipuli. Lisukkeena ranskalaiset.", "assets/images/bostonburger.jpg", 15.90, "Boston hampurilainen")
    ];
  }
}
