import { Component, OnInit, Input } from '@angular/core';
import { Hero } from './../Hero';

@Component({
  selector: 'app-hero-detail',
  // templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  template: `<div *ngIf="hero">
             <h2>{{hero.name}} details!</h2>
             <div><label>id: </label>{{hero.id}}</div>

             <div>
                <label>name: </label>
                <input [(ngModel)]="hero.name" placeholder="name">
             </div>
             </div>`
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
