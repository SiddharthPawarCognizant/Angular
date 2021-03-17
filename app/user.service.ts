import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import {user} from './Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) {}

  getUsers() : Observable<any> {
    return this.http.get<any>("https://reqres.in/api/users?page=2");
  }
  
  createUser(user:user[]){
    return this.http.post('https://reqres.in/api/users?page=2',user);
  }

  register(){
   return this.http.get<user>('https://reqres.in');
  }

  
 
}
