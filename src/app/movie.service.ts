import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Movie } from './movie';
import { MOVIES } from './mock-movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  getMovies(): Observable<Movie[]> {
    return of(MOVIES);
  }

  constructor() { }
}
