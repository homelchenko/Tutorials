import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        Hello {{title}}
        <span>Clicks: {{count}}<span>
        <button (click)="increaseCount()">Click me</button>
    `
})
export class AppComponent { 
    count = 0;
    title = "Hello, World!";
    
    increaseCount(){
        this.count++;
    }   
}