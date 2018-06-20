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
            <i class="md-icon collapsible-indicator">arrow_drop_down</i>
            <div class="collapsible-body">
                Some text paragraph
            </div>
        </div>
    `,
    styles: [
        `
            .collapsed .collapsible-indicator {
                font-size: 30px;
                line-height: 30px;
            }

            .collapsible-body {
                padding: 0 20px 20px 20px;
            }

            .collapsed .collapsible-body {
                display: none;
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