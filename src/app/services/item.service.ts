import { Injectable } from '@angular/core';
import {Item} from '../models/item'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private items: Item[] = [
    // https://healthjade.com/wp-content/uploads/2017/09/banana.jpg
    // https://healthjade.com/wp-content/uploads/2017/10/orange-fruit.jpg
    // https://healthjade.com/wp-content/uploads/2017/10/apple-fruit.jpg
    // https://healthjade.com/wp-content/uploads/2018/05/cucumber.jpg
    {
      item: 'Apple',
      quantity: 2,
      imageUrl: 'https://healthjade.com/wp-content/uploads/2017/10/apple-fruit.jpg'
    }
  ];

  

  constructor() { }

  getItemsFromData(): Item[] {
    return this.items;
  }

  addItem(item: Item) {
    this.items.push(item);
  }
  
  deleteItem(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  getItem(item: Item){
    this.items.indexOf(item);
  }

}
