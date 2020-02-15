import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {

    console.log("Spoti listo...");
   }

   getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAPscWAx1NUrV4A5427LFDEhKA9gToWx9DqoCiXmsYzfOZAd3rVcIneQjfvetZdELdK2XoGOdlzG-NsRRA'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .pipe( map( data => data['albums'].items) );

   }

   getArtista(termino: string){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAPscWAx1NUrV4A5427LFDEhKA9gToWx9DqoCiXmsYzfOZAd3rVcIneQjfvetZdELdK2XoGOdlzG-NsRRA'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, {headers})
    .pipe( map( data => data['artists'].items ) );
   }

}