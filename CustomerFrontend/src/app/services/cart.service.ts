import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(productId: string) {
    let given: string | null = localStorage.getItem('given');
    let storedCart = localStorage.getItem('cart_' + given);
    let cart: string[];
    if (storedCart === null) {
      cart = [];
    } else {
      cart = JSON.parse(storedCart);
    }

    cart.push(productId);
    localStorage.setItem('cart_' + given, JSON.stringify(cart));
  }
}
