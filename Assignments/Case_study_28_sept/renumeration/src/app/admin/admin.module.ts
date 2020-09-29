import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminService } from './admin.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AllFacultyComponent } from './all-faculty/all-faculty.component';
import { AllStudentComponent } from './all-student/all-student.component';
import { ClassListComponent } from './class-list/class-list.component';


@NgModule({
  declarations: [AllFacultyComponent, AllStudentComponent, ClassListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers : [AdminService]
})
export class AdminModule { }
