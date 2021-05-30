import { Hero } from './../models/hero';
import { HEROES } from './../constants/mock-heroes';
import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageServis: MessageService) {}

  getHero(id: number): Observable<Hero> {
    this.messageServis.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find((hero) => hero.id === id) as Hero);
  }

  getHeroes(): Observable<Hero[]> {
    this.messageServis.add('HeroSevice: fetched heroes');
    return of(HEROES);
  }
}
