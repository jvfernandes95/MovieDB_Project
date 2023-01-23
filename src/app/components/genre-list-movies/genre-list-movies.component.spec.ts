import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreListMoviesComponent } from './genre-list-movies.component';

describe('GenreListMoviesComponent', () => {
  let component: GenreListMoviesComponent;
  let fixture: ComponentFixture<GenreListMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreListMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenreListMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
