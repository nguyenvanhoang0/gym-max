import { TestBed } from '@angular/core/testing';

import { MyWorkoutService } from './my-workout.service';

describe('MyWorkoutService', () => {
  let service: MyWorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyWorkoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
