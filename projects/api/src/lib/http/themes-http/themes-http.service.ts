import {RestHttpService} from '../rest-http/rest-http.service';
import {Theme} from '../../models/theme';
import {Injectable} from '@angular/core';
import {Question} from '../../models/question';
import {HttpClient} from '@angular/common/http';
import {Course} from '../../models/course';
import {Tag} from '../../models/tag';

@Injectable({
  providedIn: 'root'
})
export class ThemesHttpService extends RestHttpService<Theme> {

  protected readonly whitelist = ['name', 'slug'];

  constructor(protected http: HttpClient) {
    super(http, '/themes');
  }


  tags(themeId: number, page: number = 0, perPage: number = 10) {
    return this.getRelated<Tag>(themeId, 'tags', page, perPage);
  }

  courses(themeId: number, page: number = 0, perPage: number = 1000) {
    return this.getRelated<Course>(themeId, 'courses', page, perPage);
  }
}
