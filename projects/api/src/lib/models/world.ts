import {BaseId} from './base-id';
import {Series} from './series';

/**
 * The World interface describes how a world is structured (a set of series with a map)
 */
export interface World extends BaseId {
  name: string;
  difficulty: string;
  series?: Series[];
  map: string;
}
