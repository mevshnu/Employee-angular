import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  name=""
  designation=""
  salary=""

  readValue=()=>
  {
  let data:any = {
    "name":this.name,
    "designation":this.designation,
    "salary":this.salary
  } 
  console.log(data)
}
}
