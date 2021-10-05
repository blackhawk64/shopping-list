import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  total: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        id: 0,
        title: 'Manzana',
        price: 10.5,
        quantity: 4,
        completed: false
      },
      {
        id: 1,
        title: 'Pan',
        price: 3.5,
        quantity: 8,
        completed: true
      },
      {
        id: 2,
        title: 'Chamarra',
        price: 300,
        quantity: 1,
        completed: false
      },
      {
        id: 3,
        title: 'Gorra',
        price: 150,
        quantity: 2,
        completed: true
      }
    ];

    this.getTotal();
  }

  deleteItem(item: Item) {
    this.items = this.items.filter(x => x.id != item.id);
    this.getTotal();
  }

  toggleItem(item: Item) {
    this.getTotal();
  }

  getTotal() {
    this.total = this.items
      .filter(item => !item.completed)
      .map(item => item.quantity * item.price)
      .reduce((acc, item) => acc += item, 0);
  }

}
