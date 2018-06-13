import { Component, Input } from "@angular/core";

import { RED, BLUE } from './Constants';

@Component({
    selector: '<color-picker>',
    template: `
        <div class="color-title" [ngStyle]="{'color': color}">Pick a color:</div>

        <div class="color-picker">
            <div class="color-sample color-sample-blue" (click)="choose('${RED}')"></div>
            <div class="color-sample color-sample-red" (click)="choose('${BLUE}')"></div>
        </div>
    `,
    styles: [
        `
            .color-sample {
                width: 50px;
                height: 50px;
                display: inline-block;
                margin: 0 2px;
            }

            .color-sample-red {
                background-color: red;
            }

            .color-sample-blue {
                background-color: blue;
            }
        `
    ]
})
export class ColorPicker {
    @Input("initial")
    color: string;

    choose(color: string) {
        this.color = color;
    }
}