import { Component, Input } from '@angular/core';

declare const module;

@Component({
    selector: 'search-box',
    moduleId: module.id,
    templateUrl: 'search-box.component.html',
    styles: [`
        .btn-clear {
            background: #DE363F;
            color: white;
            font-weight: bold;
            border-radius: 4px;
        }
    `]
})
export class SearchBox {
    @Input('placeholder')
    text = 'Search'

    clear(input) {
        input.value = '';
    }
}