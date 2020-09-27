import { AuthService } from './auth/auth.service';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //default route
  {path: '', redirectTo : '/auth/login', pathMatch: 'full' },
  {path: 'home',
   component: HomeComponent,
   canActivate : [AuthService],
   children : [
     { path : 'user', loadChildren : () => import('./user/user.module').then(m => m.UserModule)},
     { path : 'product', loadChildren : () => import('./product/product.module').then( m => m.ProductModule)},
     {path : 'order', loadChildren : () => import('./order/order.module').then(m => m.OrderModule)}
   ]
  },
  /* {path : , component} */
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
