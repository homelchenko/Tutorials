import { Directive, HostBinding, HostListener } from '@angular/core';


@Directive({
    selector: `[collapsible]`,
})
export class Collapsible {
    collapsed: boolean = false;

    @HostBinding("class.collapsed")
    get isCollapsed() {
        return this.collapsed;
    }

    @HostListener('click')
    toggle(){
        this.collapsed = !this.collapsed;
    }
}