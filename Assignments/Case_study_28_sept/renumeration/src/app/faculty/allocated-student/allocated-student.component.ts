import { FacultyService } from './../faculty.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allocated-student',
  templateUrl: './allocated-student.component.html',
  styleUrls: ['./allocated-student.component.css']
})
export class AllocatedStudentComponent implements OnInit {
  faculties = []
  constructor(private facultyService : FacultyService) { }

  ngOnInit(): void {
    this.loadFaculty()
  }
  loadFaculty()
  {
    this.facultyService
    .loadStudentCount()
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
