interface Progression {
  section_count: number;
  progress_count: number;
  progress_percent: number;
}


export interface Statistics {
  global: Progression;
  themes: (Progression & { theme_id: number })[];
}
