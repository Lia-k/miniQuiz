interface Option {
  id: string;
  optionText: string;
  value: number;
}

export interface QuestionItem {
  id: string;
  category: string;
  questionText: string;
  options: Option[];
}

export type Questions = QuestionItem[];
