import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title = ''
  description = ''
  price = ''
  category = ''

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUpTitle(event) {
    console.log('on key up')
    // console.log(event)
    this.title = event.target.value
  }

  onKeyUpPrice(event) {
    this.price = event.target.value
  }

  onKeyUpDescription(event) {
    this.description = event.target.value
  }

  onKeyDown(event) {
    console.log('on key down')
    console.log(event)
  }

  onTitleChange(event) {
    console.log('inside onTitleChange()')
    console.log(event)
  }

  onSave(event) {
    console.log(`title = ${this.title}`)
    console.log(`description = ${this.description}`)
    console.log(`price = ${this.price}`)
    // console.log(event)
  }

  onCancel(event) {
    // console.log(event)
  }
}