import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.css']
})
export class CoursesFormComponent {

  categories = [
    { id: 1, name: 'Code'},
    { id: 2, name: 'Itil' },
    { id: 3, name: 'Dev' },
    { id: 4, name: 'Back' },
    { id: 5, name: 'Rien' },
  ];

  submit (f) {
    console.log(f);
  }

}
