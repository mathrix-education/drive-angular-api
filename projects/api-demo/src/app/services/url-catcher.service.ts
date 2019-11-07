import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlCatcherService {
  requests: any[] = [];

  bearerToken = '';

  resetList() {
    this.requests.length = 0;
  }

}
