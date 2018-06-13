import { Component } from "@angular/core";

@Component({
    selector: 'color-previewer',
    template: `
        <div class="color-previwer" [ngStyle]="{'color': color}">
            PREVIEW TEXT COLOR
        </div>
    `
})
export class ColorPreviewer {
    color: string;
}