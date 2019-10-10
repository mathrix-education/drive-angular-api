import {HttpClient} from '@angular/common/http';
import {environment} from '../../environment';
import {Result} from '../../models/result';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultsHttpService {
  constructor(private http: HttpClient) {
  }

  submit(seriesId: number, type: 'exam' | 'series', answers: { question_id: number, choices: number[], marked: boolean }[]) {
    return this.http.post<Result>(`${environment.api}/results`, {
      series_id: seriesId,
      answers: answers,
      type: type
    });
  }
}
