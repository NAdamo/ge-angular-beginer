import {Component, OnInit} from '@angular/core';
import {Course, CourseType, CourseTypeDictionary} from '../course';
import {CourseService} from '../course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
  providers: [CourseService]
})
export class CourseFormComponent implements OnInit {
  course: Course;
  courseTypes = CourseTypeDictionary;

  constructor(private courseService: CourseService) {
    this.course = courseService.getCourse();
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Form submited', this.course);
  }
}
