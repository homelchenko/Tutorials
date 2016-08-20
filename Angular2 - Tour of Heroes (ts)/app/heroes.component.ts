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
    private addingHero: boolean;

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
    
    addHero(): void {
        this.addingHero = true;
        this.selectedHero = null;
    }

    close(savedHero: Hero): void {
        this.addingHero = false;
        if(savedHero) {
            this.getHeroes();
        }
    }

    deleteHero(hero: Hero, event: any): void {
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(res => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) {
                    this.selectedHero = null;
                }
            })
    }

    gotoDetail() {
        let link = ['/detail', this.selectedHero.id];
        
        this.router.navigate(link);
    }
}