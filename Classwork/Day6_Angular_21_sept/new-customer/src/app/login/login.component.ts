import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 email = ''
 password = ''
  constructor() { }

  ngOnInit(): void {
  }

  OnSave()
  {
    console.log(`email : ${this.email}`)
    console.log(`password : ${this.password}`)
  }
  OnCancel()
  {
    this.email = ''
    this.password = ''
    console.log(`email : ${this.email}`)
    console.log(`password : ${this.password}`)

  }

}
