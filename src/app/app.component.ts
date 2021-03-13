import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // AGGIUNGENDO QUESTI VARIABILI, RENDO DISPONIBILI ALL'INTERNO DELL'HTML , GLI ELEMENTI PRESENTI NEL FILE DB-DATA

  courses = COURSES; // dichiaro il mio array di oggetti dal quale pescare i miei dati.

  onCourseSelected(course:Course){

    console.log('course clicked', course);
    
  }
}
