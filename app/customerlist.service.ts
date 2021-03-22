import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerlistService {

  constructor(private http: HttpClient) { }

  getCustomerMovieList() : Observable<any> {
    let headers = new HttpHeaders(
      {
        Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2aXNoYWwiLCJleHAiOjE2MTYwMTg1ODIsImlhdCI6MTYxNjAwMDU4Mn0.QluZlVRgmZrNUxenxuY3vrTP9rhvyvEceaUy1quT2BG-j_VX04sstrq7gwTNLl-cW6pGTaDss4muOpXjUr6T6w"
      }
    ); 
    return this.http.get<any>("http://localhost:8080/CustList",{headers});
  }

  // deletefavourites(username: any,id: any){
  //   return this.http.delete(`http://localhost:8080/delete/${username}/${id}`)
  // }
}
