import { Pipe, PipeTransform } from "@angular/core";
import { Course } from "../model/course";

@Pipe({
  name: 'filterByCategory',
  //pure: false,
})

export class FilterByCategoryPipe implements PipeTransform {
  transform (courses: Course[], category: string) {
    //console.log('Called FilterByCategoryPipe');
    return courses.filter(course => course.category === category)
  }
}