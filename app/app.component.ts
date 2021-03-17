import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>{{message}}</h1>',
    // template: '<h1>Favourite Movie:{{favouriteMovie}}</h1>',

  

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Siddharth';
  message='Hello World';
  favouriteMovie='Lord of the Rings';
}
