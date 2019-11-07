import {BaseId} from './base-id';

export interface Course extends BaseId {
  /** name: the course name */
  name: string;
  /** topic_id: the unique topic id associated with a course */
  topic_id: number;
  /** completed: the completion status of a course */
  completed: boolean;
  /** order: the order of the course inside a theme */
  order: number;
  /** silicate content */
  content: string;
}
