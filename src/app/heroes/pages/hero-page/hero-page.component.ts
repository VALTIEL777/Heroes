import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../../interfaces/hero.interface';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-page',
  standalone: false,
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css'] // Asegúrate de que sea "styleUrls" en plural
})
export class HeroPageComponent implements OnInit {
  public hero?: Hero;

  constructor(
    private heroesService: HeroesService, // Corregir el nombre del servicio
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroesService.getById(id))
      )
      .subscribe({
        next: (hero) => {
          if (!hero) {
            this.router.navigate(['/heroes/list']);
          } else {
            this.hero = hero;
            console.log({ hero });
          }
        },
        error: (err) => {
          console.error('Error al obtener el héroe:', err);
          this.router.navigate(['/heroes/list']);
        }
      });
  }
}
