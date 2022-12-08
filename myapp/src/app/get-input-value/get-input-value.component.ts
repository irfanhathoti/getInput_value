import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-input-value',
  templateUrl: './get-input-value.component.html',
  styleUrls: ['./get-input-value.component.css']
})
export class GetInputValueComponent implements OnInit {

  title:string = "Get Input Value";
  displayValue:string = ''


  getValue(value:string){
    console.log(value)
  }



 


  constructor() { }

  ngOnInit(): void {
  }

}
