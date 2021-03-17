import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMovieComponent } from './login-movie.component';

describe('LoginMovieComponent', () => {
  let component: LoginMovieComponent;
  let fixture: ComponentFixture<LoginMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
