import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GastroBarSaimaa';
  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
  }


  /**
   * Check if the router url contains the specified route
   *
   * @param {string} route
   * @returns
   * @memberof MyComponent
   */
  hasRoute(routes: string[]) {
    return routes.includes(this.router.url);
  }
}
