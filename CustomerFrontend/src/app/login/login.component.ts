import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"; // reititin nappuloita varten
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(public router: Router, public authService: AuthService) {
    localStorage.clear();
    this.registrationForm = new FormGroup({
      email: new FormControl("gastrostaff@gmail.com", [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl("Lihapullat666", [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.registrationForm.value.email, this.registrationForm.value.password);
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }

}
