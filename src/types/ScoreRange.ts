export interface ScoreRange {
  id: string;
  min: number;
  max: number;
  label: string;
  status: "good" | "normal" | "bad";
  description: string;
}

export type ScoreRanges = ScoreRange[];
