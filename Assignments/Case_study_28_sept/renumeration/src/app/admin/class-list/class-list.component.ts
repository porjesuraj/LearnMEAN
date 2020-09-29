import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
 
  classrooms = []
  constructor(private adminService : AdminService) { }

  ngOnInit(): void {
    this.getAllClass()
  }

  getAllClass()
  {
    this.adminService
    .getAllClassroom()
    .subscribe(response => {
      if(response['status'] == 'success')
      {
        this.classrooms = response['data']
        console.log(response['data'])
      }
      else
      {
        console.log(`error = ${response['error']}`)
      }
    })
  }

  onDelete(classroom)
  {
    this.adminService
    .onDeleteClassroom(classroom['Id'])
    .subscribe(response => {
      if(response['status'] == 'success')
      {
        alert('successfully deleted student')
          this.getAllClass()
      }
      else
      {
        console.log(`error = ${response['error']}`)
      }
    })
  }
}
