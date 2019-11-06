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

  ngOnInit() {
    this.apiService.getMoviesFromThisYear().subscribe((data) => {
      this.movies = data;
    })
  }

  toggleMenu(){
    this.menu.toggle('side-menu');
  }
}
