import type {
  Categories,
  Questions,
  Results,
  ScoreRange,
  ScoreRanges,
  CategoryThresholdResult,
} from "../types";

export const calculateMaxScore = (questions: Questions): number => {
  return questions.reduce((acc, current) => {
    const maxValue = Math.max(...current.options.map((option) => option.value));
    return acc + maxValue;
  }, 0);
};

export const calculateTotalScore = (results: Results): number => {
  return Object.values(results).reduce((acc, current) => {
    return acc + current.value;
  }, 0);
};

export const findScoreRange = (
  scoreRanges: ScoreRanges,
  actualScore: number,
): ScoreRange | undefined => {
  return scoreRanges.find(
    (item) => actualScore <= item.max && actualScore >= item.min,
  );
};

export const calculateCategoryScores = (
  results: Results,
): Record<string, number> => {
  return Object.values(results).reduce<Record<string, number>>(
    (acc, { category, value }) => {
      acc[category] = (acc[category] || 0) + value;
      return acc;
    },
    {},
  );
};

export const getCategoriesThreshold = (
  categories: Categories,
  categoryScores: Record<string, number>,
): Record<string, CategoryThresholdResult> => {
  return Object.entries(categories).reduce<
    Record<string, CategoryThresholdResult>
  >((acc, [categoryName, categoryMeta]) => {
    const categoryScore = categoryScores[categoryName] || 0;
    const threshold =
      categoryMeta.maxScore > 0
        ? parseFloat((categoryScore / categoryMeta.maxScore).toFixed(2))
        : 0;

    acc[categoryName] = {
      category: categoryName,
      threshold,
      feedback:
        threshold >= categoryMeta.goodThreshold
          ? categoryMeta.feedback.good
          : categoryMeta.feedback.needsWork,
    };

    return acc;
  }, {});
};
