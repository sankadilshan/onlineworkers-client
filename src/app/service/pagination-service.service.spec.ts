import { TestBed } from '@angular/core/testing';

import { PaginationServiceService } from './pagination-service.service';

describe('PaginationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaginationServiceService = TestBed.get(PaginationServiceService);
    expect(service).toBeTruthy();
  });
});
