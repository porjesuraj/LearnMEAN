import { CartComponent } from './../cart/cart.component';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { CartService } from './../cart.service';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';


import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  products = []
  constructor(private productService :ProductService,
            private cartService : CartService ,
              private toastr : ToastrService,
              private router : Router,
              private modalService : NgbModal
              ) { }

  ngOnInit(): void {
    this.loadProducts()
  }

  loadCart()
  {
    this.modalService.open(CartComponent,{size:'lg'})
  }

  loadProducts()
  {
    this.productService
    .getProducts()
    .subscribe(response => {
        if(response['status'] == 'success')
        {
          this.products = response['data']
        }
        else
        { 
          this.toastr.warning(response['error'])

        }
    })
  }



  addToCart(product)
  {
  this.cartService
  .addCartItem(product['id'],product['price'],1)
  .subscribe(response => {
    if(response['status'] == 'success')
    {
      this.toastr.success('added to cart' )
    }
    else
    {
      console.error(` error : ${response['error']}`)
      this.toastr.error('check code')
      
    }


  })
    

  }

}
