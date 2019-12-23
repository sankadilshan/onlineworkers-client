import { TestBed } from '@angular/core/testing';

import { JwtHtppInterceptorService } from './jwt-htpp-interceptor.service';

describe('JwtHtppInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JwtHtppInterceptorService = TestBed.get(JwtHtppInterceptorService);
    expect(service).toBeTruthy();
  });
});
