import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Movie } from './movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesUrl = 'api/movies';  // URL to web api

private handleError<T> (operation = 'operation', result?: T) {

  return (error: any): Observable<T> => {

    console.error(error);
    this.log(`${operation} failed: ${error.message}`);
    return of(result as T);

  };
}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl)
    .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Movie[]>('getMovies', []))
    );
  }

  getMovie(id: number): Observable<Movie> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get<Movie>(url).pipe(
      tap(_ => this.log(`fetched movie id=${id}`)),
      catchError(this.handleError<Movie>(`getMovie id=${id}`))
    );
  }
  
  private log(message: string) {
    this.messageService.add(`MovieService: ${message}`);
  }
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }
}
