import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { NewsComponent } from './components/news/news.component';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { PopComponent } from './components/pop/pop.component';


import { SliderComponent } from './components/slider/slider.component';
import { StyleComponent } from './components/style/style.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieServiceService } from './services/movie-service.service';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
//import {MaterialModule} from './material.module';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list';
import {MatLegacySliderModule as MatSliderModule} from '@angular/material/legacy-slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GenreListMoviesComponent } from './components/genre-list-movies/genre-list-movies.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponentComponent,
    NewsComponent,
    PopComponent,
    SliderComponent,
    StyleComponent,
    CategoriesComponent,
    MovieCardComponent,
    GenreListMoviesComponent,
    SearchResultsComponent,







  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatListModule,
    FormsModule,
    MatIconModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    MatToolbarModule,
    NgbModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponentComponent },
      { path: 'news', component: NewsComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'pop', component: PopComponent },

    ])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
