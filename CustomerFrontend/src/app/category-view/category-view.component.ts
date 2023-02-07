import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {

  public categories: Category[] = [];

  constructor(public router: Router) {
    this.categories = [
      new Category("assets/images/maincourse-view.jpg", "Pääruuat", 1, "pääruuat"),
      new Category("assets/images/drinks.jpg", "Juomat", 2, "juomat")]
  }
  selectCategory(id: number) {
    if (id === 1) {
      this.router.navigate(['maincourseview'])
    }
  }
  ngOnInit(): void {
  }

}
