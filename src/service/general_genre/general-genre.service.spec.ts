import { TestBed } from '@angular/core/testing';

import { GeneralGenreService } from './general-genre.service';

describe('GeneralGenreService', () => {
  let service: GeneralGenreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralGenreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
