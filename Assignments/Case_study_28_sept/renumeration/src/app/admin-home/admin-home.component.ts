import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  LogOut()
  {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('firstName')
    sessionStorage.removeItem('lastName')

    this.router.navigate(['/auth/login'])
  }

}
