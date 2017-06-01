import {TestBed, inject} from '@angular/core/testing';

import {CourseInitiatorService} from './course-initiator.service';
import {Course, CourseType} from './course';

describe('CourseInitiatorService', () => {
  let service: CourseInitiatorService;
  let course: Course;

  beforeEach(() => {
    // Given
    service = new CourseInitiatorService();
    course = new Course();
  });

  it('should set describe ', () => {
    // When
    service.init(course);
    // Then
    expect(course.description).toBe('This is the course description');
  });

  it('should set course', () => {
    const expectedCourse = {
      name: '',
      description: 'This is the course description',
      type: CourseType.BOOTCAMP,
      isActive: false
    };
    // When
    service.init(course);
    // Then
    expect(course).toEqual(jasmine.objectContaining(expectedCourse));
  });

  it('should return an object typed Course', () => {
    service.init(course);
    expect(course).toEqual(jasmine.any(Course));
  });
});
