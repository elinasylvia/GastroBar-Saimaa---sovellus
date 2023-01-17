import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from '../api/models';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url: any;
  url2: any;

  constructor(private httpClient: HttpClient) {
    this.url = "https://localhost:7011/api/items/";
    this.url2 = "https://localhost:7011/api/items/1";
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
}

