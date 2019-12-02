import {RestHttpService} from '../rest-http/rest-http.service';
import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Question} from '../../models/question';
import {Course} from '../../models/course';
import {Topic} from '../../models/topic';
import {Theme} from '../../models/theme';
import {API_CONFIG} from '../../api-config';

@Injectable()
export class TopicsHttpService extends RestHttpService<Topic> {

  protected readonly whitelist = ['name', 'theme_id', 'slug', 'order'];

  constructor(protected http: HttpClient,
              @Inject(API_CONFIG) protected api: string
  ) {
    super(http, '/topics', api);
  }

  questions(topicId: number, page: number = 0, perPage: number = 50) {
    return this.getRelated<Question>(topicId, 'questions', page, perPage);
  }

  courses(topicId: number, page: number = 0, perPage: number = 50) {
    return this.getRelated<Course>(topicId, 'courses', page, perPage);
  }

  theme(topicId: number) {
    return this.getBy<Theme>(topicId, 'theme');
  }


}
