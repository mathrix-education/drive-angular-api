import {BaseId} from './base-id';

/**
 * One of the 10 driving test theme
 */
export interface Theme extends BaseId {
  name: string;
  slug: string;
}
