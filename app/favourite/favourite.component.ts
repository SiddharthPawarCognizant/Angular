import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FavouritesService } from '../favourites.service';
import { Movie } from '../Interfaces/Movie';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor(private favouritesService:FavouritesService,private route:ActivatedRoute,private router:Router) { }
  favoriteList : Movie[] = [];
  // movieId : number = parseInt(this.route.snapshot.paramMap.get('id')!);
  username:String="vishal";
  

  ngOnInit(): void {
      
    this.favouritesService.getFavoritesByUsername(this.username).subscribe(
      data => {console.log(data); this.favoriteList = data}
    );

  }

  
  refreshPage(){

    this.favouritesService.getFavoritesByUsername(this.username).subscribe(
      data => {console.log(data); this.favoriteList = data}
    );

  }

  deleteFavorites(id : Number){
    console.log(id);
    this.favouritesService.deleteFromFavorites(id, this.username).subscribe(
      data => {console.log(data); this.refreshPage()}

    );

  }

  
 

  }

 

