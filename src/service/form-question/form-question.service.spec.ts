import { TestBed } from '@angular/core/testing';

import { FormQuestionService } from './form-question.service';

describe('FormQuestionService', () => {
  let service: FormQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
