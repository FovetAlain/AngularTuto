import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {
  isActive: boolean;
  posts: any[];


  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getPosts()
      .subscribe(
        response => {
          this.posts = response.json();
        });
  }

  createPost(title: HTMLInputElement) {
    let post = { title: title.value };
    title.value = '';
    this.service.createPost(post)
      .subscribe(
        response => {
          post['id'] = response.json().id;
          this.posts.splice(0, 0, post);
          console.log(response.json());
        },
        (error: AppError) => {
          if (error instanceof BadInput) {
            //
          } else {
            throw error;
          }
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
    this.service.updatePost(post.id)
      .subscribe(
        response => {
          console.log(response);
        });
  }

  deletePost(post) {
    this.service.deletePost(post.id)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            alert('This post has already been deleted.');
          } else {
            throw error;
          }
        });
  }
}
