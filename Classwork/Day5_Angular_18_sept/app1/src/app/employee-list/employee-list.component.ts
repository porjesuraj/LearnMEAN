import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

 

  employees = [
    {
    id: 1,
    name : 'emp1',
    department : 'computers',
    job : 'developer',
    salary : 10.5
  },
  {
    id: 2,
    name : 'emp2',
    department : 'computers',
    job : 'tester',
    salary : 10.5
  },
  {
    id: 3,
    name : 'emp3',
    department : 'computers',
    job : 'architect',
    salary : 14
  },
  {
    id: 4,
    name : 'emp4',
    department : 'computers',
    job : 'db-developer',
    salary : 14
  }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
