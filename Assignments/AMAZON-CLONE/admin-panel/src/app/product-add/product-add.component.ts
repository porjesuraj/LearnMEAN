import { BrandService } from './brand.service';
import { CategoryService } from './category.service';
import { ProductService } from './../product.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  title = '' 
  description = '' 
  price = 1  
  _brand = 0
  _category = 0
   categories = [] 
    
     brands = []
     product = null

  constructor( private activatedRoute : ActivatedRoute,
               private productService : ProductService,
               private router : Router,
               private categoryService : CategoryService,
               private brandService : BrandService) { }

  ngOnInit(): void {
    const id =  this.activatedRoute.snapshot.queryParams['id']
    if(id)
    {
      this.productService
      .productDetails(id)
      .subscribe(response => {
      if(response['status'] == 'success')
      {
       const products = response['data']
       if(products.length > 0)
       {
         this.product = products[0]
         console.log(this.product)
       this.title = this.product['title']
       this.description = this.product['description']
       this.price = this.product['price']
       this._brand = this.product['brand']['id']
       this._category = this.product['category']['id']
       }
       
       
      }

      })
    }

this.loadBrands()
this.loadCategories()

  }

 

   
  onSave()
  {
    if(this.product)
    {
      //edit
      this.productService
      .updateProducts(this.product['id'],this.title,this.description,this.price,this._brand,this._category)
      .subscribe(response => {
        if(response['status'] == 'success')
        {
              this.router.navigate(['/product-list'])
        }
        else
       {
         console.log(`error : response['error']`)
       }
      })
    }
    else
    {
       this.productService
       .insertProducts(this.title,this.description,this.price,this._brand,this._category)
       .subscribe(response => {
        if(response['status'] == 'success')
        {
              this.router.navigate(['/product-list'])
        }
        else
       {
         console.log(`error : response['error']`)
       }
      })
    }
      
  }





  onCancel()
  {
    this.router.navigate(['/product-list'])
  }

  loadCategories()
  {
    this.categoryService
    .getCategory()
    .subscribe(response => {
      if(response['status'] == 'success')
      {
        this.categories = response['data']
      }
      else
      {
        console.log(`error : ${response['error']}`)
      }
    })
  }


  loadBrands()
  {
    this.brandService
    .getBrands()
    .subscribe(response => {
      if(response['status'] == 'success')
      {
        this.brands = response['data']
      }
      else
      {
        console.log(`error : ${response['error']}`)
      }
    })
  }

  onUploadImage()
  {
    this.router.navigate(['/product-upload-image'],{queryParams : {id : this.product['id']}})
  }
}
