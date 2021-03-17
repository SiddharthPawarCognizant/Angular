import { Component, OnInit } from '@angular/core';
import { Department } from '../Interfaces/department';
import { Employee } from '../Interfaces/employee';
import { Skill } from '../Interfaces/skill';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  searchKey:String="";
  
  filteredEmployees:Employee[]=[]

  search(){
     this.filteredEmployees=this.employeeList.filter(res=>{
     return res.name.toLowerCase().match(this.searchKey.toLowerCase());
     });
  }

  skill1 : Skill = {
    id : 1,
    name : 'HTML'  
}

 skill2 : Skill = {
    id : 1,
    name : 'CSS'  
}

 skill3 : Skill = {
    id : 1,
    name : 'JavaScript'  
}

 skills : Skill[] = [this.skill1, this.skill2, this.skill3];

  
  departments :Department[] =[
    {Id: 1, name: "Payroll" },
    { Id: 2, name: "Internal" },
    { Id: 3, name: "HR" }
  ]

  employee1:Employee={
    id:1,
    name:'John',
    salary:10000,
    permanent:true,
    department:this.departments[1],
    skill:this.skills,
    dateOfBirth:new Date('12/31/2000')
}

employee2:Employee={
  id:2,
  name:'Smith',
  salary:15000,
  permanent:false,
  department:this.departments[2],
  skill:this.skills,
  dateOfBirth:new Date('05/18/1990')
}

employee3:Employee={
  id:3,
  name:'Shreyas',
  salary:20000,
  permanent:true,
  department:this.departments[1],
  skill:this.skills,
  dateOfBirth:new Date('07/20/2001')
}

employee4:Employee={
  id:4,
  name:'Siddharth',
  salary:25000,
  permanent:true,
  department:this.departments[3],
  skill:this.skills,
  dateOfBirth:new Date('05/10/1998')
}


employee5:Employee={
  id:5,
  name:'Harshal',
  salary:22000,
  permanent:false,
  department:this.departments[2],
  skill:this.skills,
  dateOfBirth:new Date('01/15/2002')
}

  employeeList:Employee[]=[this.employee1,this.employee2,
    this.employee3,this.employee4,this.employee5
  ]

  

  constructor() { }

  ngOnInit(): void {
  }

}
