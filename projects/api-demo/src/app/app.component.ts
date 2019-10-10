import { Component } from '@angular/core';
import {CoursesHttpService, Tag} from 'api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'api-demo';

  coursesHttp$ = this.service.index(0,10);

  constructor(private service: CoursesHttpService){

  }
}
