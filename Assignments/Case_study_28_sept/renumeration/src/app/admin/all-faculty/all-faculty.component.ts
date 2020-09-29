import { Router } from '@angular/router';
import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-faculty',
  templateUrl: './all-faculty.component.html',
  styleUrls: ['./all-faculty.component.css']
})
export class AllFacultyComponent implements OnInit {
 
    /* Id = 1
    FirstName = ''
    LastName = ''
    Address = ''
    Contact = 1
    Email = ''
    Password = ''
    Experience = 1
    Age = 1 */
    faculties = []

  constructor(private adminService : AdminService,
              private router : Router) { }

  ngOnInit(): void {
    this.getAllFaculty()
  }

  getAllFaculty()
  {
    this.adminService
    .getAllFaculty()
    .subscribe(response => {
      if(response['status'] == 'success')
      {
        this.faculties = response['data']
      }
      else
      {
        console.log(`error = ${response['error']}`)
      }
    })
  }
 
  onDelete(faculty)
  {
    this.adminService
    .onDeleteFaculty(faculty['Id'])
    .subscribe(response => {
      if(response['status'] == 'success')
      {
        alert('successfully deleted faculty')
          this.getAllFaculty()
      }
      else
      {
        console.log(`error = ${response['error']}`)
      }
    })
  }
  /* onEdit(faculty)
  {
    this.router.navigate(['faculty-home/faculty/update-profile'],{ queryParams: { Id: faculty['Id'] } })
  } */
}

