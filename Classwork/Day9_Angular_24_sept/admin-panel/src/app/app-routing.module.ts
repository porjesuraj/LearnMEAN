import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path : 'login',                component: LoginComponent},
  {path : 'signup',              component: SignupComponent},
  {path : 'user-list',        component : UserListComponent},
  {path : 'product-list',  component : ProductListComponent},
  {path: 'product-add',      component: ProductAddComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
