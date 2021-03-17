import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router:Router,private auth:AuthService) { }
 
  ngOnInit(): void {
  }

  username: String="";
  password: String="";
  error: String="";

  
  
  Check(){
    if(this.username=="a" && this.password=="a"){
      this.auth.login();  
          console.log(this.auth.loggedIn);
          this.router.navigate(['/reactive/2']);
    }
    else{
      this.error="Invalid credentials"
    }
  }


}
