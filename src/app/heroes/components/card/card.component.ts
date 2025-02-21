import { Component, Input, input, OnInit } from '@angular/core';
import { Hero } from '../../../interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-card',
  standalone: false,
  templateUrl: './card.component.html',
  styles: ``
})
export class CardComponent implements OnInit{
  @Input()
  //permite que el componente padre pase un valor a esta prioridad
 
  public hero!:Hero;
  //define la propiedad hero, que representa un heroe y debe ser recibida como entrada
  ngOnInit() {
   //metodo que se ejecuta automaticamente cuando el componente es inicializado
   if(!this.hero)throw Error('Hero property is required');
   //Lanza un error si no se recibe un heroe valido
    
  }


}
