import {RestHttpService} from '../rest-http/rest-http.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Question} from '../../models/question';
import {Course} from '../../models/course';
import {Topic} from '../../models/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicsHttpService extends RestHttpService<Topic> {

  protected readonly whitelist = ['name', 'theme_id', 'slug', 'order'];

  constructor(protected http: HttpClient) {
    super(http, '/topics');
  }

  questions(topicId: number, page: number = 0, perPage: number = 10) {
    return this.getRelated<Question>(topicId, 'questions', page, perPage);
  }

  courses(topicId: number, page: number = 0, perPage: number = 10) {
    return this.getRelated<Course>(topicId, 'courses', page, perPage);
  }

  theme(topicId: number) {
    return this.getBy(topicId, 'theme');
  }


}
