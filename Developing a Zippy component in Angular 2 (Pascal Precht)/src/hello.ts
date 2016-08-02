import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import {Zippy} from './zippy';

@Component({
    selector: 'hello',
    template: '<zippy></zippy>',
    directives: [Zippy],
})
export class HelloApp {
}

bootstrap(HelloApp);