import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})


export class ProductAddComponent  {

  categories = []
  brands = []

  title = ''
  description = ''
  price = 0
  category = 1
  brand = 1

  product = null
}