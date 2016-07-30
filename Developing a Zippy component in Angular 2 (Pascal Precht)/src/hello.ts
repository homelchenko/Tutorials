import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import {Zippy} from './zippy';

@Component({
    selector: 'hello-app',
    template: `
        <h1>Hello, {{name}}!</h1>
        Say hello to: <input [value]="name" (input)="name = $event.target.value">
        <zippy></zippy>
    `,
    directives: [Zippy],
})
export class HelloApp {
    name: string = 'World';
}

bootstrap(HelloApp);