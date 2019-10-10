import {Injectable} from '@angular/core';
import {RestHttpService} from '../rest-http/rest-http.service';
import {Course} from '../../models/course';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesHttpService extends RestHttpService <Course> {

  protected readonly whitelist = ['name', 'theme_id', 'order'];

  constructor(http: HttpClient) {
    super(http, '/courses');
  }

  /**
   * Return related section of the course
   * @param courseId
   * @param page
   * @param perPage
   */
  sections(courseId: number, page: number = 0, perPage: number = 1000) {
    return this.getRelated(courseId, 'sections', page, perPage);
  }


}

