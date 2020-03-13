import { Component, OnInit } from '@angular/core';

import { WatchingListService } from '../watching-list.service';
import { MovieService } from '../movie.service';



@Component({
  selector: 'app-watching-list',
  templateUrl: './watching-list.component.html',
  styleUrls: ['./watching-list.component.scss']
})
export class WatchingListComponent implements OnInit {
  
  constructor(
    private watchingListService: WatchingListService,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.showList();
    this.showWatched();
  }
  myList: Array<number> = [];
  myListDetails: Object;
  showList(): void {
    if (JSON.parse(localStorage.getItem('myList'))) {
    this.myList = JSON.parse(localStorage.getItem('myList'));
    console.log('mylist: ', this.myList);
    let objects = [];
    this.myList.forEach(element => {
      this.movieService.getMovie(element).subscribe(
        resp => {
          objects.push(resp);
        }
      )}
    );
    console.log(objects);
    this.myListDetails = objects;
      }
  }
  watchedMoviesList: Array<number> = [];
  watchedFullList: Object;
  showWatched() {
    if (JSON.parse(localStorage.getItem('watched'))) {
      this.watchedMoviesList = JSON.parse(localStorage.getItem('watched'));
      let objects = [];
      this.watchedMoviesList.forEach(element => {
        this.movieService.getMovie(element).subscribe(
          resp => {
            objects.push(resp);
          }
        )}
      );
      console.log(objects);
      this.watchedFullList = objects;
    }
  }

  removeMovie(id: number) {
    for( var i = 0; i < this.myList.length; i++) {
      if ( this.myList[i] === id) {
        this.myList.splice(i, 1);
        i--;
      }
    }
    localStorage.removeItem('myList');
    this.watchingListService.addMovies(this.myList);
    console.log('removed :', this.myList);
    this.showList();
  }
  
  removeWatchedMovie(id: number) {
    for( var i = 0; i < this.watchedMoviesList.length; i++) {
      if ( this.watchedMoviesList[i] === id) {
        this.watchedMoviesList.splice(i, 1);
        i--;
      }
    }
    localStorage.removeItem('watched');
    this.watchingListService.watched(this.watchedMoviesList);
    this.showWatched();
  }

  addToWatched(id: number) {
    if (JSON.parse(localStorage.getItem('watched'))) {
      let arr = JSON.parse(localStorage.getItem('watched'));
      arr.push(id);
      this.watchingListService.watched(arr);
    } else {
      let arr = [id];
      this.watchingListService.watched(arr);
    }
    this.removeMovie(id);
    this.showWatched();

  }
  
}
