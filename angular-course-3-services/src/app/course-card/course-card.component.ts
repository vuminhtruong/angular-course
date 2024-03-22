import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Optional, Output} from '@angular/core';
import {Course} from '../model/course';
import {CoursesService} from '../service/courses.service';

// import {COURSES_SERVICE} from '../app.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
