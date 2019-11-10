import {RestHttpService} from '../rest-http/rest-http.service';
import {Theme} from '../../models/theme';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Topic} from '../../models/topic';

@Injectable({
  providedIn: 'root'
})
export class ThemesHttpService extends RestHttpService<Theme> {

  protected readonly whitelist = ['name', 'slug'];

  constructor(protected http: HttpClient) {
    super(http, '/themes');
  }


  topics(themeId: number, page: number = 0, perPage: number = 10) {
    return this.getRelated<Topic>(themeId, 'topics', page, perPage);
  }
}
