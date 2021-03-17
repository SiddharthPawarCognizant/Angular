import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginAuthenticationService } from './login-authentication.service';

@Injectable({
  providedIn: 'root'
})


export class AuthMovieGuard implements CanActivate {
  
  constructor(private loginservice:LoginAuthenticationService,private router : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.loginservice.isloggedIn())
      {
        return true;
      }
      this.router.navigate(['movie'])
      return false;
  }
  
}
