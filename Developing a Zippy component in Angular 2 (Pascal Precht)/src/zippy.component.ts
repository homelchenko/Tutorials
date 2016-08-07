import { Component, Input } from 'angular2/core';

@Component({
    moduleId: module.id,
    selector: 'my-zippy',
    templateUrl: 'zippy.component.html'
})
export class ZippyComponent {
    visible : boolean = false;

    @Input() title;

    toggle() {
        this.visible = !this.visible;
    }    
}