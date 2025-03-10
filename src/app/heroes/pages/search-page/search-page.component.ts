import { Component } from '@angular/core';
import { MatAutocompleteActivatedEvent } from '@angular/material/autocomplete';
import { timestamp } from 'rxjs';
import { HeroesService } from '../../../services/heroes.service';
import { FormControl } from '@angular/forms';
import { Hero } from '../../../interfaces/hero.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';


@Component({
  selector: 'app-search-page',
  standalone: false,
  
  templateUrl: './search-page.component.html',
  styles: ``
})
export class SearchPageComponent {


  public searchInput = new FormControl('');
  public heroes: Hero[] = [];
  public selectedHero?: Hero;

  constructor (private HeroesService: HeroesService){}

  searchHero() {
    const value: string = this.searchInput.value?.trim() || '';
    
    if (value.length === 0) {
        this.heroes = [];
        return;
    }

    this.HeroesService.getSuggestions(value)
    .subscribe((heroes: Hero[]) => this.heroes = heroes);
}



  onSelectedOption(event: MatAutocompleteSelectedEvent): void{
    if(!event.option?.value){
      this.selectedHero = undefined
      return;
    }

    const hero:Hero = event.option.value;
    this.searchInput.setValue (hero.superhero);

    this.selectedHero = hero;
  }
  

}