import { Component, OnInit } from 'angular2/core';
import { ShoppingService } from '../services/shopping-list.service';
import { ShoppingItem } from "../models/shopping-list.model";

@Component({
    //moduleId: module.id,
    selector: 'shopping-list',
    template: `
    <ul>
    <li 
        *ngFor="#item of shoppingList"
        (click)="onItemClicked(item)"
        >{{item.name}}
    </li>
</ul>
<br/>
<input type="text" [(ngModel)]="selectedItem.name">
<input type="text" #item>
<button (click)="onItemAdd(item)">Add Item</button>
<button (click)="onItemDelete()">Delete Item</button>
    `,
    providers: [ ShoppingService ]
})
export class ShoppingListComponent implements OnInit {
    shoppingList: ShoppingItem[];
    selectedItem = { };

    constructor(private shoppingService: ShoppingService) { }

    ngOnInit() {
        this.shoppingList = this.shoppingService.getList();
    }
    
    onItemClicked(item) {
        this.selectedItem = item;
    }

    onItemAdd(item) {
        this.shoppingService.addItem(item.value);
    }

    onItemDelete() {
        this.shoppingService.deleteItem(this.selectedItem);
    }
}