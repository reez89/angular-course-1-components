import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-card', // sarà il nome del tag html da inserire nel template originale.
  templateUrl: './course-card.component.html', // src del file html nel quale inserire le modifiche del nostro componente
  styleUrls: ['./course-card.component.css'] // foglio di stile nel nostro componente
})
export class CourseCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
