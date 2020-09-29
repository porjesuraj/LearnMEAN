import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.css']
})
export class AllStudentComponent implements OnInit {

  constructor(private adminService : AdminService) { }

 students = []
  ngOnInit(): void {
    this.getAllStudent()
  }

  getAllStudent()
  {
    this.adminService
    .getAllStudent()
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

  onDelete(student)
  {
    this.adminService
    .onDeleteStudent(student['Id'])
    .subscribe(response => {
      if(response['status'] == 'success')
      {
        alert('successfully deleted student')
          this.getAllStudent()
      }
      else
      {
        console.log(`error = ${response['error']}`)
      }
    })
  }
}
