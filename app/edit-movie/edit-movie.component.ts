import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../Interfaces/Movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor(private movieService:MovieService,private route:ActivatedRoute,private router:Router) { }
  movieId : number;


  
  movie:Movie;

  ngOnInit(): void {
     this.movieId=this.route.snapshot.params['id'];
    this.movieService.getMovieById(this.movieId).subscribe(data => 
      {console.log(data);console.log(this.movieId);this.movie = data}) ;

  }
  onSubmit(){
    this.movieService.updateMovie(this.movieId, this.movie)
    .subscribe(data => 
              {console.log(data);
                this.router.navigate(['movie']);
              });

  }
  
  

}
