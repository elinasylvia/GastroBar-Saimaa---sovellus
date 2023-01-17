import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // käytetään httpclienttiä basketin hakuun
import { Observable, map } from 'rxjs';
import { Item } from '../api/models';

@Injectable({
  providedIn: 'root'
})
export class LogincodeService {

  given: any;

  basketUrl: any;

  constructor(private httpClient: HttpClient) {
    // haetaan pöytänumeron perusteella
    this.basketUrl = "https://localhost:7011/api/baskets/table/234";
  }

  // tervetuloa sivulla annetun koodin hakua varten
  onSubmit(e: any) {
    // kirjoitettu koodi saadaan tänne jos se täsmää oikeisiin
    this.given = e;
    console.log(this.given);
  }

  // tervetuloa sivulla annetun koodin lähetystä varten
  getText(): string {
    return this.given;
  }

  // haetaan ostoskoriin tuotteet pöytänumeron perusteella
  getTable(): Observable<Item[]> {
    return this.httpClient.get(this.basketUrl)
      .pipe(
        map(response => {
          return response as Item[];
        })
      );
  }
}
