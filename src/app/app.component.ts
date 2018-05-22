import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  post = {
    isFavorite : false
  };

  tweet = {
    isLiked: false,
    nbLike: 10
  };

  courses;

  LoadCourse() {
    this.courses = ['course 1', 'course 2', 'course 3'];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

  onSave() {
    console.log(this.title);
  }

  onActivation(isFavorite) {
    console.log('activated', isFavorite);
  }
}
