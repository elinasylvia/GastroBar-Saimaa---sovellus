import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogincodeService {

  given: any;

  constructor() {
  }

  onSubmit(e: any) {
    // kirjoitettu koodi saadaan tänne jos se täsmää oikeisiin
    this.given = e;
    console.log(this.given);
  }

  getText(): string {
    return this.given;
  }

}
