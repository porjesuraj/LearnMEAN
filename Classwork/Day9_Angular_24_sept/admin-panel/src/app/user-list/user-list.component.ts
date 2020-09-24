import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

 users = []
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userList()
  }

  userList()
  {
    this.userService.userList()
    .subscribe(response => {
       if(response['status'] == 'success')
       {
         this.users = response['data']
       }

    })

  }
  deleteUser(user)
  {
    this.userService
    .deleteUser(user)
    .subscribe(response => {
      if(response['status'] == 'success')
      {
        this.userList()
      }
      else
      {
        console.log(`error : ${response['error']}`)
      }
    })

  }
  toggleSuspend(user)
  {
    this.userService
    .toggleSuspend(user)
    .subscribe(response => {
      if(response['status'] == 'success')
      {
        this.userList()
      }
    })
  }

}
