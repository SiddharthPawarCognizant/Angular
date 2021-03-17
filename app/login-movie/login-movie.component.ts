import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAuthenticationService } from '../login-authentication.service';

@Component({
  selector: 'app-login-movie',
  templateUrl: './login-movie.component.html',
  styleUrls: ['./login-movie.component.css']
})
export class LoginMovieComponent implements OnInit {

  constructor(private loginService : LoginAuthenticationService, private router : Router) { }

  credentials={
    username:'',
    password:''
  }

  ngOnInit(): void {
  }

  onsubmit(){
    console.log("in onsubmit");
    if((this.credentials.username!='' && this.credentials.password!='') && 
    (this.credentials.username!=null && this.credentials.password!=null))
    {
     console.log("u have to submit the form"); 
     this.loginService.generateToken(this.credentials).subscribe(
       (response:any)=>{
             this.loginService.loginUser(response.token)
             window.location.href="movie"
       },error=>{
           console.log(error);
       }
     )
    }else{
      console.log("fields are empty!!");
    }
  }

}
