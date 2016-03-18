import {Injectable} from 'angular2/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';


@Injectable()
export class HeroService
{
    getHeroes(){
        return Promise.resolve(HEROES);
        // return this.getHeroesSlowly();
    }
    
    getHero(id: number){
        return Promise.resolve(HEROES)
            .then(
                heroes => heroes.filter(hero => hero.id == id)[0]
            );
    }
    
    getHeroesSlowly()
    {
        return new Promise<Hero[]>(
            resolve =>
                setTimeout(
                    () => resolve(HEROES),
                    10000));
    }    
}