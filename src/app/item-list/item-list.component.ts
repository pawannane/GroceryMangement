import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ItemService } from '../services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  items: Item[] = [];
  itemsForm: boolean = false;
  isNewItem: boolean = false;
  newItem: any = {};

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit() {
    this.items = this.getItems();
  }

  getItems(): Item[] {
    return this.itemService.getItemsFromData();
  }

  showAddItemForm() {
    // resets form if edited Item
    if (this.items.length) {
      this.newItem = {};
    }
    this.itemsForm = true;
    this.isNewItem = true;

  }

  saveItem(item: Item) {
    if (this.isNewItem) {
      // add a new Item
      this.itemService.addItem(item);
    }
    this.itemsForm = false;
  }

  removeItem(item: Item) {
    this.itemService.deleteItem(item);
  }

  viewItem(item: Item){
     this.router.navigate(['itemDetail']);
     return item;
     
  }

  cancelNewItem() {
    this.newItem = {};
    this.itemsForm = false;
  }

}
