import {Injectable} from '@angular/core';
import {Course} from './course';
import {CourseInitiatorService} from './course-initiator.service';

@Injectable()
export class CourseService {
  private course: Course;

  constructor(private initiator: CourseInitiatorService) {
    this.course = new Course();
    this.initiator.init(this.course);
  }

  getCourse() {
    return this.course;
  }

  saveCourse(course: Course) {
    this.course = course;
  }

}
