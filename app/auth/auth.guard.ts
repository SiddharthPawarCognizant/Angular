import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { LoginAuthenticationService } from '../login-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router,private auth:AuthService,private login : LoginAuthenticationService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.auth.isLoggedIn()==true){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }

    // if(this.login.loggedIn() == true){

    //   return true;

    // }
    // else{

    //   this.router.navigate(['/loginmovie']);
    //   return false;

    // }
  }
  
}
