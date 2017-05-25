export enum CourseType {INSTRUCTOR_LED, SELF_PACED, LIVE_VIRTUAL, BOOTCAMP}

export class Course {
  constructor(public name: string,
              public description: string,
              public type: CourseType,
              public isActive: boolean) {
  }
}
