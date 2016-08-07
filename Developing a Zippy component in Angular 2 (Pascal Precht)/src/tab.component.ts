import { Component, Input } from 'angular2/core';

import { TabsComponent } from './tabs.Component';

@Component({
    selector: 'tab',
    template: `
        <div *ngIf="active">
            <ng-content></ng-content>
        </div>
    `
})
export class TabComponent {
    @Input() tabTitle;

    active = false;

    constructor(tabs: TabsComponent) {
        tabs.addTab(this)
    }
}