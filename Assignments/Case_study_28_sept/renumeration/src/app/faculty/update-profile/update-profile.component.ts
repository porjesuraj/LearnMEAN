import { FacultyService } from './../faculty.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  FirstName = ''
  LastName = ''
  Address = ''
  Contact = 1
  Email = ''
  Password = ''
  Experience = 1
  Age = 1
  constructor(private facultyService : FacultyService,
              private router : Router) { }

  ngOnInit(): void {
  }

  updateProfile()
  {
       this.facultyService
       .updateFacultyProfile(this.FirstName,this.LastName,this.Address,this.Contact,this.Email,this.Password,this.Experience,this.Age)
        .subscribe(response => {
          if(response['status'] == 'success')
          {
            alert('profile successfully updated')
            this.router.navigate(['/faculty-home/'])
          }
        })
      }
}
