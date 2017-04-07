import { Injectable } from 'angular2/core';

interface ShoppingItem {
    id: number,
    name: string
}

@Injectable()
export class ShoppingService {
    constructor() { }

    shoppingList: Array<ShoppingItem> = 
    [
        { id: 1, name: 'Milk' },
        { id: 2, name: 'Bread' },
        { id: 3, name: 'Butter' }
    ];

    getList(): Array<ShoppingItem> {
        return this.shoppingList;
    }

    private getMaxShoppingId(): number {
        return this.shoppingList[(this.shoppingList.length - 1)].id;
    }

    addItem(item: string): void {
        this.shoppingList.push(
            { 
                id: this.getMaxShoppingId() + 1, 
                name: item 
            });
    }

    deleteItem(item): void {
        this.shoppingList.splice(this.shoppingList.indexOf(item), 1);
    }
}