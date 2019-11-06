import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { MovieResult } from '../models/movie-result.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public movies: MovieResult[];

  constructor(
    private menu: MenuController,
    private apiService: ApiService,
  ) {

  }

  private formatDate(date: string) {
    const arr = date.split('-');
    return `${arr[2]}/${arr[1]}/${arr[0]}`;
  }

  ngOnInit() {
    this.apiService.getMoviesFromThisYear().subscribe((data) => {
      this.movies = data.map((movie) => {  
        return {
          ...movie,
          release_date: this.formatDate(movie.release_date),
          poster_path: `https://image.tmdb.org/t/p/w300${movie.poster_path}`
      } });
    })
  }

  public toggleMenu(){
    this.menu.toggle('side-menu');
  }

}
