import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  popular: Object;

  constructor(
    private movieService: MovieService
    ) { }

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies(): void {
    this.movieService.getPopularMovies()
    .subscribe(
      resp => {
        this.popular = resp['results'];
        console.log(this.popular);

    });
  }



}
