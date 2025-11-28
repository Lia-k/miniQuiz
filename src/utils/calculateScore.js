export const calculateMaxScore = (questions) => {
  return questions.reduce((acc, current) => {
    const maxValue = Math.max(...current.options.map((option) => option.value));
    return acc + maxValue;
  }, 0);
};

export const calculateTotalScore = (results) => {
  return Object.values(results).reduce((acc, current) => {
    return acc + current.value;
  }, 0);
};

export const findScoreRange = (scoreRanges, actualScore) => {
  return scoreRanges.find(
    (item) => actualScore <= item.max && actualScore >= item.min
  );
};

export const calculateCategoryScores = (results) => {
  return Object.values(results).reduce((acc, { category, value }) => {
    acc[category] = (acc[category] || 0) + value;
    return acc;
  }, {});
};

export const getCategoriesThreshold = (categories, categoryScores) => {
  return Object.entries(categories).reduce(
    (acc, [categoryName, categoryMeta]) => {
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
    },
    {}
  );
};
