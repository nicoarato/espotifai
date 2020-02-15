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
        'Authorization': 'Bearer BQBHApvm2Tw0v3IA-KQkLCK52t1uFMm_3wBvuL1GnbKUuMyPpZ2xs-n_G5AWsj80IlExZxy-r0vlvxWEBo4'
      });

      return this.http.get(url, { headers });
    }


   getNewReleases(){

    return this.getQuery('browse/new-releases')
      .pipe( map( data => data['albums'].items) );

   }

   getArtistas(termino: string){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
    .pipe( map( data => data['artists'].items ) );
   }

   getArtista(id: string){

   return this.getQuery(`artists/${id}`);
   //.pipe( map( data => data['artists']) );
    
    //console.log(this.getQuery(`artists/${id}`));
   }

}
