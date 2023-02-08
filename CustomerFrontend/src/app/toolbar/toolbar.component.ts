import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getCartAmount() {
    let given = localStorage.getItem('given');
    let storedCart = localStorage.getItem('cart_' + given);
    if (storedCart === null) {
      return 0;
    }
    let cart: string[] = JSON.parse(storedCart);
    return cart.length;
  }

}
