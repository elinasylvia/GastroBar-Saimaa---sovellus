import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LogincodeService } from '../services/logincode.service';
import { Router } from "@angular/router"; // reititin nappuloita varten

// vanhaa multi inputtia varten
// import { ViewChildren, ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {

  form: FormGroup;

  givenCode: any;
  ran: number;
  // vanhaa multi inputtia varten:
  // formInput = ['input1', 'input2', 'input3'];
  // @ViewChildren('formRow') rows: any;

  constructor(public router: Router, private logincodeService: LogincodeService) {
    // luodaan math randomilla asiakkaalle vielä erikseen asiakas koodi
    this.ran = Math.floor(Math.random() * (50000 - 1000) + 1000);

    // vanhaa multi inputtia varten:
    // this.form = this.toFormGroup(this.formInput);

    this.form = new FormGroup({
      txt1: new FormControl("", [
        Validators.required
      ]),
      txt2: new FormControl("", [
        Validators.required
      ]),
      txt3: new FormControl("", [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
  }

  get txt1() {
    return this.form.get('txt1');
  }

  get txt2() {
    return this.form.get('txt2');
  }

  get txt3() {
    return this.form.get('txt3');
  }

  onSubmit() {
    this.givenCode = this.form.value.txt1 + this.form.value.txt2 + this.form.value.txt3;
    // tarkastetaan oliko se joku oikeista koodeista
    if (this.givenCode === "234" || this.givenCode === "987" || this.givenCode === "563" || this.givenCode === "796") {
      // lähetetään koodi servicelle
      this.logincodeService.onSubmit(this.givenCode);
      // luodaan myös tälle asiakkaalle oma "asiakasnumero"
      this.logincodeService.getCustomerCode(this.ran);
      this.router.navigate(['item/1']);
    } else {
      // jos ei ollut oikea
      alert("Wrong code");
    }
    // tyhjennys toimii
    this.form.reset();
  }

  // multi inputin toimintalogiikkaa
  move(e: any, p: any, c: any, n: any) {
    var length = c.value.length;
    var maxlength = c.getAttribute('maxlength');
    if (length == maxlength) {
      if (n != "") {
        n.focus();
      }
    }
    if (e.key == "Backspace") {
      if (p != "") {
        p.focus();
      }

    }
  }

  /* vanhaa multi inputtia varten:

  // multi inputille
  toFormGroup(elements: any) {
    const group: any = {};
    elements.forEach((key: any) => {
      group[key] = new FormControl('', Validators.required);
    });
    return new FormGroup(group);
  }

  // multi inputille
  // logiikka form input focuksessa
  keyUpEvent(event: any, index: any) {
    let pos = index;
    if (event.keyCode === 8 && event.which === 8) {
      pos = index - 1;
    } else {
      pos = index + 1;
    }
    if (pos > -1 && pos < this.formInput.length) {
      this.rows._results[pos].nativeElement.focus();
    }
  }
*/

}
