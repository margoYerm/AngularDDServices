import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  courses$: Observable<Course[]>;

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    const params = new HttpParams() //build in method
      .set('page', '1')
      .set('pageSize', '10')      //dev tools -> XHR -> http://localhost:4200/api/courses?page=1&pageSize=10     
        //val => console.log(val)
        this.courses$ = this.http.get<Course[]>('/api/courses', {params})      
  }
}
