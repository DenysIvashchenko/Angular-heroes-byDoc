import { HeroService } from './../../services/hero.service';
import { Hero } from '../../models/hero';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDetailComponent implements OnInit {
  public hero$!: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.hero$ = this.heroService.getHero(id);
  }

  ngOnInit(): void {
    this.getHero();
  }

  goBack(): void {
    this.location.back();
  }
}
