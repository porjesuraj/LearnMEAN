import { FacultyService } from './faculty.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyRoutingModule } from './faculty-routing.module';
import { AllocatedStudentComponent } from './allocated-student/allocated-student.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClassroomDetailsComponent } from './classroom-details/classroom-details.component';


@NgModule({
  declarations: [ AllocatedStudentComponent, ClassroomDetailsComponent],
  imports: [
    CommonModule,
    FacultyRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers : [FacultyService]
})
export class FacultyModule { }
