import {BaseId} from './base-id';
import {Question} from './question';
import {Answer} from './answer';
import {Section} from './section';
import {Series} from './series';

export interface Result extends BaseId {
  user_id: number;
  series_id: number;
  type: 'exam' | 'series';
  name: string;
  series: Series;
  questions: (Question & { answer: Answer } & { section: Section[] })[];
  created_at: string;
  updated_at: string;
}

/**
 * ProcessedResult: a type for easier manipulation of data;
 */
export type ProcessedResult = Result & { question_total: number, correct_answer_total: number, ratio: number };
