import { Component } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  data:any = [{
    "name":"vishnu",
    "designation":"software Engineer",
    "salary":25000
  },
  {
    "name":"jobin",
    "designation":"software Engineer",
    "salary":25000
  },
  {
    "name":"yethi",
    "designation":"software Engineer",
    "salary":25000
  }
  ,
  {
    "name":"yedu",
    "designation":"software Engineer",
    "salary":25000
  }
  ]
}
