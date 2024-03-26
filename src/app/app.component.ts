import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Inject, InjectionToken, OnInit, Optional, inject} from '@angular/core';
import {Course} from './model/course';
import {CourseCardComponent} from './courses/course-card/course-card.component';
import {Observable} from 'rxjs';
import { CoursesService } from './services/courses.service';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG, AppConfig, CONFIG_TOKEN } from './config';
import { COURSES } from 'src/db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  //courses$: Observable<Course[]>;
  courses: Course[] = COURSES;  
  coursesTotal = this.courses.length;

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig
  ) {}

  ngOnInit() {
    /*this.courses$ = this.coursesService.loadCourses();*/
    /*this.coursesService.loadCourses() 
      .subscribe(courses => {
        this.courses = courses;        
      })*/      
  }  

  saveValue(course: Course) {
    this.coursesService.saveCourse(course)
      .subscribe(
        () => console.log('Course Saved!')
      )
  }
  
  onEditCourse() {    
    //this.courses[0].description = 'ngOnChanges'; //It's not working because @Input()course reacted to the changing course, not course.property
    /*const course = this.courses[0];
    const newCourse = {
      ...course,
      description: 'ngOnChanges'
    }
    this.courses[0] = newCourse;*/
    this.courses[1].category = 'ADVANCED';
  }  
}
