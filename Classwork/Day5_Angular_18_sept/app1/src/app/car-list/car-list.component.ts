import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

   cars = [
     {
       id: 1,
       model : 'i10',
       company : 'tata',
       price : 3.4,
       color : 'black'
     },
     {
      id: 2,
      model : 'i20',
      company : 'tata',
      price : 3.4,
      color : 'black'
    },
    {
      id: 3,
      model : 'i30',
      company : 'tata',
      price : 3.4,
      color : 'black'
    },
    {
      id: 4,
      model : 'i40',
      company : 'tata',
      price : 3.4,
      color : 'black'
    }
   ]

  constructor() { }

  ngOnInit(): void {
  }

}
