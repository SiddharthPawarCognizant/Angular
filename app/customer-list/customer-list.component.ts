import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerlistService } from '../customerlist.service';
import { FavouritesService } from '../favourites.service';
import { Movie } from '../Interfaces/Movie';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private favouritesService:FavouritesService,private customerlistService:CustomerlistService,private route:ActivatedRoute,private router:Router) { }
  public movies!: Movie[];
  // movieId : number;
   username:String="vishal";

  ngOnInit(): void {

    this.customerlistService.getCustomerMovieList().subscribe(data =>{
      this.movies= data;
      console.log(data);
     });
  }

  addToFavorites(id : Number){
    console.log(id);
    let movieId = '';
    movieId += id;
    this.favouritesService.addToFavorites(movieId, this.username).subscribe(
      data => {console.log(data)}

    );
  }

  
  

}
