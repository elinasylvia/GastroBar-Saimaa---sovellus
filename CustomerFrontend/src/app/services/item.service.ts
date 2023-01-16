import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from '../api/models';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url: any;

  constructor(private httpClient: HttpClient) {
    this.url = "https://localhost:7011/api/items/";
  }

  // itemiä varten on item interface, ja kaikille muille on ne myos api kansiossa
  get(): Observable<Item[]> {
    return this.httpClient.get(this.url)
      .pipe(
        map(response => {
          return response as Item[];
        })
      );
  }
}

