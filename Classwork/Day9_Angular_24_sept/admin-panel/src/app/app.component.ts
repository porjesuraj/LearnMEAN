import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-panel';

  logout()
  {
    /* sessionStorage['token'] = ''
    sessionStorage['firstName'] = ''
    sessionStorage['lastName'] = '' */
      sessionStorage.removeItem('token')   
sessionStorage.removeItem('firstName')
sessionStorage.removeItem('lastName')


  }
}
