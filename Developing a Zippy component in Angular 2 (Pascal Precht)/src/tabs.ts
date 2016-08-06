import { Component } from 'angular2/core';

import { Tab } from './Tab';

@Component({
    selector: 'tabs',
    template: `
        <ul>
            <li *ngFor="#tab of tabs" (click)="selectTab(tab)">
                {{ tab.tabTitle }}
                <ng-content></ng-content>
            </li>
        </ul>
    `
})
export class Tabs {
    tabs : Tab[] = [];

    addTab(tab : Tab){
        if (this.tabs.length == 0)
            tab.active = true;
        this.tabs.push(tab);
    }

    selectTab(tab: Tab) {
        this.tabs.forEach((tab) => {
            tab.active = false;
        });

        tab.active = true;
    }
}