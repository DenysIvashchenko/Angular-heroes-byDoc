import { HeroService } from './../../services/hero.service';
import { Hero } from './../../models/hero';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  heroes: Hero[] = [];
  subscription!: Subscription;
  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.subscription = this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
