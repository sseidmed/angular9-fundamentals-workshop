import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'JavaScript The Really REALLY HARD PARTS',
      description: 'Worship Will Sentance',
      percentComplete: 83,
      favorite: true
    }
  ];

  constructor() { }

  all() {
    return this.courses;
  }

  find(courseId) {

  }

  create(course) {
    console.log("Create course", course)
  }

  update(course) {
    console.log("Update course", course)
  }

  delete(courseId) {
    console.log("Delete course", courseId)
  }
}
