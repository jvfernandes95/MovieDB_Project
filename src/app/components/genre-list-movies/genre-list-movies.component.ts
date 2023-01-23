import { Component, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { movie } from 'src/app/services/interface/interface';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-genre-list-movies',
  templateUrl: './genre-list-movies.component.html',
  styleUrls: ['./genre-list-movies.component.css']
})
export class GenreListMoviesComponent {
  

  constructor( private movieService: MovieServiceService,
    private router: Router,
    private route: ActivatedRoute,){
    this.selectedgenre = this.route.snapshot.params['selectedgenre']
  }

  selectedgenre:number;
  selectedsearch:movie[] = [];
  public ListById: movie[] = [];
  public id:number;
  
  ngOnInit(): void {
    if (this.selectedgenre != null){
    this.id = this.selectedgenre
    this.getDetailsgenre(this.id);
    } else {

    }
  }

  getDetails(movieSelected:movie){
    this.router.navigateByUrl("/movieCard"), { state: { movieSelected: movieSelected } };
  }

  getDetailsgenre(id:number){
    this.movieService.getByGenreId(id).subscribe(data=>
      this.ListById = data.results
      );
  }
}
