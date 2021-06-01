import { HeroService } from './../../services/hero.service';
import { Hero } from '../../models/hero';
import { Component, OnInit } from '@angular/core';
// import { takeUntil } from 'rxjs/operators';

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

  add(name: string): void {
    name = name.trim();
    if (!name) return;
    this.heroService
      .addHero({ name } as Hero)
      .subscribe((hero: any) => this.heroes.push(hero));
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  // add  subscribe !!!!

  // ngOnDestroy(): void {
  //   this.unSubscriber.next();
  //   this.unSubscriber.complete();
  // }
}
