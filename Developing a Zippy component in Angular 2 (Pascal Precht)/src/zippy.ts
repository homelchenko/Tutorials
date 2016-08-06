import {Component} from 'angular2/core';

@Component({
    moduleId: module.id,
    selector: 'my-zippy',
    templateUrl: 'zippy.html'
})
export class ZippyComponent {
    visible : boolean = false;

    toggle() {
        this.visible = !this.visible;
    }    
}