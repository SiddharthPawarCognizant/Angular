import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-emp-form-builder',
  templateUrl: './edit-emp-form-builder.component.html',
  styleUrls: ['./edit-emp-form-builder.component.css']
})
export class EditEmpFormBuilderComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
      empForm = this.fb.group({
      name:['John',Validators.required],
      salary:[10000,Validators.required],
      permanent:[true],
      Skills:this.fb.array([
        this.fb.group({
          skillId :[1],
          skillName : ["HTML"]
        })
      ])
    })

    get Skills(){
      return this.empForm.get('Skills') as FormArray;
    }

    addSkill(){
      let itemLength = this.Skills.length;
        const newSkill = this.fb.group({
          skillId :[itemLength + 1],
          skillName : [""]
        })
        this.Skills.push(newSkill);
      }



    console(){
      console.log(this.empForm.value);

     }




  ngOnInit(): void {
  }

}
