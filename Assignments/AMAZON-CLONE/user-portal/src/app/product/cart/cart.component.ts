import { ToastrService } from 'ngx-toastr';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService : CartService,
              private toastr : ToastrService) { }
     items = []
     totalAmount = 0
  ngOnInit(): void {
   
    this.onLoad()
  }

onLoad()
{

  this.cartService
  .getCartItem()
  .subscribe(response => {
    if(response['status'] == 'success')
    {
      this.items = response['data']
      this.totalAmount = 0 
      for (let index = 0; index < this.items.length; index++) {
        const item = this.items[index];
        
        this.totalAmount += parseFloat( item['totalAmount'])
      }
     


    } 
    else
    {
      console.log(`error : ${response['error']}`)
    }
  })
}










  onDelete(id)
  {
    this.cartService
    .deleteItem(id)
    .subscribe(response => {
       if(response['status'] == 'success')
       {
         this.toastr.warning('Item deleted')
         this.onLoad()
       }
       else
       {
         console.log(`error = ${response['error']}`)
       }
    })
  }
  updateQuantity(quantity,item)
  {
      const newQuantity = item['quantity'] + quantity
      if(newQuantity == 0)
      {
        this.onDelete(item['id']) 
      
      }
      else
      {
        this.cartService
        .updateCartItem(item['id'], newQuantity, item['price'])
        .subscribe(response => {
          if(response['status'] == 'success' )
          {
            this.toastr.success('Item Added to Cart')
            this.onLoad()
          } 
          else
          {
            console.log(`error = ${response['error']}`)
          }
        })
      }
  }

  
}
