import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  
  addToFavorites(id : string, username : String){
    let headers = new HttpHeaders(
      {
        Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2aXNoYWwiLCJleHAiOjE2MTYwMTg1ODIsImlhdCI6MTYxNjAwMDU4Mn0.QluZlVRgmZrNUxenxuY3vrTP9rhvyvEceaUy1quT2BG-j_VX04sstrq7gwTNLl-cW6pGTaDss4muOpXjUr6T6w"
      }
    ); 
    return this.http.post(`http://localhost:8080/add-to-favorites/${username}`, id,{headers});
  }

  constructor(private http : HttpClient) { }


  getFavoritesByUsername(username : String){
    
    let headers = new HttpHeaders(
      {
        Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2aXNoYWwiLCJleHAiOjE2MTYwMTg1ODIsImlhdCI6MTYxNjAwMDU4Mn0.QluZlVRgmZrNUxenxuY3vrTP9rhvyvEceaUy1quT2BG-j_VX04sstrq7gwTNLl-cW6pGTaDss4muOpXjUr6T6w"
      }
    ); 
    
    return this.http.get<any>(`http://localhost:8080/view-fav/${username}`,{headers});
  }


  
  deleteFromFavorites(id : Number, username : String){
    let headers = new HttpHeaders(
      {
        Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2aXNoYWwiLCJleHAiOjE2MTYwMTg1ODIsImlhdCI6MTYxNjAwMDU4Mn0.QluZlVRgmZrNUxenxuY3vrTP9rhvyvEceaUy1quT2BG-j_VX04sstrq7gwTNLl-cW6pGTaDss4muOpXjUr6T6w"
      }
    ); 
    
    return this.http.delete(`http://localhost:8080/delete/${username}/${id}`,{headers})

  }
}
