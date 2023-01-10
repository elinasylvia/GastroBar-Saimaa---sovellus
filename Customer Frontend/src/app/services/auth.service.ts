import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';

/*Service kutsuu firebasea*/

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userEmail: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(public router: Router, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      let userEmail = user?.email as string;
      if (user != null) {
        this.userEmail.next(userEmail);
      }
    });
  }

  login(email: string, passwrd: string) {
    return this.afAuth.signInWithEmailAndPassword(email, passwrd)
      .then(result => {
        this.userEmail.next(email);
        this.router.navigate(['side']); // mennaan seuraavalle sivulle eli choose side komponenttiin
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password');
        } else {
          alert("Wrong email");
        }
        console.log(errorMessage);
      });
  }

  logout(): void {
    this.afAuth.signOut()
      .then(() => {
        this.userEmail.next(""); // toolbarista poistetaan kirjautuneen kayttajan tiedot
        this.router.navigate(['calculator']); // navigoidaan pois sivulta
      });
  }

  getLoggedInUser(): any {
    return this.afAuth.authState;
  }

  // huom. tämä ei nyt käytössä
  checkLoggedInUser() {
    // palauttaa kirjautuneen kayttajan spostin
    // eli se näkyy toolbarissa jos olet kirjautunut
    return this.userEmail;
  }

}
