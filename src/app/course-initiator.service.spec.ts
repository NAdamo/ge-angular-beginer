import { TestBed, inject } from '@angular/core/testing';

import { CourseInitiatorService } from './course-initiator.service';

describe('CourseInitiatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseInitiatorService]
    });
  });

  it('should ...', inject([CourseInitiatorService], (service: CourseInitiatorService) => {
    expect(service).toBeTruthy();
  }));
});
