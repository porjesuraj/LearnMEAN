import { ClassroomDetailsComponent } from './classroom-details/classroom-details.component';
import { AllocatedStudentComponent } from './allocated-student/allocated-student.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path : 'allocated-student', component : AllocatedStudentComponent},
  {path : 'classroom-details', component : ClassroomDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultyRoutingModule { }
