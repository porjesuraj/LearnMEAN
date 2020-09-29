import { UpdateProfileComponent } from './../faculty/update-profile/update-profile.component';
import { FacultyDetailComponent } from './faculty-detail/faculty-detail.component';
import { ClassroomDetailComponent } from './classroom-detail/classroom-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'classroom-detail', component : ClassroomDetailComponent},
  {path: 'faculty-detail', component : FacultyDetailComponent},
  {path: 'update-profile', component : UpdateProfileComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
