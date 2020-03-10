import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  clickCounter: number = 0;
  movies$: Observable<Movie[]>;
  private searchTerms = new Subject<string>();
  
  constructor(
    private movieService: MovieService
  ) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.movies$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.movieService.searchMovies(term)),
      
    );
  }

  selectedMovie: Movie;
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
    
  }

  countClick() {
    this.clickCounter += 1;
  }
  
  setClasses() {
    let myClasses = {
      hidden: this.clickCounter % 2 == 0,
      nothidden: this.clickCounter % 2 != 0
    }
    return myClasses;
  }

}
