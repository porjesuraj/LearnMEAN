import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list1',
  templateUrl: './product-list1.component.html',
  styleUrls: ['./product-list1.component.css']
})
export class ProductList1Component implements OnInit {

  title = ''
  description = ''
  price = ''
  category = '' 

  constructor() { }

  ngOnInit(): void {
  }

  onCancel() {

  }

  onSave() {
    console.log(`--- product information ---`)
    console.log(`title = ${this.title}`)
    console.log(`description = ${this.description}`)
    console.log(`price = ${this.price}`)
    console.log(`category = ${this.category}`)
  }

}

            