import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // käytetään httpclienttiä basketin hakuun
// import { Observable, map } from 'rxjs';
// import { Item } from '../api/models';

@Injectable({
  providedIn: 'root'
})
export class LogincodeService {

  given: any;

  cust: any;

  constructor(private httpClient: HttpClient) {
    // haetaan pöytänumeron perusteella
  }

  // tervetuloa sivulla annetun koodin hakua varten
  onSubmit(e: any) {
    // kirjoitettu koodi saadaan tänne jos se täsmää oikeisiin
    localStorage.setItem('given', e);
    this.given = e;
    console.log(this.given);
  }

  // tervetuloa sivulla annetun koodin lähetystä varten
  getText(): string {
    return localStorage.getItem('given') ?? '';
    return this.given;
  }

  // asiakas koodin hakua varten
  getCustomerCode(e: any) {
    // kirjoitettu koodi saadaan tänne jos se täsmää oikeisiin
    this.cust = e;
    console.log(this.cust);
  }

  // asiakas koodin lähetystä varten
  sendCustomerCode(): string {
    return this.cust;
  }
}
