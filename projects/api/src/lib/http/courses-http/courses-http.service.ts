import {Injectable} from '@angular/core';
import {RestHttpService} from '../rest-http/rest-http.service';
import {Course} from '../../models/course';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesHttpService extends RestHttpService <Course> {

  protected readonly whitelist = ['name', 'topic_id', 'order', 'content'];

  constructor(http: HttpClient) {
    super(http, '/courses');
  }

}

