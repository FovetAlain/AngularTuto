import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

    constructor(private url: string, private http: Http) { }

    getAll() {
        return this.http.get(this.url)
            .catch(this.handleError);
    }

    create(resource) {
        return this.http.post(this.url, JSON.stringify(resource))
            .catch(this.handleError);
    }

    update(index) {
        return this.http.patch(this.url + '/' + index, JSON.stringify({ isBlue: true }))
            .catch(this.handleError);
    }

    delete(index) {
        return this.http.delete(this.url + '/' + index)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        if (error.status === 400) {
            return Observable.throw(new BadInput(error.json()));
        }
        if (error.status === 404) {
            return Observable.throw(new NotFoundError);
        }
        return Observable.throw(new AppError(error.json()));
    }
}