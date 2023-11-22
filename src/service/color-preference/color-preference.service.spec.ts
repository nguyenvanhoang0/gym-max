import { TestBed } from '@angular/core/testing';

import { ColorPreferenceService } from './color-preference.service';

describe('ColorPreferenceService', () => {
  let service: ColorPreferenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorPreferenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
