import {Injectable} from '@angular/core';
import {RestHttpService} from '../rest-http/rest-http.service';
import {HttpClient} from '@angular/common/http';
import {Section} from '../../models/section';
import {Observable} from 'rxjs';
import {DataResponse} from '../../responses/data-response';
import {environment} from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class SectionsHttpService extends RestHttpService<Section> {

  protected readonly whitelist = ['name', 'content', 'order', 'course_id'];

  constructor(protected http: HttpClient) {
    super(http, '/sections');
  }

  /**
   * Mark a section a completed
   * POST section/${sectionId}/progress
   * @param sectionId
   */
  mark(sectionId: number): Observable<DataResponse<Section>> {
    return this.http.post<DataResponse<Section>>(`${environment.api}${this.base}/${sectionId}/progress`, {});
  }
}
