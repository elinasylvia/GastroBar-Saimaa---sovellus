import { Component, OnInit } from '@angular/core';
import { LogincodeService } from '../services/logincode.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  given: any;

  constructor(public logincodeService: LogincodeService) {
    // annettu koodi haetaan servicen kautta welcome komponentista
    this.given = this.logincodeService.getText();
  }

  ngOnInit(): void {
  }
}
