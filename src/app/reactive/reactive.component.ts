import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { regEX } from 'src/constat';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  rform:any;

  courses:string[]=['Angular','React','Java','Python','Flutter']

  constructor(private formbuild:FormBuilder) { }

  ngOnInit(): void {

    this.rform=this.formbuild.group(
      {
        firstname:["", [Validators.required, Validators.pattern(regEX)]],
        lastname:["",[Validators.required, Validators.pattern(regEX)]],
        email:["",[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{3}')]],
        phone:["",[Validators.required,Validators.pattern('[0-9]{10}')]],
        course:["",[Validators.required]],
        pass:["",[Validators.required,Validators.pattern('[A-Za-z0-9]{8,10}')]]
      }
    )
  }

  getvalues(){
    if(this.rform.invalid){
        alert("Enter all the details")
    }else{
      alert("form Submitted successfully")
      console.log(this.rform.value)
    }
    
  }

}
