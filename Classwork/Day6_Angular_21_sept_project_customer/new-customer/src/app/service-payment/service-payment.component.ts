import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-service-payment',
  templateUrl: './service-payment.component.html',
  styleUrls: ['./service-payment.component.css']
})
export class ServicePaymentComponent implements OnInit {

  payments = []
  httpClient: HttpClient
  
  constructor(httpClient: HttpClient) {this.httpClient = httpClient }

  ngOnInit(): void {
  }

  loadPayment()
  {
 const url = 'http://localhost:3000/customer/servicing/payment'

 const request = this.httpClient.get(url)

 request.subscribe(response => {

  console.log(`response`)
  console.log(response)
  if(response['status'] == 'success')
  {
    this.payments = response['data']
  }
 })
  }

}
