import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
  ) { }

  ngOnInit(): void {
    this.getMovie();
    
  }

  directors: string;

  getMovie(): void {
    
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
      .subscribe(
        resp => {
          this.movie = resp;
          console.log(this.movie);
          let crew = resp['credits']['crew'];
          console.log(crew);

          let directors = [];
          for (let i = 0, len = crew.length; i < len; i++) {
            if (crew[i]['job'] == 'Director') {
            directors.push(crew[i]['name']);
            }
          }
          
          this.directors = directors.join(', ');;
          console.log(`Directors:${directors}`)
  
          }
        );

  }

}
