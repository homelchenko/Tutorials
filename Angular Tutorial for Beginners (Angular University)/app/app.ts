import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

@Component({
    selector: 'App',
    template: 'Hello Ng2 World!'
})
class App {
}

@NgModule({
    declarations: [App],
    imports: [BrowserModule],
    bootstrap: [App]
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);