import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { HomeComponentComponent } from '../home-component/home-component.component';
import { NewsComponent } from '../news/news.component';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { movie, Pesquisa } from 'src/app/services/interface/interface';
import { Pipe, PipeTransform } from '@angular/core';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})



export class NavbarComponent implements OnInit {

   routes: Routes = [
    { path: '', component: HomeComponentComponent },
    { path: 'news', component: NewsComponent },
  ];

  public pesquisaResult: Pesquisa[] = [];
  public pes:string;
  page = 1;
  movieSelectesearch:movie


  constructor(private movieService: MovieServiceService,
    private route: Router) {}
  

  ngOnInit(): void {
    
  }

  pesquisa(pesq:string){
  this.pes = this.pes
  }

  //passar somente o Pes(da pesquisa) na url e receber no componente
 //destino com o tratamento certo, fazer um if, ou novo componente
}
