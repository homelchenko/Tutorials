import { Component } from 'angular2/core';

import { TabComponent } from './tab.Component';

@Component({
    selector: 'tabs',
    template: `
        <ul>
            <li *ngFor="let tab of tabs" (click)="selectTab(tab)">
                {{ tab.tabTitle }}
                <ng-content></ng-content>
            </li>
        </ul>
    `
})
export class TabsComponent {
    tabs : TabComponent[] = [];

    addTab(tab : TabComponent){
        if (this.tabs.length == 0)
            tab.active = true;
        this.tabs.push(tab);
    }

    selectTab(tab: TabComponent) {
        this.tabs.forEach((tab) => {
            tab.active = false;
        });

        tab.active = true;
    }
}