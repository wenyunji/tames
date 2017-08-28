import { TestBed, inject } from '@angular/core/testing';

import { DriectiveService } from './driective.service';

describe('DriectiveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DriectiveService]
    });
  });

  it('should be created', inject([DriectiveService], (service: DriectiveService) => {
    expect(service).toBeTruthy();
  }));
});
