import {RestHttpService} from '../rest-http/rest-http.service';
import {Injectable} from '@angular/core';
import {Series} from '../../models/series';
import {Question} from '../../models/question';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeriesHttpService extends RestHttpService<Series> {

  protected readonly whitelist = ['name', 'difficulty'];

  constructor(protected http: HttpClient) {
    super(http, '/series');
  }

  /**
   * PATCH /series/{seriesId}/questions
   * @param seriesId
   * @param questionIds
   */
  patchQuestions(seriesId: number, questionIds: number[]) {
    return this.patchRelated<Question>(seriesId, 'questions', questionIds);
  }


}
