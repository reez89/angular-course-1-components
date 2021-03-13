import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card', // sarà il nome del tag html da inserire nel template originale.
  templateUrl: './course-card.component.html', // src del file html nel quale inserire le modifiche del nostro componente
  styleUrls: ['./course-card.component.css'] // foglio di stile nel nostro componente
})
export class CourseCardComponent implements OnInit {

  @Input() //serve per dichiarare da dove prendere i file
  course: Course;
  
  @Output('courseSelected') //serve per utilizzare custom event
  courseEmitter = new EventEmitter<Course>() ;

  @Input()
  cardIndex: number; 
  /* title:string;  */ // Dichiaro che title è un input nel mio file html

  constructor() { 
  }

  ngOnInit() {
  }

  onCourseViewd(){

    console.log('Hello There');
    this.courseEmitter.emit(this.course);

  }

}
