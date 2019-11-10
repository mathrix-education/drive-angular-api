import {BaseId} from './base-id';

interface Score {
  last_score: number;
  best_score: number;
}

export interface User extends BaseId {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password?: string;
  settings?: {
    survival?: Score,
    pay_your_fine: Score
    road_sign: Score
  };
  /** extended user authorizations */
  scopes?: string[];
  /** the user creation date */
  created_at?: string;
  /** the user update date */
  updated_at?: string;
}
