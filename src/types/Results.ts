export interface Result {
  selectedOptionId: string;
  value: number;
  category: string;
}

export type Results = Record<string, Result>;
