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
    this.service.getAll()
      .subscribe(
        posts => {
          this.posts = posts;
        });
  }

  createPost(title: HTMLInputElement) {
    let post = { title: title.value };
    this.posts.splice(0, 0, post);

    title.value = '';
    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost.id;
        },
        (error: AppError) => {
          this.posts.splice(0, 1);

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
    this.service.update(post.id)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        });
  }

  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
      .subscribe(
        null,
        (error: AppError) => {
          this.posts.splice(index, 0, post);
          if (error instanceof NotFoundError) {
            alert('This post has already been deleted.');
          } else {
            throw error;
          }
        });
  }
}
