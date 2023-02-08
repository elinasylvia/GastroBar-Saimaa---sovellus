import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-drinks-view',
  templateUrl: './drinks-view.component.html',
  styleUrls: ['./drinks-view.component.css']
})
export class DrinksViewComponent implements OnInit {

  public products: Product[] = [];
  constructor(productService: ProductService, public router: Router) {

    this.products = productService.getDrinksData();
  }


  ngOnInit(): void {
  }
  viewProduct(productId: string) {
    this.router.navigate(['item/' + productId]);
  }

}
