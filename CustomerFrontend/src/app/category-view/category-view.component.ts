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
      new Category("assets/images/drinks.jpg", "Juomat", 2, "juomat"),
      new Category("assets/images/starters.jpg", "Alkuruuat", 3, "alkuruuat"),
      new Category("assets/images/desserts.jpg", "Jälkiruuat", 4, "jälkiruuat"),]
  }
  selectCategory(id: number) {
    if (id === 1) {
      this.router.navigate(['maincourseview'])
    }
    if (id === 2) {
      this.router.navigate(['drinksview'])
    }
  }
  ngOnInit(): void {
  }

}
