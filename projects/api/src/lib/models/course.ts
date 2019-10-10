import {BaseId} from './base-id';
import {Section} from './section';

export interface Course extends BaseId {
  /** name: the course name */
  name: string;
  /** theme_id: the unique theme id associated with a course */
  theme_id: number;
  /** completed: the completion status of a course */
  completed: boolean;
  /** order: the order of the course inside a theme */
  order: number;
  /** sections: the sections of the course */
  sections?: Section[];
}
