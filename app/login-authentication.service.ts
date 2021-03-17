import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthenticationService {

  

  constructor(private http: HttpClient) { }

  url="http://localhost:8080"
  // log : boolean = false;


  //call server to generate token
        generateToken(credentials:any){
          return this.http.post(`${this.url}/token`,credentials)
        }

     //for login user
  loginUser(token){
    localStorage.setItem("token",token)
    return true;
  }
  
       //to check user is logged in or not
   isloggedIn(){
   let token= localStorage.getItem("token"); 
   if(token==undefined || token==null){
     return false;
   } else{
     return true;
   }    
  }

         //to logout user
  logout(){
    localStorage.removeItem('token')
    return true;
  }

  getToken(){
    return localStorage.getItem("token")
  }


}
