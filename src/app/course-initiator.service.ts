import {Injectable} from '@angular/core';
import {Course, CourseType} from './course';

export interface CourseInitiatorInterface {
  init(Course);
}

@Injectable()
export class CourseInitiatorService implements CourseInitiatorInterface{

  constructor() {
  }

  init(course: Course) {
    course.name = '';
    course.description = 'This is the course description';
    course.type = CourseType.BOOTCAMP;
    course.isActive = false;
  }
}
