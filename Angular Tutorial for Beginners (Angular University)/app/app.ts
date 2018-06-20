import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { SearchBox } from './search-box/SearchBox';
import { ColorPicker } from './color-picker/ColorPicker';
import { ColorPreviewer } from './color-picker/ColorPreviewer';
import { ColorSample } from './color-sample/ColorSample';
import { ColorTextDetector } from './color-sample/ColorTextDetector';
import { Collapsible } from './collapsible-directive/Collapsible';

@Component({
    selector: 'App',
    template: `
        <div collapsible>
            Some text paragraph
        </div>
    `,
    styles: [
        `
            body {
                background: green;
            }

            div {
                background: pink;
                margin: 20px;
            }
        `
    ]
})
class App {
}

@NgModule({
    declarations: [
        App,
        SearchBox,
        ColorPicker,
        ColorPreviewer,
        ColorSample,
        ColorTextDetector,
        Collapsible
    ],
    imports: [BrowserModule],
    bootstrap: [App]
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);