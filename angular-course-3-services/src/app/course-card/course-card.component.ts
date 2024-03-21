import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter, Inject,
  Input,
  OnInit, Optional,
  Output,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';
import {CoursesService} from '../service/courses.service';

// import {COURSES_SERVICE} from '../app.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseChanged')
  courseEmitter = new EventEmitter<Course>();


  constructor(@Optional() private coursesService: CoursesService) {

  }

  ngOnInit() {

  }


  onSaveClicked(description: string) {
    this.courseEmitter.emit({...this.course, description});
  }

  onTitleChanged(newTitle: string) {
    this.course.description = newTitle;
  }
}
