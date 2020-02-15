import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  nuevasCanciones: any[] = [];

  constructor(private spotify: SpotifyService) {

    this.spotify.getNewReleases().subscribe( data => {
      console.log(data.albums.items);
      this.nuevasCanciones = data.albums.items;
    });
  }

}
