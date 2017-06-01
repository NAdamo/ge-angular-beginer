import {CourseService} from './course.service';
import {Course} from './course';
import {CourseInitiatorInterface} from './course-initiator.service';
import createSpyObj = jasmine.createSpyObj;
import {afterEach} from 'selenium-webdriver/testing';

describe('CourseService', () => {

  describe('with Mock', () => {
    let service: CourseService;
    let initHaveBeenCalled: boolean;
    class MockInitiator implements CourseInitiatorInterface {
      init(course: Course) {
        initHaveBeenCalled = true;
        return course;
      }
    }
    const initiator = new MockInitiator();

    beforeEach(() => {
      //initHaveBeenCalled = false;
      service = new CourseService(initiator);
    });

    it('should create a Course', () => {
      expect(service.getCourse()).toEqual(jasmine.any(Course));
    });

    it('should call initiator init method', () => {
      const course = new Course();
      expect(initHaveBeenCalled).toBe(true);
    });
  });


  describe('with Spy', () => {
    let service: CourseService;
    const spyInit = createSpyObj('initiator', ['init']);

    beforeEach(() => {
      service = new CourseService(spyInit);
    });

    /*afterEach(() => {
      spyInit.reset();
    });
*/
    it('should call initiator init method', () => {
      expect(spyInit.init).toHaveBeenCalled();
    });
  });
});


