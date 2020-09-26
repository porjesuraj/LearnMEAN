import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = []
  constructor(private productService : ProductService,
    private router : Router,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.getProducts()
    
   
  }
 
getProducts()
{
  this.productService
  .getProducts()
  .subscribe(response =>{
    if(response['status'] == 'success')
    {
      this.products = response['data'] 
    }
    else
    {
      console.log(`error : response['error']`)
    }
  })
}



  toggleActive(product)
  {
    this.productService
    .toggleAcitve(product)
    .subscribe(response => {
      if(response['status'] == 'success')
      {
        this.getProducts()
      }
      else
      {
        console.log(`error = ${response['error']}`)
      }
    })
  }

  productAdd()
  {
      this.router.navigate(['/product-add'])
  }
  onEdit(product)
  {
    this.router.navigate(['/product-add'],{queryParams : {id : product['id']}})
  }
  onDelete(id)
  {
    this.productService
    .deleteProduct(id)
    .subscribe(response => {
      if(response['status'] == 'success')
      {
       this.getProducts()
      }
      else
      {
        console.log(response['error'])
      }
    })
  }
  uploadImage(product)
  { 
    this.router.navigate(['/product-upload-image'],{queryParams : {id : product['id']}})

  }
  onUpdateImage(product)
  {

    this.router.navigate(['/product-upload-image'],{queryParams : {id : product['id']}})

  }





}
