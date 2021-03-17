import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginAuthenticationService } from './login-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private loginService:LoginAuthenticationService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newReq=req;
    let token=this.loginService.getToken;
    console.log("Interceptor",token)

   if(token!=null){
     newReq=newReq.clone({setHeaders:{Authorization:`Bearer ${token}`}})
   }
   return next.handle(newReq);




  }
}
