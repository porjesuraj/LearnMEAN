import { StudentHomeComponent } from './student-home/student-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AuthService } from './auth/auth.service';
import { FacultyHomeComponent } from './faculty-home/faculty-home.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'  },
  {path : 'home', component : HomeComponent,canActivate: [AuthService]},
  {path : 'auth', loadChildren : () => import('./auth/auth.module').then(m => m.AuthModule)  },
  {path : 'faculty-home',
   component : FacultyHomeComponent,
   canActivate: [AuthService],
   children : [
    {path : 'faculty', loadChildren : () => import('./faculty/faculty.module').then(m => m.FacultyModule)}
   ]},

   {
     path: 'admin-home',
     component : AdminHomeComponent,
     canActivate : [AuthService],
     children : [
       {path : 'admin', loadChildren : () => import('./admin/admin.module').then(m => m.AdminModule)}
     ]
   },
   {
     path : 'student-home',
     component : StudentHomeComponent,
     canActivate : [AuthService],
     children : [
       {path : 'student', loadChildren : () => import('./student/student.module').then(m => m.StudentModule)}
     ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
