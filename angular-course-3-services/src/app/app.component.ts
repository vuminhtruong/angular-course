// @ts-ignore
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  Inject,
  InjectionToken,
  OnInit,
  Optional,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {Course} from './model/course';
import {CoursesService} from './service/courses.service';
import {HttpHeaders} from '@angular/common/http';
import {AppConfig, CONFIG_TOKEN} from './config';
import {COURSES} from '../db-data';

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
  ],
})
export class AppComponent implements OnInit, DoCheck {
  // courses$: Observable<Course[]>;
  courses: Course[] = COURSES;

  constructor(
    @Optional() private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig,
    private cd: ChangeDetectorRef
  ) {

  }

  // courses$: Observable<Course[]>;

  ngOnInit() {
    // this.courses$ = this.coursesService.loadCourses();
    // this.coursesService.loadCourses().subscribe(
    //   courses => {
    //     this.courses = courses;
    //   }
    // );
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
    this.courses[0] = {
      ...course,
      description: 'ngOnChanges'
    };
  }

  ngDoCheck(): void {
    this.cd.markForCheck();
  }
}
