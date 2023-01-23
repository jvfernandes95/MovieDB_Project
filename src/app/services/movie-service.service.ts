import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { details, genre, Image, movie, Pesquisa, popular } from './interface/interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  private URL = 'https://api.themoviedb.org/3';
  private apiKey = 'api_key=f74f1019f66ff6511a8fa5708cb8d29c';
  private image_path = 'https://image.tmdb.org/t/p/w185/';
  private id: any;


  constructor( private http:  HttpClient ) { }


  getpopular(page: number):Observable<popular>{
    return this.http.get<popular>(`${this.URL}/movie/popular?${this.apiKey}&language=pt-BR&page=${page}`)
  }

  // Todos os filmes com filtro de requisição
  getmovie(id: any,page: number): Observable<movie>{
    return this.http.get<movie>(`${this.URL}/discover/movie?${this.apiKey}&language=pt-BR&sort_by=original_title.asc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}`);
  }

  search(query:any,page:number): Observable<Pesquisa>{
   return this.http.get<Pesquisa>(`${this.URL}/search/movie?${this.apiKey}&query=${query}&page=${page}`);
  }

  getgenre(){
    return this.http.get<genre>(`${this.URL}/genre/movie/list?${this.apiKey}&language=pt-BR`)
  }

  getByGenreId(id:any): Observable<genre>{
    return this.http.get<genre>(`${this.URL}/discover/movie?${this.apiKey}&with_genres=${id}&language=pt-BR`)
  }

  gettop_rated(): Observable<movie>{
    return this.http.get<movie>(`${this.URL}/movie/top_rated?${this.apiKey}&language=pt-BR`)
  }

  getDetails(id:number): Observable<movie>{
    return this.http.get<movie>(`${this.URL}/movie/${id}?${this.apiKey}&language=pt-BR&`)
  }
}
