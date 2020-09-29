import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ClassroomDetailComponent } from './classroom-detail/classroom-detail.component';
import { FacultyDetailComponent } from './faculty-detail/faculty-detail.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { StudentService } from './student.service';


@NgModule({
  declarations: [ClassroomDetailComponent, FacultyDetailComponent, UpdateProfileComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers : [StudentService]
})
export class StudentModule { }
