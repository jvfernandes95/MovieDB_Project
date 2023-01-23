import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { movie } from 'src/app/services/interface/interface';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {

  constructor( private movieService: MovieServiceService,
   private route: ActivatedRoute){
    this.selectedsearch = this.route.snapshot.params['selectedsearch']
    }

   selectedsearch:string;
   page = 1
   pes:string
   pesquisaResult:movie[] = []

   ngOnInit() {
    this.pes = this.selectedsearch
    this.getPesquisa(this.pes,this.page);
  }

   getPesquisa(pes:any,page:number){
    this.movieService.search(pes,this.page).subscribe(data => {
        this.page = data.page
        this.pesquisaResult = data.results;
    });
  }

}


  
