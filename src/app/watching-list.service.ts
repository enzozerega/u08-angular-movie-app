import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WatchingListService {

  constructor() { }

  addMovies(myMovies: Array<any>) {
    localStorage.setItem('myList', JSON.stringify(myMovies));
  }

  watched(watchedMovies: Array<any>) {
    localStorage.setItem('watched', JSON.stringify(watchedMovies));
  }
}
