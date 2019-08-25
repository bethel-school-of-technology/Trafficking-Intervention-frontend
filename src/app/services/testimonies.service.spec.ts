import { TestBed } from '@angular/core/testing';

import { TestimoniesService } from './testimonies.service';

describe('TestimoniesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestimoniesService = TestBed.get(TestimoniesService);
    expect(service).toBeTruthy();
  });
});
