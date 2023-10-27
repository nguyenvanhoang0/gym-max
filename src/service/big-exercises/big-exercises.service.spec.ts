import { TestBed } from '@angular/core/testing';

import { BigExercisesService } from './big-exercises.service';

describe('BigExercisesService', () => {
  let service: BigExercisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BigExercisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
