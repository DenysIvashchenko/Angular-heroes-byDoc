import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageServis: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageServis.add('HeroSevice: fethed heroes');
    return of(HEROES);
  }
}
