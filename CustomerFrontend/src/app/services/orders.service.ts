import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OrderDto } from '../api/models';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  urlTableOne: any;
  urlTableTwo: any;
  urlTableThree: any;
  urlTableFour: any;

  constructor(private httpClient: HttpClient) {
    // haetaan kaikki sen koodin perusteella
    this.urlTableOne = "https://localhost:7011/api/orders/table/234";
    this.urlTableTwo = "https://localhost:7011/api/orders/table/563";
    this.urlTableThree = "https://localhost:7011/api/orders/table/987";
    this.urlTableFour = "https://localhost:7011/api/orders/table/796";
  }

  // haetaan ostoskoriin tuotteet pöytänumeron perusteella
  // 234 pöytä
  getTableOne(): Observable<OrderDto[]> {
    return this.httpClient.get(this.urlTableOne)
      .pipe(
        map(response => {
          return response as OrderDto[];
        })
      );
  }

  // haetaan ostoskoriin tuotteet pöytänumeron perusteella
  // 563 pöytä
  getTableTwo(): Observable<OrderDto[]> {
    return this.httpClient.get(this.urlTableOne)
      .pipe(
        map(response => {
          return response as OrderDto[];
        })
      );
  }

  // haetaan ostoskoriin tuotteet pöytänumeron perusteella
  // 987 pöytä
  getTableThree(): Observable<OrderDto[]> {
    return this.httpClient.get(this.urlTableOne)
      .pipe(
        map(response => {
          return response as OrderDto[];
        })
      );
  }

  // haetaan ostoskoriin tuotteet pöytänumeron perusteella
  // 796 pöytä
  getTableFour(): Observable<OrderDto[]> {
    return this.httpClient.get(this.urlTableOne)
      .pipe(
        map(response => {
          return response as OrderDto[];
        })
      );
  }
}
