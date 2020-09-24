import { PreviewComponent } from './preview/preview.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'order-history',component :OrderHistoryComponent },
  {path: 'preview',component : PreviewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
