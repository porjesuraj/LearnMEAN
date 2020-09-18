import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  rating = 4
  ratings = [0, 1, 2, 3, 4]


  constructor() { }

  ngOnInit(): void {
  }

}
