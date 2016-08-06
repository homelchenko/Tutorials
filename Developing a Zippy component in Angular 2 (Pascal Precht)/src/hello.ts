import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import {ZippyComponent} from './zippy';

@Component({
    selector: 'hello',
    template: '<my-zippy title="Details"></my-zippy>',
    directives: [ZippyComponent],
})
export class HelloApp {
}

bootstrap(HelloApp);