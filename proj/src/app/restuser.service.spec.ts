import { TestBed } from '@angular/core/testing';

import { RestuserService } from './restuser.service';

describe('RestuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestuserService = TestBed.get(RestuserService);
    expect(service).toBeTruthy();
  });
});
