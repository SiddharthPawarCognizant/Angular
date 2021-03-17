import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Movie } from './Interfaces/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {    

  constructor(private http: HttpClient) { }

  

  getMovieList() : Observable<Movie[]> {

    
    let headers = new HttpHeaders(
      {
        Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2aXNoYWwiLCJleHAiOjE2MTU5MzE0MjIsImlhdCI6MTYxNTkxMzQyMn0.15j9CojwEULvQNVmNuFu1SGq9gB07Etcm7sM_clgf7UmK4V5R_dEQ88_nmglU-fK4MUFp4oNELBgmJP1bTv9_A"
      }
    );
    return this.http.get<Movie[]>("http://localhost:8080/AdminList",{headers});
  }

  
  getMovieById(id :number): Observable<Movie> {
    // let headers = new HttpHeaders(
    //   {
    //     Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2aXNoYWwiLCJleHAiOjE2MTU5MzE0MjIsImlhdCI6MTYxNTkxMzQyMn0.15j9CojwEULvQNVmNuFu1SGq9gB07Etcm7sM_clgf7UmK4V5R_dEQ88_nmglU-fK4MUFp4oNELBgmJP1bTv9_A"
    //   }
    // );
    console.log("in service");
    console.log(id);
    return this.http.get<Movie>(`http://localhost:8080/editget/${id}`);

  }
  
  updateMovie(id : number, movie : Movie){
    // let headers = new HttpHeaders(
    //   {
    //     Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2aXNoYWwiLCJleHAiOjE2MTU5MzE0MjIsImlhdCI6MTYxNTkxMzQyMn0.15j9CojwEULvQNVmNuFu1SGq9gB07Etcm7sM_clgf7UmK4V5R_dEQ88_nmglU-fK4MUFp4oNELBgmJP1bTv9_A"
    //   }
    // );
    return this.http.put(`http://localhost:8080/edit/${id}`, movie);
  }

}
