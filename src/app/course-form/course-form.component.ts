import {Component, OnInit} from '@angular/core';
import {Course, CourseType} from '../course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  course: Course;

  constructor() {
  }

  ngOnInit() {
    this.course = new Course('', 'This is the course description', CourseType.BOOTCAMP, false);
  }

  onSubmit() {
    console.log('Form submited', this.course);
  }
}
