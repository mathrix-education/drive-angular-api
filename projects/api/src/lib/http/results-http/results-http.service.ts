import {HttpClient} from '@angular/common/http';
import {Result} from '../../models/result';
import {Inject, Injectable} from '@angular/core';
import {API_CONFIG} from '../../api-config';

@Injectable()
export class ResultsHttpService {
  constructor(private http: HttpClient,
              @Inject(API_CONFIG) protected api: string) {
  }

  submit(seriesId: number, type: 'exam' | 'series', answers: { question_id: number, choices: number[], marked: boolean }[]) {
    return this.http.post<Result>(`${this.api}/results`, {
      series_id: seriesId,
      answers,
      type
    });
  }
}
