import {RestHttpService} from '../rest-http/rest-http.service';
import {Situation} from '../../models/situation';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SituationsHttpService extends RestHttpService<Situation> {
  constructor(protected http: HttpClient) {
    super(http, '/situations');
  }
}
