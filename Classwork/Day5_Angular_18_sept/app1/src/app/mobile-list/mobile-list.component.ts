import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.css']
})
export class MobileListComponent implements OnInit {

  mobiles = [
    {
      id : 1,
      model : 'iphone 1',
      company : 'apple',
      price : 100000
    },
    {
      id : 2,
      model : 'iphone 2',
      company : 'apple',
      price : 40000
    },
    {
      id : 3,
      model : 'iphone 3',
      company : 'apple',
      price : 30000
    },
    {
      id : 4,
      model : 'iphone 4',
      company : 'apple',
      price : 40000
    },
    {
      id : 5,
      model : 'iphone 5',
      company : 'apple',
      price : 50000
    },
    {
      id : 5,
      model : 'one plus T',
      company : 'one plus',
      price : 40000
    },
    {
      id : 6,
      model : 'M5',
      company : 'samsung',
      price : 12000
    },
    {
      id : 7,
      model : 'Nokia 770',
      company : 'nokia',
      price : 13000
    },
    {
      id : 8,
      model : 'nexus 1',
      company : 'nexus',
      price : 30000
    },
    {
      id : 9,
      model : 'nexus 2',
      company : 'nexus',
      price : 40000
    },
    {
      id : 10,
      model : 'nexus 3',
      company : 'nexus',
      price : 50000
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }


  onDelete(mobile,index)
  {
    const answer = confirm(`are you sure to delete ${mobile['model']} ?`)
    if (answer) {
      alert('deleting...')
      this.mobiles.splice(index, 1)
    }

  }
  
  onEdit(mobile)
  {
const answer = confirm(`are you sure to edit ${mobile['model']} ?`)
  }

}
