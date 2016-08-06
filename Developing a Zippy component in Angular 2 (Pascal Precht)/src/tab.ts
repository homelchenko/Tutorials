import { Component, Input } from 'angular2/core';

import { Tabs } from './Tabs';

@Component({
    selector: 'tab',
    template: `
        <div *ngIf="active">
            <ng-content></ng-content>
        </div>
    `
})
export class Tab {
    @Input() tabTitle;

    active = false;

    constructor(tabs: Tabs) {
        tabs.addTab(this)
    }
}