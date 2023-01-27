import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-main-course-view',
  templateUrl: './main-course-view.component.html',
  styleUrls: ['./main-course-view.component.css']
})
export class MainCourseViewComponent implements OnInit {
  public products: Product[] = [];
  constructor(productService: ProductService) {
    this.products = productService.getData();
  }
  ngOnInit(): void {
  }

}
