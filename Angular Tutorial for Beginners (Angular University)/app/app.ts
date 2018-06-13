import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { SearchBox } from './search-box/SearchBox';
import { ColorPicker } from './color-picker/ColorPicker';

@Component({
    selector: 'App',
    template: `
        <color-picker [color]="color" (color)="onColor($event)"></color-picker>
    `
})
class App {
    color: string = "green";

    onColor(color: string) {
        this.color = color;
    }
}

@NgModule({
    declarations: [App, SearchBox, ColorPicker],
    imports: [BrowserModule],
    bootstrap: [App]
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);