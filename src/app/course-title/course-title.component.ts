import { Component, Input } from '@angular/core';

@Component({
  selector: 'course-title',
  templateUrl: './course-title.component.html',
  styleUrls: ['./course-title.component.css'], 
  standalone: true
})
export class CourseTitleComponent {
  @Input() title: string;


}
