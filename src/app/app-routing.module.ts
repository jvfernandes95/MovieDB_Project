import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { GenreListMoviesComponent } from './components/genre-list-movies/genre-list-movies.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { NewsComponent } from './components/news/news.component';
import { PopComponent } from './components/pop/pop.component';
import { StyleComponent } from './components/style/style.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';



const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'Filmes', component: NewsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'pop', component: PopComponent },
  { path: 'movieCard/:selectedMovie', component: MovieCardComponent},
  { path: 'genrelistMovies/:selectedgenre', component:GenreListMoviesComponent},
  { path: 'search/:selectedsearch', component:SearchResultsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
