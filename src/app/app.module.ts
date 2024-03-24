import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightedDirective } from './courses/directives/highlighted.directive';
import { NgxUnlessDirective } from './courses/directives/ngx-unless.directive';
import {HttpClientModule} from '@angular/common/http';
import { CoursesModule } from './courses/courses.module';

@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoursesModule,
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
