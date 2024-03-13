import {Component, Inject, InjectionToken, OnInit, inject} from '@angular/core';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {Observable} from 'rxjs';
import { CoursesService } from './services/courses.service';
import { HttpClient } from '@angular/common/http';

/*function coursesServiceProvider(http: HttpClient): CoursesService {
  return new CoursesService(/*http*//*);
}*/

export const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICE');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /*providers: [
    {
      provide: CoursesService,
      useClass: CoursesService,
    }
    //CoursesService,
  ]*/
})
export class AppComponent implements OnInit {  

  courses$: Observable<Course[]>;

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    //console.log(this.coursesService)    
    this.courses$ = this.coursesService.loadCourses()      
  }

  saveValue(course: Course) {
    this.coursesService.saveCourse(course)
      .subscribe(
        () => console.log('Course Saved!')
      )
  }
}
