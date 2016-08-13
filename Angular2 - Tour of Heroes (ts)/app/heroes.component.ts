import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
    selector: 'my-heroes',
    templateUrl: './app/heroes.component.html',
    styleUrls: [
        './app/heroes.component.css'
    ],
    directives: [
        HeroDetailComponent
    ],
})
export class HeroesComponent implements OnInit {
    public heroes;
    selectedHero: Hero;

    constructor (
        private heroService: HeroService,
        private router: Router) { }

    getHeroes() {
         this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }
    
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
    
    gotoDetail() {
        let link = ['/detail', this.selectedHero.id];
        
        this.router.navigate(link);
    }
}