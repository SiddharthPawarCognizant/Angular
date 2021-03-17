import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  
  addToFavorites(id : string, username : String){
    return this.http.post(`http://localhost:8080/add-to-favorites/${username}`, id);
  }

  constructor(private http : HttpClient) { }


  getFavoritesByUsername(username : String){
    return this.http.get<any>(`http://localhost:8080/view-fav/${username}`);
  }


  
  deleteFromFavorites(id : Number, username : String){
    return this.http.delete(`http://localhost:8080/delete/${username}/${id}`)

  }
}
