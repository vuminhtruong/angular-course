import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input, OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Output, SimpleChanges
} from '@angular/core';
import {Course} from '../model/course';
import {CoursesService} from '../service/courses.service';

// import {COURSES_SERVICE} from '../app.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit, OnDestroy, OnChanges {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseChanged')
  courseEmitter = new EventEmitter<Course>();


  constructor(@Optional() private coursesService: CoursesService, private cd: ChangeDetectorRef) {
    console.log('constructor', this.course);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('ngOnInit', this.course);
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({...this.course, description});
  }

  onTitleChanged(newTitle: string) {
    this.course.description = newTitle;
  }

  ngOnDestroy(): void {
    console.log('onDestroy');
  }
}
