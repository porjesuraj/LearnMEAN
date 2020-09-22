import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';

  router : Router


  constructor(router:Router) {
    this.router = router
  }



 goToPage(page)
 {
   let url = ''
   switch(page)
   {
     
  case 1 : url = '/product-list'; break; 
  case 2 : url = '/product-add'; break;   
    
 default : break;

   }
   this.router.navigate([url])
 }

}
