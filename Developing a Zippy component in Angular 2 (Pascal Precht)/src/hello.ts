import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import {ZippyComponent} from './zippy';
import { Tabs } from './Tabs';
import { Tab } from './Tab';

@Component({
    selector: 'hello',
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
    directives: [ZippyComponent, Tabs, Tab],
})
export class HelloApp {
}

bootstrap(HelloApp);