import {Component, Inject, InjectionToken, OnInit, Optional, inject} from '@angular/core';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {Observable} from 'rxjs';
import { CoursesService } from './services/courses.service';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG, AppConfig, CONFIG_TOKEN } from './config';

/*function coursesServiceProvider(http: HttpClient): CoursesService {
  return new CoursesService(/*http*//*);
}*/

export const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICE');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ CoursesService
    /*{
      provide: CONFIG_TOKEN,
      //useFactory: () => APP_CONFIG, //or next line
      useValue: APP_CONFIG
    } */   
  ]
})
export class AppComponent implements OnInit {  

  courses$: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig) {
      console.log(config)
    }

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
