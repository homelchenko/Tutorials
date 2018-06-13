import { Component, Input } from '@angular/core';

@Component({
    selector: 'color-sample',
    template: `<div class="color-sample" [ngStyle]="{'background-color': color}"></div>`,
    styles: [`
        .color-sample {
            height: 50px;
            width: 50px;
            border: 1px solid;
            margin: 3px;
        }
    `]
})
export class ColorSample {
    @Input()
    color: string = "white";
}