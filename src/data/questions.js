export const questions = [
  {
    id: "q1",
    questionText:
      "Which value should you assign to the Content-Type header when sending JSON data?",
    options: [
      { id: "text-plain", optionText: "text/plain", isCorrect: false },
      {
        id: "application-json",
        optionText: "application/json",
        isCorrect: true,
      },
      {
        id: "multipart-form",
        optionText: "multipart/form-data",
        isCorrect: false,
      },
    ],
  },
  {
    id: "q2",
    questionText:
      "Which JavaScript data structure stores unique values and is ideal for deduplicating items?",
    options: [
      { id: "array", optionText: "Array", isCorrect: false },
      { id: "set", optionText: "Set", isCorrect: true },
      { id: "map", optionText: "Map", isCorrect: false },
    ],
  },
];
