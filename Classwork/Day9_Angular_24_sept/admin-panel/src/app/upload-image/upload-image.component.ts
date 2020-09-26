import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

 selectedFile = null
 product = null

  constructor(private productService : ProductService,
              private activatedRoute : ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {
    
  }
  onImageSelect(event)
  {
    console.log(event)
    this.selectedFile = event.target.files[0]
    console.log(this.selectedFile)
  }
  onUploadImage()
  {
    const id =  this.activatedRoute.snapshot.queryParams['id']
    console.log(`product id : ${id}`)
     this.productService
     .uploadImage(id,this.selectedFile)
     .subscribe(response => {

      if(response['status'] == 'success')
      {
        this.router.navigate(['/product-list'])
      }
      else
      {
        console.log(`eror : response['error]`)
        console.log(`product id : ${id}`)
      }
     })


  }
}
