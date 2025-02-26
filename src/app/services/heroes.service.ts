import { Injectable } from '@angular/core';
import { environments } from '../enviroments/enviroments';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, pipe } from 'rxjs';
import { Hero } from "../interfaces/hero.interface";
import { query } from '@angular/animations';


@Injectable({ providedIn: 'root' }) 
export class HeroesService {
    private baseUrl: string = environments.baseURL;

    constructor(private http: HttpClient) { } 

    getHeroes():Observable<Hero[]> { 
        return this.http.get<Hero[]>(`${ this.baseUrl }/heroes`);
    }

    getById(id: string): Observable<Hero | undefined>{
      return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`)
      .pipe(
        catchError (error => of(undefined))
        
      );
    }

    getSuggestions(query: string): Observable<Hero[]>{
      return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=$
        {query}&_limit=6` 
        
      );
    }
}