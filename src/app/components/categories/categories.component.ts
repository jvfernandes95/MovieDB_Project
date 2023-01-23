import { Component, OnInit } from '@angular/core';
import { genre, movie } from 'src/app/services/interface/interface';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatLegacyCardAvatar as MatCardAvatar } from '@angular/material/legacy-card';
import { throws } from 'assert';
import { NewsComponent } from '../news/news.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor( private movieService: MovieServiceService,
    private route: Router){}

  public getList: any[] = [];
  public ListById: movie[] = [];
  public movieSelectedgenre:movie;
  

  ngOnInit(): void {
    this.getGenrelist()
  }

  getDetails(movieSelectedgenre:movie){
    this.route.navigateByUrl("/genrelistMovies"), { state: { movieSelectedgenre: movieSelectedgenre } };
  }

  getGenrelist(){
    this.movieService.getgenre().subscribe(data=>
      this.getList = data.genres
      );
  }

  
}
