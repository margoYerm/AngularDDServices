import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    Attribute,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    QueryList,
    Self,
    SimpleChanges,
    SkipSelf,
    ViewEncapsulation,
    inject
} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';
import { CoursesService } from '../services/courses.service';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    providers: [CoursesService]
})
export class CourseCardComponent implements OnInit, OnDestroy, 
OnChanges, AfterContentChecked {
    //courseService = inject(CoursesService)

    @Input() course: Course;
    @Input() cardIndex: number;    

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();

    constructor(
        private coursesService: CoursesService, 
        @Attribute('type') private type: string,        
    ) {console.log('constructor called', this.course)}
    
    ngOnInit() {
        console.log('ngOnInit called', this.course)
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges called', changes)
    }

    ngAfterContentChecked(): void {
        console.log('ngAfterContentChecked called');
        this.course.description = 'ngAfterContentChecked';
        this.course.category = 'ADVANCED';
        //this.course.iconUrl = '';
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy called', this.course);
    }

    onSaveClicked(description: string) {
        this.courseEmitter.emit({...this.course, description});
    }

    onTitleChanged(newTitle) {
        this.course.description = newTitle;
    }

}
