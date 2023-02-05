import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './home/course/course.component';



@NgModule({
  declarations: [
    HomeComponent,
    CourseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
