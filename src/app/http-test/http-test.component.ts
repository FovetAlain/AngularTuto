import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {
  isActive: boolean;
  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {}

  ngOnInit() {
    this.http.get(this.url)
      .subscribe(response => {
        this.posts = response.json();
    });
  }

  createPost(title: HTMLInputElement) {
    let post = { title: title.value };
    title.value = '';
    this.http.post(this.url, JSON.stringify(post))
    .subscribe(response => {
      post['id'] = response.json().id;
      this.posts.splice(0, 0, post);
      console.log(response.json());
    });
  }

  onActivation(post: JSON) {
    let index = this.posts.indexOf(post);
    if (post['show']) {
      post['show'] = false;
    } else {
      post['show'] = true;
    }
    this.posts[index] = post;
  }

  updatePost(post) {
    this.http.patch(this.url + '/' + post.id, JSON.stringify( { isBlue: true } ))
    .subscribe(response => {
      console.log(response);
    });
  }

  deletePost(post) {
    this.http.delete(this.url + '/' + post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      });
  }
}
