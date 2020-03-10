import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Movie } from './movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  
  private moviesUrl = 'https://api.themoviedb.org/3/search/movie?api_key=50fc7d27f2db06b1ae8c54a7c435f8e1&language=en-US&page=1&include_adult=false';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  searchMovies(term: string): Observable<Movie[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Movie[]>(`${this.moviesUrl}&query=${term}`);
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl)
  }

  getMovie(id: number): Observable<Movie> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get<Movie>(url)
  }
  
}
