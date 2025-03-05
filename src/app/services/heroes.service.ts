import { Injectable } from '@angular/core';
import { environments } from '../enviroments/enviroments';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, pipe } from 'rxjs';
import { Hero } from "../interfaces/hero.interface";
import { query } from '@angular/animations';


@Injectable({ providedIn: 'root' }) 
export class HeroesService {
  addHero //Se usa pipe para procesar el resultado de la peticion
  (newHero: Hero) {
    throw new Error('Method not implemented.');
}

private baseUrl: string = environments.baseURL;

constructor(private http: HttpClient) {} //permite hacer solicitudes HTTP

getHeroes(): Observable<Hero[]> { //metodo que obtiene la lista de héroes
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
}

getHeroById(id: string): Observable<Hero | undefined>{
    //Metodo que obtiene un heroe especifico basado en su ID
    //Retorna un observable que puede ser un Hero o "undefined" (si no existe el hero)
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`)

    .pipe(
        //Se usa pipe para procesar el resultado de la peticion
        catchError(error => of(undefined)));
        //Si ocurre un error devuelve "undefined"
}

getSuggestions(query: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`);
}

addHeroo(hero: Hero): Observable<Hero>{
    return this.http.post<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero);

}



updateHero (hero: Hero): Observable<Hero>{
    if(!hero.id) throw Error('Hero is required');
    return this.http.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero);
}

deleteHeroById(id: string): Observable<boolean>{
    return this.http.delete (`${this.baseUrl}/heroes/${id}`)
    .pipe(
        catchError(err => of(false)),
        map(resp=> true)
    );
}
}