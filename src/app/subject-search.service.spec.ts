import { TestBed } from '@angular/core/testing';

import { SubjectSearchService } from './subject-search.service';

describe('SubjectSearchService', () => {
  let service: SubjectSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
