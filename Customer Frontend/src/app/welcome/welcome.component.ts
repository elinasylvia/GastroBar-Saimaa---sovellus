import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// multi inputtia varten
import { ViewChildren, ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  // multi inputtia varten
  form: FormGroup;
  formInput = ['input1', 'input2', 'input3'];
  @ViewChildren('formRow') rows: any;

  // vanha:
  // codeForm: FormGroup;

  constructor() {
    // multi inputtia varten
    this.form = this.toFormGroup(this.formInput);

    /* vanha:
    this.codeForm = new FormGroup({
      code: new FormControl("", [
        Validators.required
      ])
    });*/

  }

  ngOnInit(): void {
  }

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



  onSubmit() {
    // testausta siita miten saataisiin koodi myos ostoskoriin
    /* vanha:
    if (this.codeForm.value.code === "563") {
      console.log('Table code is: ' + this.codeForm.value.code);
    }*/

    // multi inputille
    // ei toimi
    console.log('Table code is: ' + this.form);
    // tyhjennys toimii
    this.form.reset();
  }

}
