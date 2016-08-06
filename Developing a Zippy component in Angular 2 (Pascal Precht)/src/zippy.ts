import {Component, Input} from 'angular2/core';

@Component({
    moduleId: module.id,
    selector: 'my-zippy',
    templateUrl: 'zippy.html'
})
export class ZippyComponent {
    visible : boolean = false;

    // TODO: Can we do the same with inputs in 'Component' decorator?
    @Input() title;

    toggle() {
        this.visible = !this.visible;
    }    
}