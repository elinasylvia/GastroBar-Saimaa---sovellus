import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Router } from "@angular/router"; // reititin nappuloita varten
import { LogincodeService } from '../services/logincode.service'; // haetaan loginissa annettu koodi

@Component({
  selector: 'app-item-page-one',
  templateUrl: './item-page-one.component.html',
  styleUrls: ['./item-page-one.component.css']
})
export class ItemPageOneComponent implements OnInit {

  itemData: any;

  // mikä oli alussa annettu koodi
  given: any;

  constructor(public itemService: ItemService, public router: Router, public logincodeService: LogincodeService) { }

  ngOnInit(): void {
    // lataa yksi tuote aina ngOnInitissä
    this.loadItem();

    // hae alussa annettu koodi
    this.given = this.logincodeService.getText();
  }

  // yhtä hakua varten
  loadItem(): void {
    this.itemService.getOne()
      .subscribe
      (data => {
        this.itemData = data;
        console.log(this.itemData);
        // this.itemData[0], this.itemData[1], this.itemData[2]
      });
  }

  // nappulaa painetaan mennään nyt vaan koriin
  send(): any {
    this.router.navigate(['cart']);
  }
}
