import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { details, movie } from 'src/app/services/interface/interface';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.css'],

})
export class PopComponent implements OnInit {


  constructor( private movieService: MovieServiceService){}

  public id = 0;
  public getListMovie:movie[] = []
  public getResults:any;


  ngOnInit(): void {
    this.getTopMovies()
  }

  getTopMovies(){
    this.movieService.gettop_rated().subscribe(data=>
      this.getListMovie = data.results
      );
  }




}
