import {Component, OnInit, inject} from '@angular/core';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {Observable} from 'rxjs';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  coursesService = inject (CoursesService);

  courses$: Observable<Course[]>;

  constructor() {}

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
