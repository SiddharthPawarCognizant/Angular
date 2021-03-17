import { Component, OnInit } from '@angular/core';
import {Employee} from '../Interfaces/employee';
import {Department} from '../Interfaces/department';
import {Skill} from '../Interfaces/skill';
// import { parse } from 'path';


@Component({
  selector: 'app-edit-emp-template-driven',
  templateUrl: './edit-emp-template-driven.component.html',
  styleUrls: ['./edit-emp-template-driven.component.css']
})
export class EditEmpTemplateDrivenComponent implements OnInit {

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

  


  employee:Employee={
      id:1,
      name:'John',
      salary:10000,
      permanent:true,
      department:this.departments[1],
      skill:this.skills,
      dateOfBirth:new Date('12/31/2000')

  }
  
  myEmp(event:Event){
    this.employee.department=this.departments[(parseInt((<HTMLInputElement>event.target).value))-1];
  }

onSubmit(){
  console.log(this.employee)
}

  constructor() { }

  ngOnInit(): void {
   
  }

}
