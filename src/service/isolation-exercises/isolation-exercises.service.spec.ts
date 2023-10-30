import { TestBed } from '@angular/core/testing';

import { IsolationExercisesService } from './isolation-exercises.service';

describe('IsolationExercisesService', () => {
  let service: IsolationExercisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsolationExercisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
