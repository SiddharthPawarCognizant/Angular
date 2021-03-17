import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Employee} from '../Interfaces/employee';
import {Department} from '../Interfaces/department';
import {Skill} from '../Interfaces/skill';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 
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


 dept:Department={
  Id:1,
  name:'Payroll'
}

  employee:Employee={
      id:1,
      name:'John',
      salary:10000,
      permanent:true,
      department:this.dept,
      skill:this.skills,
      dateOfBirth:new Date('12/31/2000')

  }
  


  constructor() { }

  ngOnInit(): void {
    

    }
  }


