import {BaseId} from './base-id';

export interface Topic extends BaseId {
    name: string;
    slug: string;
    order: number;
    theme_id: number;
}
