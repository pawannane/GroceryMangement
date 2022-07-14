import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ItemService } from '../services/item.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  items: Item[] = [];
  name: string = "";
  item: Item | undefined ;
  
  constructor(private itemService: ItemService,  private route: ActivatedRoute,) { }

  ngOnInit() {
    this.items = this.getItems();

    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      this.item = this.items.find((item)=>item.item == this.name);
    });
  }

  getItems(): Item[] {
    return this.itemService.getItemsFromData();
  }

}
