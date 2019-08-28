import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from '../services/Login.services';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class NeedAuthGuard implements CanActivate {

  constructor(private customerService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const redirectUrl = route['_routerState']['url'];

    if (this.customerService.isLoggedIn()) {
      return true;
    }
    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['/login'], {
          queryParams: {
            redirectUrl
          }
        }
      )
    );

    return false;
  }
}