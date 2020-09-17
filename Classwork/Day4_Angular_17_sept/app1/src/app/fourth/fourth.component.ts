import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {
 boytype = 1
 type = 0 
  constructor() { }

  ngOnInit(): void {
  }
  changeColor(type){ this.boytype = type}

}
