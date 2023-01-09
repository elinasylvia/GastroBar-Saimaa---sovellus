import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-choose-side',
  templateUrl: './choose-side.component.html',
  styleUrls: ['./choose-side.component.css']
})
export class ChooseSideComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  customers() {
    this.router.navigate(['welcome']);
  }

}
