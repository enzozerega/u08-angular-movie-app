import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Movie } from '../../movie';
import { SearchComponent } from '../search.component';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  oneAtATime: boolean = true;

  clickCounter: number = 0;
  movies$: Observable<Movie[]>;

  
  constructor(
    private searchComponent : SearchComponent,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
  }

}