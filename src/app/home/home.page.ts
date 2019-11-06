import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { MovieResult } from '../models/movie-result.model';
import { ApiService } from '../services/api.service';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

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
    private modalController: ModalController,
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
          poster_path: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
          backdrop_path: `https://image.tmdb.org/t/p/w300${movie.backdrop_path}`
      } });
    })
  }

  public toggleMenu(){
    this.menu.toggle('side-menu');
  }

  async presentMovieDetailModal(movieDetails: MovieResult) {
    const modal = await this.modalController.create({
      component: MovieDetailComponent,
      componentProps: {
        movieDetails
      }
    });
    return await modal.present();
  }

}
