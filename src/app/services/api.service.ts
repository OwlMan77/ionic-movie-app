import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { environment } from 'src/environments/environment';

import { MovieApiResponse } from 'src/app/models/movie-api-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public postUrl = 'https://image.tmdb.org/t/p/w500/';

  constructor(
    private http: HttpClient
  ) { }

  private getCurrentYear(): string {
    return new Date().getFullYear().toString(); 
  }

  public getMoviesFromThisYear(): Observable<MovieApiResponse> {
    return this.http.get<MovieApiResponse>(`https://api.themoviedb.org/3/discover/movie?api_key=${environment.movieAPIKey}&language=en-UK&sort_by=popularity.desc&include_adult=false&include_video=false&primary_release_year=${this.getCurrentYear()}`);
  }
}
