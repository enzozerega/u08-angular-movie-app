import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Movies } from '../movie-detail';


@Component({
  selector: 'app-watching-list',
  templateUrl: './watching-list.component.html',
  styleUrls: ['./watching-list.component.scss']
})
export class WatchingListComponent implements OnInit {

  movies: Object;


  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.httpService.sendGetRequest().subscribe(
      resp => {
        console.log(resp);
        this.movies = resp['results'];
        console.log(this.movies);
      }

    );


  }

}
