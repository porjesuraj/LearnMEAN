import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classroom-detail',
  templateUrl: './classroom-detail.component.html',
  styleUrls: ['./classroom-detail.component.css']
})
export class ClassroomDetailComponent implements OnInit {
  students = []
  constructor(private studentService : StudentService) { }

  ngOnInit(): void {
    this.getAllClass()
  }
  getAllClass()
  {
    this.studentService
    .getAllClasses()
    .subscribe(response => {
      if(response['status'] == 'success')
      {
        this.students = response['data']
        console.log(response['data'])
      }
      else
      {
        console.log(`error = ${response['error']}`)
      }
    })
    
  }

}
