import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';

import { HeroService } from './hero.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        HeroesComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [
        AppComponent
    ]
}) 
export class AppModule {
}