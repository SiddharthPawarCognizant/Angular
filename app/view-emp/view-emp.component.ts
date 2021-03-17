import { Component, OnInit } from '@angular/core';
import {Employee} from '../Interfaces/employee';
import {Department} from '../Interfaces/department';
import {Skill} from '../Interfaces/skill';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit {
  dept:Department={
    Id:1,
    name:'Payroll'
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
