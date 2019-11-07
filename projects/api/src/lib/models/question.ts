import {BaseId} from './base-id';

export interface Question extends BaseId {
  situational: boolean;
  questions: string[]; // 1 or 2 questions
  choices: string[];
  correct_choices: number[];
  marked?: boolean;
  correction: string;
  correction_original: string;
  correction_sound: string;
  correction_sound_original: string;
  image: string;
  image_original: string;
  video: string;
  video_original: string;
  sound: string;
  sound_original: string;
  order?: number;
  created_at?: number;
  updated_at?: number;
  topic_id: number;
  reviewed: boolean;
}
