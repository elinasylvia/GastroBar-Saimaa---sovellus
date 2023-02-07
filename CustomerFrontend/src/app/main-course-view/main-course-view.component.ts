import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-main-course-view',
  templateUrl: './main-course-view.component.html',
  styleUrls: ['./main-course-view.component.css']
})
export class MainCourseViewComponent implements OnInit {
  public products: Product[] = [];

  constructor(productService: ProductService, private cartService: CartService, public router: Router) {
    this.products = productService.getData();
    this.cartService = cartService;

  }
  ngOnInit(): void {
  }

  goToItem1() {
    this.router.navigate(['item/1']);
  }
  goToItem2() {
    this.router.navigate(['item/2']);
  }

  viewProduct(productId: string) {
    this.router.navigate(['item/' + productId]);
  }
  addToCart(id: string) {
    this.cartService.addToCart(id);
  }
}
