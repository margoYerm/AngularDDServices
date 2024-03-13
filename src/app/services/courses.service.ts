import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';

let counter = 0;
@Injectable()

export class CoursesService {
  http = inject(HttpClient);
  id: number;

  constructor() {
    counter++;
    this.id = counter;
    //console.log("Create CourseService", this.id)
   }

  loadCourses(): Observable<Course[]> {
    const params = new HttpParams() //build in method
      .set('page', '1')
      .set('pageSize', '10')      //dev tools -> XHR -> http://localhost:4200/api/courses?page=1&pageSize=10     
        
    return this.http.get<Course[]>('/api/courses', {params}) 
  }

  saveCourse(course: Course) {
    const headers = new HttpHeaders()
      .set("X-Auth", "userId"); //In Network headers
    return this.http.put(`/api/courses/${course.id}`, course, {headers});
  }
}
