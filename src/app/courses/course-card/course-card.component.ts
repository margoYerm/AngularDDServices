import {    
    Attribute,   
    Component,    
    EventEmitter,
    Input,  
    OnInit,
    Output,   
} from '@angular/core';
import {Course} from '../../model/course';
import { CoursesService } from '../../services/courses.service';
import { NgIf } from '@angular/common';
import { CourseTitleComponent } from 'src/app/course-title/course-title.component';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    providers: [CoursesService],
    standalone: true,
    imports: [
        NgIf,
        CourseTitleComponent,
        CourseImageComponent
    ]
})
export class CourseCardComponent implements OnInit {
    //courseService = inject(CoursesService)

    @Input() course: Course;
    @Input() cardIndex: number;    

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();

    constructor(
        private coursesService: CoursesService, 
        @Attribute('type') private type: string,        
    ) {}
        
    ngOnInit() {}    

    onSaveClicked(description: string) {
        this.courseEmitter.emit({...this.course, description});
    }

    onTitleChanged(newTitle) {
        this.course.description = newTitle;
    }

}
