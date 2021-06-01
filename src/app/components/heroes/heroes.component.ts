import { HeroService } from './../../services/hero.service';
import { Hero } from '../../models/hero';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes!: Hero[];
  // private unSubscriber: Subject<void> = new Subject<void>();

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    // this.heroService
    //   .getHeroes()
    //   .pipe(takeUntil(this.unSubscriber))
    //   .subscribe((heroes) => (this.heroes = heroes));

    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  // отписка от subscribe !!!!
  // ngOnDestroy(): void {
  //   this.unSubscriber.next();
  //   this.unSubscriber.complete();
  // }
}
