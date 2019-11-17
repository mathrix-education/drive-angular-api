import {BaseId} from './base-id';
import {Wall} from '../wall.type';

export interface Question extends BaseId {
  situational: boolean;
  questions: string[]; // 1 or 2 questions
  choices: string[];
  correct_choices: number[];
  marked?: boolean;
  correction: Wall;
  correction_original: string;
  correction_sound: string;
  correction_sound_original: string;
  /** image or video of the question */
  media: string;
  /** original image or video of the question */
  media_original: string;
  sound: string;
  sound_original: string;
  order?: number;
  created_at?: number;
  updated_at?: number;
  topic_id: number;
  review: {
    audoCorrectionToWritten: boolean;
    reformulateQuestion: boolean;
    reformulateCorrection: boolean;
    editMedia: boolean;
  } | null;
}
