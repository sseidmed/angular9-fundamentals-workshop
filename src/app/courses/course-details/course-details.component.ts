import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  selectedCourse;
  originalTitle;

  @Input() set course(value) {
    if(value) {
      this.selectedCourse = Object.assign({}, value)
      this.originalTitle = value.title
    }
  };

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

}
