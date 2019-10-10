import {BaseId} from './base-id';
import {Section} from './section';
import {Course} from './course';

interface Score {
  last_score: number;
  best_score: number;
}

export interface User extends BaseId {
  /**first_name: the user first name */
  first_name: string;
  /**last_name: the user last name */
  last_name: string;
  /**email: the user email */
  email: string;
  /**username: the user name (pseudo) */
  username: string;
  /**password: the user password (only for login action) */
  password?: string;
  /**settings: the user settings, mainly used for saving session information */
  settings?: {
    last_course_section?: { course: Course, section: Section },
    survival?: Score,
    pay_your_fine: Score
    road_sign: Score
  };
  /**scopes: extended user authorizations */
  scopes?: string[];
  /**created_at: the user creation date */
  created_at?: string;
  /**updated_at: the user update date */
  updated_at?: string;
}
