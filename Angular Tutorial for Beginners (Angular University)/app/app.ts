import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { SearchBox } from './search-box/SearchBox';
import { ColorPicker } from './color-picker/ColorPicker';
import { ColorPreviewer } from './color-picker/ColorPreviewer';
import { ColorSample } from './color-sample/ColorSample';
import { ColorTextDetector } from './color-sample/ColorTextDetector';

@Component({
    selector: 'App',
    template: `
        <color-sample [color]="color" #sample ></color-sample>

        <color-text-detector (color)="sample.color = $event"></color-text-detector>
    `
})
class App {
}

@NgModule({
    declarations: [App, SearchBox, ColorPicker, ColorPreviewer, ColorSample, ColorTextDetector],
    imports: [BrowserModule],
    bootstrap: [App]
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);