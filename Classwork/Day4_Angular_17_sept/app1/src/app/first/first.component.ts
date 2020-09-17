import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
 
  firstName = 'suraj'
  lastName = 'porje'
  person = {name : 'web developer',address : 'nasik',phone : 9378383833,email : 'dev@gmail.com'}
  constructor() { }

  ngOnInit(): void {
  }

}
