import {BaseId} from './base-id';

export interface Tag extends BaseId {
    name: string;
    theme_id: number;
}
