import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { user } from '../Interfaces/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  newUser=[{
    "id":13,
    "email":"george.bluth@reqres.in",
    "first_name":"George",
    "last_name":"Bluth",
    "avatar":"https://reqres.in/img/faces/1-image.jpg"
  }]
  users!: user[];
  user: any;
  name:String="";
  result:String="";
  errorMessage: string="";
  error: boolean = false;
  constructor(private userService: UserService,private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  GetUser(){
    this.userService.getUsers().subscribe(res => {
      this.users = res.data;
      console.log(this.users);
    });
  }

PostUser(){
   console.log(this.userService.createUser(this.newUser).subscribe(response =>{
    console.log(response);
    this.user=response;
  }
   ))
   console.log(this.user);
}

Update(user:any){
  this.http.put("https://reqres.in/api/users?page=2"+"/"+this.user.id,JSON.stringify({
    "id":user.id,
    "email":"lindsay.ferguson@reqres.in",
    "first_name":"Lindsay",
    "last_name":"Ferguson",
    "avatar":"https://reqres.in/img/faces/8-image.jpg"
  }))
  .subscribe(res=>{
    let index=this.users.indexOf(user);
    console.log(res);
  })
}

Delete(users: user){
  this.http.delete("https://reqres.in/api/users?page=2"+"/"+users.id)
  .subscribe(res=>{
    let index=this.users.indexOf(users);
    this.users.splice(index,1);
  })

}

ErrorHandling(){
  this.userService.register().subscribe(res=>
    {
      console.log(res);
    },
    error=>{
      console.log("error caught");
      this.errorMessage="Error!";
      this.error=true;
    })

}

//    createUser(){
//     let url="http://httpbin.org/post"
//      this.http.post(url,{
//       name:this.name
//     }).toPromise().then((data:any)=>{
//       console.log(data)
//       console.log(JSON.stringify(data.json.name))
//       this.result=JSON.stringify(data.json.name);

//     })
//  }

}
