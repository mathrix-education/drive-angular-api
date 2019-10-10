import {BaseId} from './base-id';
import {Section} from './section';
import {Tag} from './tag';

export interface Question extends BaseId {
  situational: boolean;
  questions: string[]; // 1 or 2 questions
  choices: string[];
  correct_choices: number[];
  marked?: boolean;
  correction: string;
  correction_original: string;
  image?: string;
  image_original?: string;
  video?: string;
  video_original?: string;
  sound?: string;
  sound_original?: string;
  sections?: Section[]; // associated sections inside a result
  order?: number;
  created_at?: number;
  updated_at?: number;
  tag_ids: number[];
  tags?: Tag[];
  situation_id: number;
  reviewed: boolean;
}
