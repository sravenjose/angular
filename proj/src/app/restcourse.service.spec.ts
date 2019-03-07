import { TestBed } from '@angular/core/testing';

import { RestcourseService } from './restcourse.service';

describe('RestcourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestcourseService = TestBed.get(RestcourseService);
    expect(service).toBeTruthy();
  });
});
