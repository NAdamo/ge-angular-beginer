import {Injectable} from '@angular/core';
import {Course, CourseType} from './course';
@Injectable()
export class CourseInitiatorService {

  constructor() {
  }

  init(course: Course) {
    course.name = '';
    course.description = 'This is the course description';
    course.type = CourseType.BOOTCAMP;
    course.isActive = false;
  }
}
