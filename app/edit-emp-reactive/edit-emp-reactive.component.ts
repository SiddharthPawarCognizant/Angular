import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Department } from '../Interfaces/department';
import { Employee } from '../Interfaces/employee';
import { Skill } from '../Interfaces/skill';
import { ActivatedRoute } from "@angular/router";
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-emp-reactive',
  templateUrl: './edit-emp-reactive.component.html',
  styleUrls: ['./edit-emp-reactive.component.css']
})
export class EditEmpReactiveComponent implements OnInit {
  // employee!: Employee;
  constructor(private route : ActivatedRoute, private employeeService : EmployeeService) { }
  //  employeeId=parseInt(this.route.snapshot.paramMap.get('id'));
   
  //   employee = this.employeeService.getEmployee(this.employeeId);


    employeeId= 2;
     employee = this.employeeService.getEmployee(this.employeeId);
  ngOnInit(): void {
    

    console.log(this.employeeId);
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

  


  // employee:Employee={
  //     id:1,
  //     name:'John',
  //     salary:10000,
  //     permanent:true,
  //     department:this.departments[0],
  //     skill:this.skills,
  //     dateOfBirth:new Date('12/31/2000')

  // }
  
  // myEmp(event:Event){
  //   this.employee.department=this.departments[(parseInt((<HTMLInputElement>event.target).value))-1];
  // }

  // name = new FormControl(this.employee.name);

            empForm = new FormGroup({
              
              name : new FormControl(this.employee.name,[
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(8)
              ]),
          
              salary :  new FormControl(this.employee.salary,[
              Validators.required
              ]),
          
              department :  new FormControl(this.employee.department.name),
          
              permanent: new FormControl(this.employee.permanent),
            });
  
              
              console(){
                console.log(this.empForm.value);
               }

      
          get salary() {
            return this.empForm.get('salary');
          }
          get name() {
            return this.empForm.get('name');
          }


}
