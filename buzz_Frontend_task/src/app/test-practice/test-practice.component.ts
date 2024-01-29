import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-test-practice',
  templateUrl: './test-practice.component.html',
  styleUrls: ['./test-practice.component.css']
})
export class TestPracticeComponent implements OnInit{
  testForm:any;
  constructor(
    private fb:FormBuilder,
    private userservice:UserService
  ){

  }
  ngOnInit(){
    this.testForm=this.fb.group({
     name:['',
    //  [Validators.required]
    ],
     age:['']
    })

  }

  submitForm(){
    console.log("form submitted",this.testForm.value)
    this.userservice.postTestData(this.testForm.value).subscribe((response:any)=>{
      console.log(response,"frrefer")
    },
    (error:any)=>console.log(error),
    ()=>console.log("completed"))
  }

  editForm(){
    this.userservice.editTestForm(this.testForm).subscribe(
      (res:any)=>{
        console.log("response",res)
      },
      (err:any)=>console.log("Error occured"),
      ()=>console.log("Completed")
    )
  }
}
