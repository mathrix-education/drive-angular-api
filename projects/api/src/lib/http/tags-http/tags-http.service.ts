import {RestHttpService} from '../rest-http/rest-http.service';
import {Tag} from '../../models/tag';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Question} from '../../models/question';
import {Theme} from '../../models/theme';

@Injectable({
  providedIn: 'root'
})
export class TagsHttpService extends RestHttpService<Tag> {

  protected readonly whitelist = ['name', 'theme_id', 'order'];

  constructor(protected http: HttpClient) {
    super(http, '/tags');
  }

  questions(tagId: number, page: number = 0, perPage: number = 10) {
    return this.getRelated<Question>(tagId, 'questions', page, perPage);
  }


}
