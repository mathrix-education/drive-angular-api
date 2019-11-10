import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DataResponse} from '../../responses/data-response';
import {Statistics} from '../../models/statistics';
import {API_CONFIG} from '../../api-config';

@Injectable()
export class StatisticsHttpService {

  private readonly base = '/statistics';

  constructor(
    private http: HttpClient,
    @Inject(API_CONFIG) protected api: string) {
  }

  /**
   * GET /statistics: return the progression of the user
   */
  index(): Observable<DataResponse<Statistics>> {
    return this.http.get<DataResponse<Statistics>>(`${this.api}${this.base}`);
  }
}
