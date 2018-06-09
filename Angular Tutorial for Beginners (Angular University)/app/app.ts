import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { SearchBox } from './SearchBox';

@Component({
    selector: 'App',
    template: `
        <search-box placeholder="Type to search"></search-box>
    `
})
class App {
}

@NgModule({
    declarations: [App, SearchBox],
    imports: [BrowserModule],
    bootstrap: [App]
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);