import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Basket, BasketDto, Item } from '../api/models';
import { LogincodeService } from './logincode.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url: any;
  url2: any;

  basketUrl: any;

  constructor(private httpClient: HttpClient, private logincodeService: LogincodeService) {
    this.url = "https://localhost:7011/api/items/";
    this.url2 = "https://localhost:7011/api/items/1";
    this.basketUrl = "https://localhost:7011/api/baskets/table/" + this.logincodeService.getText();
  }

  // itemiä varten on item interface, ja kaikille muille on ne myos api kansiossa
  // haetaan kaikki tuotteet
  get(): Observable<Item[]> {
    return this.httpClient.get(this.url)
      .pipe(
        map(response => {
          return response as Item[];
        })
      );
  }

  // haetaan id:n perusteella mika on urlissa
  getOne(): Observable<Item[]> {
    return this.httpClient.get(this.url2)
      .pipe(
        map(response => {
          return response as Item[];
        })
      );
  }

  // haetaan ostoskoriin tuotteet pöytänumeron perusteella
  getTable(): Observable<BasketDto[]> {
    return this.httpClient.get(this.basketUrl)
      .pipe(
        map(response => {
          return response as BasketDto[];
        })
      );
  }
}

