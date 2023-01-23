import { Component, Input} from '@angular/core';
import { OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { observable, Observable, Observer } from 'rxjs';
import { movie, Pesquisa, popular, pagination } from 'src/app/services/interface/interface';
import { MatLegacyCardAvatar as MatCardAvatar } from '@angular/material/legacy-card';
import { throws } from 'assert';
import { NewsComponent } from '../news/news.component';
import { StyleComponent } from '../style/style.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {


  constructor( private movieService: MovieServiceService,
    private route: ActivatedRoute){
    this.selectedMovie = this.route.snapshot.params['selectedMovie']
  }
  
  selectedMovie:number; 
  public id:number;
  public moviePage:movie;

  ngOnInit() {
    this.id = this.selectedMovie
    this.getmoviedetailsPage(this.id);
  }

  getmoviedetailsPage(id:number){
    this.movieService.getDetails(this.id).subscribe(data => {
      this.moviePage = data
    });
  }


}


