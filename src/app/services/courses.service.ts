import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {
  http = inject(HttpClient)

  constructor() { }

  loadCourses(): Observable<Course[]> {
    const params = new HttpParams() //build in method
      .set('page', '1')
      .set('pageSize', '10')      //dev tools -> XHR -> http://localhost:4200/api/courses?page=1&pageSize=10     
        
    return this.http.get<Course[]>('/api/courses', {params}) 
  }
}
