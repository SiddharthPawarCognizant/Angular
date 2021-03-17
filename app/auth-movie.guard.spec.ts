import { TestBed } from '@angular/core/testing';

import { AuthMovieGuard } from './auth-movie.guard';

describe('AuthMovieGuard', () => {
  let guard: AuthMovieGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthMovieGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
