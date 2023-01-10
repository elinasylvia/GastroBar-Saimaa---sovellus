import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from "@angular/router";

/*Reitinvalvoja admin*/

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // täällä pitää myös esitellä router ja authservice, jotta päästään niihin käsiksi
  constructor(public router: Router, public authService: AuthService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authService.getLoggedInUser().pipe(
      take(1),
      map(authState => Boolean(authState)),
      tap(auth => !auth ? this.router.navigate(['login']) : true)
    )
    // return false; // ei päästä sisään kun false
  }

}
