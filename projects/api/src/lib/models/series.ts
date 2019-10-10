import {BaseId} from './base-id';
import {Question} from './question';

export type SeriesDifficulty = 'easy' | 'medium' | 'hard' | 'expert' | 'exam';

export interface Series extends BaseId {
  name: string;
  difficulty: SeriesDifficulty;
  completed?: boolean;
  questions?: Question[];
}
