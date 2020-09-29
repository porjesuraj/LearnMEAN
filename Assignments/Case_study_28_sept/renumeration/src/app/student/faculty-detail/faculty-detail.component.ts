import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty-detail',
  templateUrl: './faculty-detail.component.html',
  styleUrls: ['./faculty-detail.component.css']
})
export class FacultyDetailComponent implements OnInit {

  constructor(private studentService : StudentService) { }
  facultys = []
  ngOnInit(): void {
    this.getAllFaculty()
  }

  getAllFaculty()
  {
    this.studentService
    .getAllFaculty()
    .subscribe(response => {
      if(response['status'] == 'success')
      {
        this.facultys = response['data']
        console.log(response['data'])
      }
      else
      {
        console.log(`error = ${response['error']}`)
      }
    })
    
  }
}
