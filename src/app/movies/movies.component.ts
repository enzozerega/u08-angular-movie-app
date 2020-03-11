import { Component, OnInit } from '@angular/core';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies : Movie[];

  constructor(
    private movieService: MovieService, private messageService: MessageService) { }

  ngOnInit(): void {
    //this.getMovies();
  }

  //getMovies(): void {
    //this.movieService.getMovies().subscribe(movies => this.movies = movies);
  //}

  selectedMovie: Movie;
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

}
