import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  courses:string[]=['Python','Angular','React','Node','Java']

  constructor() { }

  ngOnInit(): void {
  }

  showData(value:any){
    console.log(value)
  }

  alert(A:any){
    if(A){
      alert("Please enter all details to submit")
    }else{
      alert("Details Submitted Succesfully")
    }
  }
}
