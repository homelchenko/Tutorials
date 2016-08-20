import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';


@Injectable()
export class HeroService
{
    private heroesurl = 'app/heroes';

    constructor(private http: Http){ }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesurl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }
    
    getHero(id: number) {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id)
            );
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        
        return Promise.reject(error.message || error);
    }
}