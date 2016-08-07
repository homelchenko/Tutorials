import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

import { ZippyComponent } from './zippy.component';
import { TabsComponent } from './tabs.Component';
import { TabComponent } from './tab.Component';

@Component({
    selector: 'app',
    template: `
        <my-zippy title="Details">
            This is the content
        </my-zippy>
        <tabs>
            <tab tabTitle="Foo">
                Content of tab Foo
            </tab>
            <tab tabTitle="Bar">
                Content of tab Bar
            </tab>
        </tabs>
    `,
    directives: [
        ZippyComponent,
        TabsComponent,
        TabComponent
    ],
})
export class MainApp {
}

bootstrap(MainApp);