import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  boxType = 2
  category = 2
  butoon = 2
  constructor() { }

  ngOnInit(): void {
  }

}
