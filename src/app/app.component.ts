import {Component, Inject,  Injector, OnInit} from '@angular/core';
import {Course} from './model/course';
import {CourseCardComponent} from './courses/course-card/course-card.component';
import { CoursesService } from './services/courses.service';
import { AppConfig, CONFIG_TOKEN } from './config';
import { COURSES } from 'src/db-data';
import { createCustomElement } from '@angular/elements';
import { CourseTitleComponent } from './course-title/course-title.component';
import { CourseImageComponent } from './courses/course-image/course-image.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    CourseCardComponent,
    CourseImageComponent,    
  ]
})

export class AppComponent implements OnInit {

  //courses$: Observable<Course[]>;
  courses: Course[] = COURSES;  
  coursesTotal = this.courses.length;

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig,
    private injector: Injector
  ) {}

  ngOnInit() {
    /*this.courses$ = this.coursesService.loadCourses();*/
    /*this.coursesService.loadCourses() 
      .subscribe(courses => {
        this.courses = courses;        
      })*/ 
    const htmlElement = createCustomElement(
      CourseTitleComponent, {injector: this.injector}
      )  
    customElements.define('course-title', htmlElement)   
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
    console.log('Edit course was push')
  }  
}
