import {Component} from 'angular2/core';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@Component({
    selector: 'my-app',
    template: `
        <shopping-list></shopping-list>
    `,
    directives: [ ShoppingListComponent ]
})
export class AppComponent {

}