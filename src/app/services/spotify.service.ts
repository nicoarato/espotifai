import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {

    console.log("Spoti listo...");
   }

   getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC_qqRj76B0w_ugtgj8S2igUHWyy-SfzOr5wvMsQ8El2wMzbxVJDdFJYvmaU_cZYruMv9zSLrz39HaXVeQ'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});

   }

   getArtista(termino: string){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC_qqRj76B0w_ugtgj8S2igUHWyy-SfzOr5wvMsQ8El2wMzbxVJDdFJYvmaU_cZYruMv9zSLrz39HaXVeQ'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, {headers});
   }

}
