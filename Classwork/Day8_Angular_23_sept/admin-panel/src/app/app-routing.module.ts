import { UploadImageComponent } from './upload-image/upload-image.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { AdminService } from './admin.service';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AdminService] },
  { path: 'user-list', component: UserListComponent, canActivate: [AdminService] },
  { path: 'product-list', component: ProductListComponent, canActivate: [AdminService] },
  { path: 'order-list', component: OrderListComponent, canActivate: [AdminService] },
  {path: 'product-upload-image', component: UploadImageComponent, canActivate: [AdminService] },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent},
  {path: 'product-add', component: ProductAddComponent, canActivate: [AdminService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
