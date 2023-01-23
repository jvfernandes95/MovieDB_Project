
import { Component, OnInit } from '@angular/core';
import { movie } from 'src/app/services/interface/interface';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public movie_List: movie[] = [];
  id: any = [];
  page = 1;
  defaultImage = "https://blog.savegnago.com.br/wp-content/uploads/2021/07/tipos-de-filme01-1-1.jpg";
  


  constructor( private movieService: MovieServiceService){}

  getmovielist(){
    this.movieService.getmovie(this.id,this.page).subscribe(data => {
     this.movie_List = data.results;
    });
 }

  ngOnInit(): void {
    this.getMoviedetails(1,1)
    }

    getMoviedetails(id:any,page:number){
      this.movieService.getmovie(id,page).subscribe(data => {
        this.page = data.page
        this.movie_List = data.results;
      });
    }
}


