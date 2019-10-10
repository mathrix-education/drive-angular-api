import {Injectable} from '@angular/core';
import {RestHttpService} from '../rest-http/rest-http.service';
import {HttpClient} from '@angular/common/http';
import {World} from '../../models/world';
import {Series, SeriesDifficulty} from '../../models/series';
import {environment} from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class WorldsHttpService extends RestHttpService<World> {

  protected readonly whitelist = ['name', 'map', 'order', 'difficulty'];

  constructor(protected http: HttpClient) {
    super(http, '/worlds');
  }


  /**
   * GET /worlds/difficulty/{difficulty}/order/{order}
   * @param difficulty
   * @param order
   */
  getByDifficultyAndOrder(difficulty: SeriesDifficulty, order: number) {
    return this.http.get(`${environment.api}${this.base}/difficulty/${difficulty}/order/${order}`);
  }


  /**
   * GET /groups/{groupId}
   * @param groupId
   * @param page
   * @param perPage
   */
  getSeries(groupId, page, perPage) {
    return this.getRelated(groupId, 'series', page, perPage);
  }

  /**
   * PATCH /group/{seriesId}/series
   * @param seriesId
   * @param seriesIds
   */
  patchSeries(seriesId: number, seriesIds: number[]) {
    return this.patchRelated<Series>(seriesId, 'series', seriesIds);
  }

}
