import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogincodeService {

  constructor() { }

  onSubmit(e: any) {
    // kirjoitettu koodi saadaan tänne jos se täsmää oikeisiin
    console.log(e);
  }
}
