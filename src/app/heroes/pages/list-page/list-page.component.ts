import { Component, OnDestroy, OnInit } from '@angular/core';
import { Hero } from '../../../interfaces/hero.interface';
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-list-page',
  standalone: false,
  
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent  implements OnInit{
public heroes: Hero[]=[];

constructor(private heroesService: HeroesService){

}
  
  ngOnInit() {
    this.heroesService.getHeroes()
    .subscribe(heroes=> this.heroes=heroes);
  }

}
