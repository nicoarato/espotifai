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

    getQuery(query: string){
      const url = `https://api.spotify.com/v1/${ query }`;

      const headers = new HttpHeaders({
        'Authorization': 'Bearer BQCduoQX1gblYq62zQ0RS-NZxvZgD6slmJSdFQ0vkM0nbuD_vmQQ49HVKJ14aDoeGIXgJfxLXuIfDe8tKFs'
      });

      return this.http.get(url, { headers });
    }


   getNewReleases(){

    return this.getQuery('browse/new-releases')
      .pipe( map( data => data['albums'].items) );

   }

   getArtista(termino: string){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
    .pipe( map( data => data['artists'].items ) );
   }

}
