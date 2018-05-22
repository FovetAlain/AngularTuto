import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
      .catch((error: Response) => {
        if (error.status === 400) {
          return Observable.throw(new BadInput(error.json()));
        }
        return Observable.throw(new AppError(error.json()));
      });
  }

  updatePost(index) {
    return this.http.patch(this.url + '/' + index, JSON.stringify({ isBlue: true }));
  }

  deletePost(index) {
    return this.http.delete(this.url + '/' + index)
      .catch((error: Response) => {
        if (error.status === 404) {
          return Observable.throw(new NotFoundError);
        }
        return Observable.throw(new AppError(error.json()));
      });
  }

}
