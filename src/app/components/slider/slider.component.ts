import { Component, OnInit } from '@angular/core';
import { movie } from 'src/app/services/interface/interface';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {


  constructor( private movieService: MovieServiceService){}

  public allMovies: movie[] = [];
  public page = 1;

 ngOnInit(): void {
  this.getmoviedetails(1);
}

getmoviedetails(page:number){
  this.movieService.getpopular(page).subscribe(data => {
    this.allMovies = data.results;
  });
}

}
