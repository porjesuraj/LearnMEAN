import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  isVisible = false
  constructor() { }

  ngOnInit(): void {
  }
 
  toggleVisibility() {
    // this.isVisible = !this.isVisible
    if (this.isVisible == true) {
      this.isVisible = false
    } else {
      this.isVisible = true
    }
  }

}
