import {
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
    OnInit,
    Output,
    QueryList,
    Self,
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
    providers: [CoursesService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit {
    //courseService = inject(CoursesService)

    @Input() course: Course;
    @Input() cardIndex: number;
    //@Input() type: string;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();

    constructor(
        private coursesService: CoursesService, 
        @Attribute('type') private type: string,
        private cd: ChangeDetectorRef
    ) {
        console.log(type); //10 x beginner
    }

    ngOnInit() {}

    onSaveClicked(description: string) {
        this.courseEmitter.emit({...this.course, description});
    }

    onTitleChanged(newTitle) {
        this.course.description = newTitle;
    }

}
