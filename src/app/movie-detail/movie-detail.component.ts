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
  cast: string;
  countries: string;
  languages: Array<string>;

  getMovie(): void {
    
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
      .subscribe(
        resp => {
          this.movie = resp;
          let directors = [];
          for (let i = 0, len = resp['credits']['crew'].length; i < len; i++) {
            if (resp['credits']['crew'][i]['job'] == 'Director') {
              directors.push(resp['credits']['crew'][i]['name']);
            }
          }
          this.directors = directors.join(', ');  
          
          let cast = [];
          for (let i = 0, len = 10; i < len; i++) {
            cast.push(resp['credits']['cast'][i]['name']);
          }
          this.cast = cast.join(', ');

          let countries = [];
          for (let i = 0, len = resp['production_countries'].length; i < len; i++) {
            countries.push(resp['production_countries'][i]['name']);
          }
          this.countries = countries.join(', ');

          let languages = [];
          for (let i = 0, len = resp['spoken_languages'].length; i < len; i++) {
            languages.push(resp['spoken_languages'][i]['iso_639_1']);
          }
          this.languages = languages;


        }
        );

  }

}
