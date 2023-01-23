import { Component, OnInit } from '@angular/core';
import { movie } from 'src/app/services/interface/interface';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  constructor( private movieService: MovieServiceService){}

  public genreId:movie[] = [];
  public id = 28;

  ngOnInit(): void {
    this.getgenrebyid(28);
  }

  getgenrebyid(id:any){
    this.movieService.getByGenreId(id).subscribe(data => {
      this.genreId = data.results;
    });
  }

}
