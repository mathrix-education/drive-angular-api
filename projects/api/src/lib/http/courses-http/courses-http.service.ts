import {Inject, Injectable} from '@angular/core';
import {RestHttpService} from '../rest-http/rest-http.service';
import {Course} from '../../models/course';
import {HttpClient} from '@angular/common/http';
import {API_CONFIG} from '../../api-config';

@Injectable()
export class CoursesHttpService extends RestHttpService <Course> {

  protected readonly whitelist = ['name', 'topic_id', 'order', 'content', 'review'];

  constructor(http: HttpClient,
              @Inject(API_CONFIG) protected api: string
  ) {
    super(http, '/courses', api);
  }

}

