export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: string;
  description: string;
  muscleGroup: string;
  animationKey: string;
}

export interface TrainingDay {
  id: string;
  name: string;
  dayOfWeek: string;
  exercises: Exercise[];
  color: string;
}

export type TrainingType = 'peito' | 'costas' | 'ombros' | 'pernas';
