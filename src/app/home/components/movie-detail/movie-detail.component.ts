import { Component, OnInit, Input } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { MovieResult } from 'src/app/models/movie-result.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  @Input() movieDetails: MovieResult;
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async dismissModal() {
    await this.modalController.dismiss()
  }

}
