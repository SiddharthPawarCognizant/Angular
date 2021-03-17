import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../Interfaces/Movie';
import { LoginAuthenticationService } from '../login-authentication.service';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private movieService:MovieService, private route : ActivatedRoute, private router : Router,private loginService:LoginAuthenticationService) { }
  public movies!: Movie[];

  ngOnInit(): void {
    this.movieService.getMovieList().subscribe(data =>{
      this.movies= data;
      console.log(data);
     });

   
  }
    logoutUser(){
    this.loginService.logout()
    // location.reload();
    }

}
