import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthentication } from './hardcoded-authentication';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(
    private hardcodedAuthenticationService: HardcodedAuthentication,
    private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.hardcodedAuthenticationService.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);

    return false;
  }
}