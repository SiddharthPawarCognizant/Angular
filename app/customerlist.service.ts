import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerlistService {

  constructor(private http: HttpClient) { }

  getCustomerMovieList() : Observable<any> {
    return this.http.get<any>("http://localhost:8080/CustList").pipe();
  }

  deletefavourites(username,id){
    return this.http.delete(`http://localhost:8080/delete/${username}/${id}`)
  }
}
