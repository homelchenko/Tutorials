import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { SearchBox } from './search-box/SearchBox';
import { ColorPicker } from './color-picker/ColorPicker';
import { ColorPreviewer } from './color-picker/ColorPreviewer';

@Component({
    selector: 'App',
    template: `
        <color-picker [color]="color" (color)="previewer.color = $event" #picker></color-picker>

        <color-previewer #previewer></color-previewer>

        <button (click)="picker.reset()">Reset</button>
    `
})
class App {
}

@NgModule({
    declarations: [App, SearchBox, ColorPicker, ColorPreviewer],
    imports: [BrowserModule],
    bootstrap: [App]
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);