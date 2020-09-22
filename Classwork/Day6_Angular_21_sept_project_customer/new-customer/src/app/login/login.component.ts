import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 email = ''
 password = ''

 //class attribute

 httpClient : HttpClient
  constructor(httpClient:HttpClient) 
  {this.httpClient = httpClient }

  ngOnInit(): void {
  }

  
  OnCancel()
  {
    this.email = ''
    this.password = ''
    console.log(`email : ${this.email}`)
    console.log(`password : ${this.password}`)

  }

  OnSave()
  {
    console.log(`email : ${this.email}`)
    console.log(`password : ${this.password}`)

    const body = {

      email : this.email,
      password : this.password
    }

    const url = 'http://localhost:3000/customer/signin'

    const request = this.httpClient.post(url,body)

    request.subscribe(response => {

      console.log(response)
      if(response['status'] == 'success')
      {
        const data = response['data']
        const firstName = data['firstName']
        const lastName = data['lastName']
        alert(`welcome ${firstName} ${lastName}`)
      } else {

        alert('invalid email or password')
      }
    })





  }

}
