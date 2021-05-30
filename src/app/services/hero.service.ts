import { MessageService } from './message.service';
import { HEROES } from './../mock-heroes';
import { Hero } from '../models/hero';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageServis: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageServis.add('HeroSevice: fetched heroes');
    return of(HEROES);
  }
}
