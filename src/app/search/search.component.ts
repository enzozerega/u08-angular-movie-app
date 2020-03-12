import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  oneAtATime: boolean = true;
  movies: Object;
  persons: Object;
  private searchTerms = new Subject<string>();
  
  constructor(
    private movieService: MovieService
  ) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
      this.searchTerms.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((term: string) => this.movieService.searchMovies(term))).subscribe( resp => {
        this.movies = resp['results'];
        console.log('movies: ',this.movies);
      }
      );
      
      this.searchTerms.pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap((term: string) => this.movieService.searchPersons(term))).subscribe( resp => {
          this.persons = resp['results'];
          console.log('persons: ', this.persons);
        }
        );
  }
}
