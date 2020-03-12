import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Movies } from './movie-detail';


@Injectable({
  providedIn: 'root'
})

export class HttpService {

  baseUrl: string = 'https://api.themoviedb.org/3/search/movie?api_key=50fc7d27f2db06b1ae8c54a7c435f8e1&language=en-US&query=parasite&page=1&include_adult=false&query=parasite';


  constructor(private http: HttpClient) { }

  sendGetRequest() {
    return this.http.get(`${this.baseUrl}`);
  }
  }



