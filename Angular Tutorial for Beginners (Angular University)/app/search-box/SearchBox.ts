import { Component, Input } from '@angular/core';

declare const __moduleName: string;

@Component({
    selector: 'search-box',
    moduleId: __moduleName,
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