import { ClassListComponent } from './class-list/class-list.component';
import { AllStudentComponent } from './all-student/all-student.component';
import { AllFacultyComponent } from './all-faculty/all-faculty.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
    {path : 'all-faculty',component: AllFacultyComponent},
    {path : 'all-student',component : AllStudentComponent },
    {path : 'all-class', component: ClassListComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
