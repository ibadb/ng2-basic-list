import { Component } from 'angular2/core';
import { ShoppingService } from '../services/shopping-list.service';

@Component({
    //moduleId: module.id,
    selector: 'shopping-list',
    template: `
    <ul>
        <li 
        *ngFor="#item of shoppingList"
        (click)="onItemClicked(item)"
        >{{item.name}}</li>
    </ul>
    <br/>
    <input type="text" [(ngModel)]="selectedItem.name">
    <input type="text" #item>
    <button (click)="onItemAdd(item)">Add Item</button>
    <button (click)="onItemDelete()">Delete Item</button>
    `,
    providers: [ ShoppingService ]
})
export class ShoppingListComponent {
    selectedItem = { };
    shoppingList = this.shoppingService.getList();

    constructor(private shoppingService: ShoppingService) { }
    
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