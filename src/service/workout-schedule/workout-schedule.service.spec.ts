import { TestBed } from '@angular/core/testing';

import { WorkoutScheduleService } from './workout-schedule.service';

describe('WorkoutScheduleService', () => {
  let service: WorkoutScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
