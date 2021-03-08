import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class Servicios {
  messages: string[] = [];
  add(message: string) {
    this.messages.push(message);
  }
  constructor(private http: HttpClient) { }
  getMoviesID(parametros){
    return this.http.get('https://api.themoviedb.org/3/tv/on_the_air?api_key=5e31da8ad20034da2138b2031d8a2420&language=es-EU&page=1');
  }

  
  
  getOnAir(): Observable<any>{
    return this.http.get('https://api.themoviedb.org/3/tv/on_the_air?api_key=5e31da8ad20034da2138b2031d8a2420&language=es-EU&page=1');
  }
  
  getMovies(): Observable<any>{
    return this.http.get('https://api.themoviedb.org/3/tv/on_the_air?api_key=5e31da8ad20034da2138b2031d8a2420&language=es-EU&page=1');
  }
}




