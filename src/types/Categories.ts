export interface Feedback {
  good: string;
  needsWork: string;
}

export interface Category {
  id: string;
  questionIds: string[];
  maxScore: number;
  goodThreshold: number;
  feedback: Feedback;
}

export type CategoryThresholdResult = {
  category: string;
  threshold: number;
  feedback: string;
};

export type Categories = Record<string, Category>;
