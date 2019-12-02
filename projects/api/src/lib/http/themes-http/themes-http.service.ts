import {RestHttpService} from '../rest-http/rest-http.service';
import {Theme} from '../../models/theme';
import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Topic} from '../../models/topic';
import {API_CONFIG} from '../../api-config';

@Injectable()
export class ThemesHttpService extends RestHttpService<Theme> {

  protected readonly whitelist = ['name', 'slug'];

  constructor(protected http: HttpClient,
              @Inject(API_CONFIG) protected api: string
  ) {
    super(http, '/themes', api);
  }


  topics(themeId: number, page: number = 0, perPage: number = 50) {
    return this.getRelated<Topic>(themeId, 'topics', page, perPage);
  }
}
