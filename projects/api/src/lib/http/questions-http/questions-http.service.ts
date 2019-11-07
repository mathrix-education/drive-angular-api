import {Question} from '../../models/question';
import {Injectable} from '@angular/core';
import {RestHttpService} from '../rest-http/rest-http.service';
import {HttpClient} from '@angular/common/http';
import {DataResponse} from '../../responses/data-response';

@Injectable({
  providedIn: 'root'
})
export class QuestionsHttpService extends RestHttpService<Question> {
    protected readonly whitelist = [
        'situational', 'reviewed', 'questions', 'choices', 'correct_choices', 'correction',
        'tags', 'image', 'sound', 'video', 'order', 'source', 'topic_id'
    ];

    constructor(protected http: HttpClient) {
        super(http, '/questions');
    }

    /** GET questions/random/${count}
     * Return a random set of questions
     */
    random(count: number = 40) {
        return this.http.get<DataResponse<Question[]>>(`${this.api}${this.base}/random/${count}`);
    }
}
