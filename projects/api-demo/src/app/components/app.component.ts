import {Component} from '@angular/core';
import {UrlCatcherService} from '../services/url-catcher.service';
import {Observable} from 'rxjs';
import {first, map, switchMap} from 'rxjs/operators';
import {ThemesHttpService} from '../../../../api/src/lib/http/themes-http/themes-http.service';
import {UsersHttpService} from '../../../../api/src/lib/http/users-http/users-http.service';
import {TopicsHttpService} from '../../../../api/src/lib/http/topics-http/topics-http.service';
import {QuestionsHttpService} from '../../../../api/src/lib/http/questions-http/questions-http.service';
import {Course} from '../../../../api/src/lib/models/course';
import {DataResponse} from '../../../../api/src/lib/responses/data-response';
import {CoursesHttpService} from '../../../../api/src/lib/http/courses-http/courses-http.service';
import {Series} from '../../../../api/src/lib/models/series';
import {SeriesHttpService} from '../../../../api/src/lib/http/series-http/series-http.service';
import {FilesHttpService} from '../../../../api/src/lib/http/files-http/files-http.service';

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
    private seriesHttp: SeriesHttpService,
    private topicsHttp: TopicsHttpService,
    private usersHttp: UsersHttpService,
    private questionsHttp: QuestionsHttpService,
    private filesHttp: FilesHttpService,
    public urlCatcher: UrlCatcherService) {
    this.urlCatcher.bearerToken = localStorage.getItem(this.localStorageToken);
  }

  all() {
    this.urlCatcher.resetList();
    this.courses();
    this.themes();
    this.users();
    this.topics();
    this.questions();
    this.series();
    this.files();
  }

  courses() {
    this.rest(this.coursesHttp, {
      name: 'randomName',
      topic_id: 1,
      order: 0,
      content: []
    } as Course);
  }

  series() {
    this.rest(this.seriesHttp, {
      name: 'test',
      difficulty: 'easy',
    } as Series);
  }

  questions() {
    this.rest(this.questionsHttp, {
      situational: false,
      questions: ['string'],
      choices: ['choice A', 'choice B'],
      correct_choices: [1],
      correction: 'string',
      correction_original: 'string',
      media: 'string',
      media_original: 'string',
      sound: 'string',
      sound_original: 'string',
      topic_id: 1,
      reviewed: false,
    });
    this.request(this.questionsHttp.random(20));
  }

  themes() {
    this.rest(this.themesHttp, {
      name: 'randomTheme',
      slug: 'randomSlug'
    });

    this.request(this.themesHttp.topics(1));
  }

  users() {
    this.rest(this.usersHttp, {
      first_name: 'first_name',
      last_name: 'last_name',
      email: 'email@random2.fr',
      password: 'password',
      username: 'username',
    });
  }


  topics() {
    this.rest(this.topicsHttp, {
      name: 'name',
      slug: 'slug',
      order: 0,
      theme_id: 1
    });

    this.requests([
      this.topicsHttp.courses(1),
      this.topicsHttp.questions(1),
      this.topicsHttp.theme(1),
    ]);
  }

  files() {
    this.requests([
      this.filesHttp.list('sounds'),
      this.filesHttp.list('.'),
      this.filesHttp.move('yolotest.png', 'yolotestnew.png'),
      this.filesHttp.list('.'),
      this.filesHttp.move('yolotestnew.png', 'yolotest.png'),
      this.filesHttp.list('.')
    ]);
  }

  changeToken(token: string) {
    this.urlCatcher.bearerToken = token;
    localStorage.setItem(this.localStorageToken, token);
  }


  /**
   * Send REST requests (create, read, update, delete)
   * warning: httpService is not of type RestHttpService because of a typescript bug
   */
  private rest(httpService: any, model: any) {
    this.requests([
      httpService.index(0, 10),
      // create
      httpService.post(model).pipe(
        map((response: DataResponse<any>) => response.data),
        switchMap((newModel: any) => {
          // read
          return httpService.get(newModel.id).pipe(
            // update
            switchMap(() => httpService.patch(newModel.id, newModel)),
            // delete
            switchMap(() => httpService.delete(newModel.id))
          );
        }))
    ]);
  }


  /**
   * Send multiple http requests
   */
  private requests(requests: any[]) {
    let request;

    for (request of requests) {
      this.request(request);
    }
  }

  /**
   * Send a single http request
   */
  private request(request: Observable<any>) {
    request.pipe(first()).subscribe();
  }
}
