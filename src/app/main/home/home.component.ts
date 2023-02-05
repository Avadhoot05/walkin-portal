import { Component, OnInit } from '@angular/core';
import { data } from '../../data/courses.data'
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  courses= []
  constructor() { }

  ngOnInit(): void {
    this.courses = JSON.parse(data);
  }

}
