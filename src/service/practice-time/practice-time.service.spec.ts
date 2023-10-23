import { TestBed } from '@angular/core/testing';

import { PracticeTimeService } from './practice-time.service';

describe('PracticeTimeService', () => {
  let service: PracticeTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracticeTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
