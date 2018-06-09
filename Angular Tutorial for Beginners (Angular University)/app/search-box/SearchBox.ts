import { Component, Input } from '@angular/core';

declare const module: { id: any };

@Component({
    selector: 'search-box',
    moduleId: module.id,
    templateUrl: 'search-box.component.html',
    styleUrls: ['search-box.component.css']
})
export class SearchBox {
    @Input('placeholder')
    text = 'Search'

    clear(input: any) {
        input.value = '';
    }
}