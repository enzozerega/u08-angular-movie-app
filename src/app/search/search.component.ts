import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { MovieService } from '../movie.service';
import { WatchingListService } from '../watching-list.service';

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
    private watchingListService: WatchingListService,
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

  showBox = true;
  onClickedInside(e: Event) {
    this.showBox = true;
  }

  onClickedOutside(e: Event) {
    this.showBox = false;
  }

  addToList(id: number) {
    if (JSON.parse(localStorage.getItem('myList'))) {
      let arr = JSON.parse(localStorage.getItem('myList'));
      arr.push(id);
      this.watchingListService.addMovies(arr);
    } else {
      let arr = [id];
      this.watchingListService.addMovies(arr);
    }
  }


}
