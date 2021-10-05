import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[] = [
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

  constructor() { }

  getItems(){
    return this.items;
  }

  addItem(item: Item){
    this.items.unshift(item);
  }
}
