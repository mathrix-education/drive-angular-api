import {BaseId} from './base-id';

export interface Element {
  kind: string;
}

export interface Section extends BaseId {
  /**course_id: the course id */
  course_id: number;
  /**name: the section name */
  name: string;
  /**content: the section content*/
  content: (Element & any)[];
  /**completed: the completion status*/
  completed: boolean;
  /** order: the order of a section inside its course*/
  order: number;
}
