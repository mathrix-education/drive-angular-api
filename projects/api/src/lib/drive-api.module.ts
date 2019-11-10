import {ModuleWithProviders, NgModule} from '@angular/core';
import {API_CONFIG} from './api-config';
import {HttpClientModule} from '@angular/common/http';
import {AuthHttpService} from './http/auth-http/auth-http.service';
import {CoursesHttpService} from './http/courses-http/courses-http.service';
import {FilesHttpService} from './http/files-http/files-http.service';
import {QuestionsHttpService} from './http/questions-http/questions-http.service';
import {ResultsHttpService} from './http/results-http/results-http.service';
import {SeriesHttpService} from './http/series-http/series-http.service';
import {StatisticsHttpService} from './http/statistics-http/statistics-http.service';
import {ThemesHttpService} from './http/themes-http/themes-http.service';
import {TopicsHttpService} from './http/topics-http/topics-http.service';
import {UsersHttpService} from './http/users-http/users-http.service';


@NgModule({
    imports: [HttpClientModule],
    providers: [
      AuthHttpService,
      CoursesHttpService,
      FilesHttpService,
      QuestionsHttpService,
      ResultsHttpService,
      SeriesHttpService,
      StatisticsHttpService,
      ThemesHttpService,
      TopicsHttpService,
      UsersHttpService
    ]
  }
)
export class DriveApiModule {
  static withConfig(config: { api: string }): ModuleWithProviders {
    return {
      ngModule: DriveApiModule,
      providers: [
        {provide: API_CONFIG, useValue: config.api},
      ]
    };
  }
}
