import {Component} from '@angular/core';
import {CoursesHttpService} from 'api';
import {UrlCatcherService} from '../services/url-catcher.service';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {ThemesHttpService} from '../../../../api/src/lib/http/themes-http/themes-http.service';
import {UsersHttpService} from '../../../../api/src/lib/http/users-http/users-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly localStorageToken = 'httpTestBearerToken';

  constructor(
    private coursesHttp: CoursesHttpService,
    private themesHttp: ThemesHttpService,
    private usersHttp: UsersHttpService,
    public urlCatcher: UrlCatcherService) {
    this.urlCatcher.bearerToken = localStorage.getItem(this.localStorageToken);
  }

  launchAll() {
    this.urlCatcher.resetList();
    this.launchCourses();
    this.launchThemes();
    this.launchUsers();
  }

  launchCourses() {
    this.launchRest(this.coursesHttp);
  }

  launchThemes() {
    this.launchRest(this.themesHttp);
  }

  launchUsers() {
    this.launchRest(this.usersHttp);
  }

  launchRest(httpService: any) {
    this.startRequests([
      httpService.index(0, 10),
      httpService.get(1),
    ]);
  }

  changeToken(token: string) {
    this.urlCatcher.bearerToken = token;
    localStorage.setItem(this.localStorageToken, token);

  }

  private startRequests(requests: any[]) {
    let request;

    for (request of requests) {
      this.startRequest(request);
    }
  }

  private startRequest(request: Observable<any>) {
    request.pipe(first()).subscribe();
  }
}
