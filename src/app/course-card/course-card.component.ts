import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    QueryList,
    Self,
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
export class CourseCardComponent implements OnInit {
    //courseService = inject(CoursesService)

    @Input() course: Course;

    @Input() cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();

    constructor(@Self() private coursesService: CoursesService ) {}

    ngOnInit() {}

    onSaveClicked(description:string) {
        this.courseEmitter.emit({...this.course, description});
    }



}
