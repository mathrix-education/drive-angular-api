import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environment';
import {Observable} from 'rxjs';
import {DataResponse} from '../../responses/data-response';
import {Statistics} from '../../models/statistics';

@Injectable({
  providedIn: 'root'
})
export class StatisticsHttpService {

  private readonly api = environment.api;
  private readonly base = '/statistics';

  constructor(private http: HttpClient) {
  }

  /**
   * GET /statistics: return the progression of the user
   */
  index(): Observable<DataResponse<Statistics>> {
    return this.http.get<DataResponse<Statistics>>(`${this.api}${this.base}`);
  }
}
