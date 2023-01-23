import { Component, Input, Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { observable, Observable, Observer } from 'rxjs';
import { movie, Pesquisa, popular, pagination } from 'src/app/services/interface/interface';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { MatLegacyCardAvatar as MatCardAvatar } from '@angular/material/legacy-card';
import { throws } from 'assert';
import { NewsComponent } from '../news/news.component';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { StyleComponent } from '../style/style.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})


export class HomeComponentComponent implements OnInit {

  public allMovies: movie[] = [];
  public page = 1;
  public movieSelected:movie;
  

  constructor(
    private movieService: MovieServiceService,
    private route: Router){}


  ngOnInit(): void {
  this.getmoviedetails(1);
  }

 // getDetails(movieSelected:movie){
  //  this.route.navigateByUrl("/movieCard"), { state: { movieSelected: movieSelected } };
 // }

  getmoviedetails(page:number){
    this.movieService.getpopular(page).subscribe(data => {
      this.page = data.page
      this.allMovies = data.results;
    });
  }

  
}


