import { TestBed } from '@angular/core/testing';

import { BigExerciseGeneralGenreService } from './big-exercise-general-genre.service';

describe('BigExerciseGeneralGenreService', () => {
  let service: BigExerciseGeneralGenreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BigExerciseGeneralGenreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
