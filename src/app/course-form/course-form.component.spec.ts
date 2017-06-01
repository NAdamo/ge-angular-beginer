import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseFormComponent} from './course-form.component';
import {FormsModule} from '@angular/forms';
import {Course, CourseType } from '../course';
import {CourseInitiatorService} from '../course-initiator.service';
import {CourseService} from '../course.service';


fdescribe('CourseFormComponent', () => {
  let component: CourseFormComponent;
  let fixture: ComponentFixture<CourseFormComponent>;

  const MockInitiator = {
    init: (c: Course) => {
    }
  }
  const MockCourseService = {
    course: new Course('test course', 'testdescrpition', CourseType.LIVE_VIRTUAL, false),
    getCourse: () => {
      return this.course;
    },
    saveCourse: (c:Course) => {
      this.course = c;
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseFormComponent],
      imports: [FormsModule],
      providers: [
        { provide: CourseInitiatorService, useValue: MockInitiator},
        { provide: CourseService, useValue: MockCourseService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
