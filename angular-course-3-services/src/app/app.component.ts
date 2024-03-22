// @ts-ignore
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  InjectionToken,
  OnInit,
  Optional,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import {CoursesService} from './service/courses.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {APP_CONFIG, AppConfig, CONFIG_TOKEN} from './config';

// function coursesServiceProvider(http: HttpClient): CoursesService {
//   return new CoursesService(http);
// }
//
// export const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSE_SERVICE');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    CoursesService
  ]
})
export class AppComponent implements OnInit {
  courses = COURSES;

  constructor(
    @Optional() private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig
  ) {

  }

  // courses$: Observable<Course[]>;

  ngOnInit() {
    // this.courses$ = this.coursesService.loadCourses();
  }

  save(course: Course) {
    const header = new HttpHeaders().set('X-Auth', 'user-id');
    this.coursesService.saveCourse(course)
      .subscribe(
        () => console.log('Course Saved!')
      );
  }

  onEditCourse() {
    const course = this.courses[0];
    const newCourse: any = {...course};
    newCourse.description = 'New Value!';
    this.courses[0] = newCourse;
  }
}
