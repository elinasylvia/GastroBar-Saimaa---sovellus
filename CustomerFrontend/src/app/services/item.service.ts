import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url: any;

  constructor(private httpClient: HttpClient) {
    this.url = "https://localhost:7011/api/items";
  }

  get(): Observable<any> {
    return this.httpClient.get(this.url)
      .pipe(
        map(response => {
          return response;
        })
      );
  }
}

