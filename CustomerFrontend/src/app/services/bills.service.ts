import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { OrderDto, Order, Basket } from '../api/models';

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  urlTableOne: any;
  urlTableTwo: any;
  urlTableThree: any;
  urlTableFour: any;

  ordersUrl: any;
  basketsUrl: any;

  // deleteä varten
  val: any;

  constructor(private httpClient: HttpClient) {
    this.urlTableOne = "https://localhost:7011/api/orders/table/billing/234";
    this.urlTableTwo = "https://localhost:7011/api/orders/table/billing/563";
    this.urlTableThree = "https://localhost:7011/api/orders/table/billing/987";
    this.urlTableFour = "https://localhost:7011/api/orders/table/billing/796";

    this.ordersUrl = "https://localhost:7011/api/orders/";
  }

  // haetaan ostoskoriin tuotteet pöytänumeron perusteella
  // 234 pöytä
  getTableOne(): Observable<Order[]> {
    return this.httpClient.get(this.urlTableOne)
      .pipe(
        map(response => {
          return response as Order[];
        })
      );
  }

  // haetaan ostoskoriin tuotteet pöytänumeron perusteella
  // 563 pöytä
  getTableTwo(): Observable<Order[]> {
    return this.httpClient.get(this.urlTableTwo)
      .pipe(
        map(response => {
          return response as Order[];
        })
      );
  }

  // haetaan ostoskoriin tuotteet pöytänumeron perusteella
  // 987 pöytä
  getTableThree(): Observable<Order[]> {
    return this.httpClient.get(this.urlTableThree)
      .pipe(
        map(response => {
          return response as OrderDto[];
        })
      );
  }

  // haetaan ostoskoriin tuotteet pöytänumeron perusteella
  // 796 pöytä
  getTableFour(): Observable<Order[]> {
    return this.httpClient.get(this.urlTableFour)
      .pipe(
        map(response => {
          return response as OrderDto[];
        })
      );
  }

  // orderin luonti, muokattu basketista
  // ei toimi vielä
  create(order: Order): Observable<Order> {
    return this.httpClient.post(this.ordersUrl, order)
      .pipe(
        map(response => {
          return response as Order;
        })
      );
  }

  // updatea varten (staff puoli)
  // haetaan sen id:n arvo mitä siellä tilauksessa on
  onUpdateSubmit(e: any) {
    this.val = e;
  }

  // toimii
  // updatea varten (staff puoli)
  updateById(id: any, orri: any): Observable<Order[]> {
    return this.httpClient.put((this.ordersUrl + this.val), orri)
      .pipe(
        map(response => {
          return response as Order[];
        })
      );
  }

}
