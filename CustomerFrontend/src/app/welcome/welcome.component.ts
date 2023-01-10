import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// vanhaa multi inputtia varten
// import { ViewChildren, ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  form: FormGroup;

  // vanhaa multi inputtia varten:
  // formInput = ['input1', 'input2', 'input3'];
  // @ViewChildren('formRow') rows: any;

  constructor() {
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
    // multi inputille
    var givenCode = this.form.value.txt1 + this.form.value.txt2 + this.form.value.txt3;
    // tarkastetaan oliko se joku oikeista koodeista
    if (givenCode === "234" || givenCode === "987" || givenCode === "563" || givenCode === "796")
      console.log('Table code is: ' + givenCode);
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
