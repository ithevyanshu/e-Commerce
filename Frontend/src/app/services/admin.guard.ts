import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs'
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class adminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLoggedIn() && this.authService.isAdmin()) {
      return true;
    } else {
      this.router.navigate(['auth/login']);
      return false;
    }
  }
};
