import { Component } from '@angular/core';

@Component({
    selector: 'search-box',
    template: `
        <input placeholder="Search">
        <button class="btn-clear">Clear</button>
    `
})
export class SearchBox {

}