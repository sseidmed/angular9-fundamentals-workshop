import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})
export class LessonsListComponent implements OnInit {

  title = 'Hello Workshop';
  @Input() lessons;
  @Input() currLesson;


  @Output() select = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
