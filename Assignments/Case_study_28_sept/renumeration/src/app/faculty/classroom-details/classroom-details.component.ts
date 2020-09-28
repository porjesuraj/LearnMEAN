import { FacultyService } from './../faculty.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classroom-details',
  templateUrl: './classroom-details.component.html',
  styleUrls: ['./classroom-details.component.css']
})
export class ClassroomDetailsComponent implements OnInit {

  faculties = []
  constructor(private facultyService : FacultyService) { }

  ngOnInit(): void {
    this.loadClassroomDetails()
  }

  loadClassroomDetails()
  {
    this.facultyService
    .loadClassroomDetails()
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
}
