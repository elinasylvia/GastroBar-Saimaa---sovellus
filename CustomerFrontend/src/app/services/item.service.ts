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
  url3: any;

  basketUrl: any;
  customerUrl: any;

  // postia varten
  basketPost: any;

  // deleteä varten
  val: any;

  constructor(private httpClient: HttpClient, private logincodeService: LogincodeService) {
    this.url = "https://localhost:7011/api/items/";

    this.url2 = "https://localhost:7011/api/items/1";
    this.url3 = "https://localhost:7011/api/items/2";

    // jos haettaisiin pöytänumeron perusteella
    this.basketUrl = "https://localhost:7011/api/baskets/table/" + this.logincodeService.getText();

    // haetaan tilaus asiakasnumeron perusteella
    this.customerUrl = "https://localhost:7011/api/baskets/table/customer/" + this.logincodeService.sendCustomerCode();

    // postia varten
    this.basketPost = "https://localhost:7011/api/baskets/";

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

  // haetaan id:n perusteella mika on urlissa, item 1
  getOne(): Observable<Item[]> {
    return this.httpClient.get(this.url2)
      .pipe(
        map(response => {
          return response as Item[];
        })
      );
  }

  // haetaan id:n perusteella mika on urlissa, item 2
  getTwo(): Observable<Item[]> {
    return this.httpClient.get(this.url3)
      .pipe(
        map(response => {
          return response as Item[];
        })
      );
  }

  // haetaan ostoskoriin tuotteet asiakasnumeron perusteella
  getTable(): Observable<BasketDto[]> {
    return this.httpClient.get(this.customerUrl)
      .pipe(
        map(response => {
          return response as BasketDto[];
        })
      );
  }

  // poistoa varten (ostoskori)
  // haetaan sen id:n arvo mitä siellä korissa on
  onSubmit(e: any) {
    this.val = e;
  }


  // poistoa varten (ostoskorissa)
  deleteById(id: any): Observable<Basket[]> {
    return this.httpClient.delete(this.basketPost + this.val)
      .pipe(
        map(response => {
          return response as Basket[];
        })
      );
  }

  // luodaan Basket
  create(basket: Basket): Observable<Basket> {
    return this.httpClient.post(this.basketPost, basket)
      .pipe(
        map(response => {
          return response as Basket;
        })
      );
  }

}

