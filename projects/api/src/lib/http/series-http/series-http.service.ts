import {RestHttpService} from '../rest-http/rest-http.service';
import {Inject, Injectable} from '@angular/core';
import {Series} from '../../models/series';
import {Question} from '../../models/question';
import {HttpClient} from '@angular/common/http';
import {API_CONFIG} from '../../api-config';

@Injectable()
export class SeriesHttpService extends RestHttpService<Series> {

  protected readonly whitelist = ['name', 'difficulty'];

  constructor(protected http: HttpClient,
              @Inject(API_CONFIG) protected api: string
  ) {
    super(http, '/series', api);
  }

  /**
   * PATCH /series/{seriesId}/questions
   */
  patchQuestions(seriesId: number, questionIds: number[]) {
    return this.patchRelated<Question>(seriesId, 'questions', questionIds);
  }


}
