import { UploadImageComponent } from './upload-image/upload-image.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminService } from './admin.service';
import { ProductAddComponent } from './product-add/product-add.component';


import { UserListComponent } from './user-list/user-list.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path : 'login',                component: LoginComponent},
  {path : 'signup',              component: SignupComponent},
  {path : 'dashboard',        component : DashboardComponent},
  {path : 'user-list',        component : UserListComponent},
  {path : 'product-list',  component : ProductListComponent},
  {path : 'product-add',     component: ProductAddComponent},
  {path : 'product-upload-image',     component: UploadImageComponent},

  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
