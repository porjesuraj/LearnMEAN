import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  categories = []
  brands = []

  title = ''
  description = ''
  price = 0
  category = 1
  brand = 1

  product = null 

  constructor(
private router  : Router 
  ) { }

  ngOnInit(): void {

  }
  onUpdate()
  {
    
  }

}
