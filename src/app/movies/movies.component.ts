import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movie.service';
import { WatchingListService } from '../watching-list.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  popular: Object;
  
  constructor(
    private movieService: MovieService,
    private watchingListService: WatchingListService
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
