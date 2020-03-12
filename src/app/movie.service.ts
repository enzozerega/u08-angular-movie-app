import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Movie } from './movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  
  private searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=50fc7d27f2db06b1ae8c54a7c435f8e1&language=en-US&page=1&include_adult=false';
  private detailsUrl = 'https://api.themoviedb.org/3/movie/?api_key=50fc7d27f2db06b1ae8c54a7c435f8e1&append_to_response=credits';
  private searchPerson = 'https://api.themoviedb.org/3/search/person?api_key=50fc7d27f2db06b1ae8c54a7c435f8e1&language=en-US&page=1&include_adult=false';
  private personsDetails = 'https://api.themoviedb.org/3/person/?api_key=50fc7d27f2db06b1ae8c54a7c435f8e1&language=en-US';
  private popularUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=50fc7d27f2db06b1ae8c54a7c435f8e1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2020';

  constructor(
    private http: HttpClient
  ) { }

  searchMovies(term: string) {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get(`${this.searchUrl}&query=${term}`);
    
  }

  searchPersons(term: string) {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get(`${this.searchPerson}&query=${term}`);
    
  }

  getPopularMovies() {
    return this.http.get(this.popularUrl);
  }

  getMovie(id: number) {
    const url = `${this.detailsUrl.slice(0,35)}${id}${this.detailsUrl.slice(35)}`;
    return this.http.get(url)
  }
  
  getPerson(id: number) {
    const url = `${this.personsDetails.slice(0,36)}${id}${this.personsDetails.slice(36)}`;
    return this.http.get(url)
  }
}
