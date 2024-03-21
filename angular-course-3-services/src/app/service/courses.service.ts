import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Course} from '../model/course';

let counter = 0;

// @Injectable({
//   providedIn: 'root'
// })
@Injectable(
  {providedIn: 'root'}
)
export class CoursesService {
  id: number;
  private port: String = 'http://localhost:9000';

  constructor(private http: HttpClient) {
    counter++;
    this.id = counter;
  }

  loadCourses(): Observable<Course[]> {
    const params = new HttpParams()
      .set('page', '1')
      .set('size', '10');
    return this.http.get<Course[]>(this.port + '/api/courses', {params});
  }

  saveCourse(course: Course) {
    return this.http.put(this.port + `/api/courses/${course.id}`, course);
  }
}
