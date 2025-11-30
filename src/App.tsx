import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import Question from "./components/Question";
import Email from "./components/Email";
import Results from "./components/Results";
import { questions } from "./data/questions";
import loadSavedData from "./utils/loadSavedData";
import { scoreRanges, categories } from "./data/results";
import type {
  CategoryThresholdResult,
  Questions,
  Results as QuizResults,
} from "./types";
import {
  calculateMaxScore,
  calculateTotalScore,
  findScoreRange,
  calculateCategoryScores,
  getCategoriesThreshold,
} from "./utils/calculateScore";
import runViewTransition from "./utils/runViewTransition";
import ResultsGeneration from "./components/ResultsGeneration";

type Step = "question" | "email" | "generate-result" | "result";
type OptionId = Questions[number]["options"][number]["id"];
type SavedData = Partial<{
  step: Step;
  questionIndex: number;
  selectedOption: OptionId | null;
  results: QuizResults;
  email: string;
}>;
type CategoryName = keyof typeof categories;
type CategoryForDisplay = Omit<CategoryThresholdResult, "category"> & {
  category: CategoryName;
};

function App() {
  const [savedData] = useState<SavedData>(loadSavedData);
  const [step, setStep] = useState<Step>(() => savedData.step ?? "question");
  const [questionIndex, setQuestionIndex] = useState<number>(
    () => savedData.questionIndex ?? 0,
  );
  const [selectedOption, setSelectedOption] = useState<OptionId | null>(
    () => savedData.selectedOption ?? null,
  );
  const [results, setResults] = useState<QuizResults>(
    () => savedData.results ?? {},
  ); // {q1: {selectedOptionId: "q1-opt1", value: 10}}
  const [email, setEmail] = useState<string>(() => savedData.email ?? "");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const data = {
      step,
      questionIndex,
      selectedOption,
      results,
      email,
    };

    try {
      window.localStorage.setItem("miniQuiz", JSON.stringify(data));
    } catch (error) {
      console.error("Oops, something went wrong!", error);
    }
  }, [step, questionIndex, selectedOption, results, email]);

  useEffect(() => {
    if (step !== "generate-result") return;

    const timerId = setTimeout(() => {
      runViewTransition(() => setStep("result"));
    }, 4000);

    return () => clearTimeout(timerId);
  }, [step]);

  const currentQuestion = questions[questionIndex];
  const questionNumber = questionIndex + 1;

  const maxScore = calculateMaxScore(questions);

  const handleNextButtonClick = () => {
    runViewTransition(() => {
      if (questionIndex < questions.length - 1) {
        setQuestionIndex((prev) => prev + 1);
      } else {
        setStep("email");
      }
      setSelectedOption(null);
    });
  };

  const handleOptionClick = (id: OptionId) => {
    setSelectedOption(id);

    const option = currentQuestion.options.find((item) => item.id === id);
    if (!option) return;

    setResults((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        selectedOptionId: id,
        value: option.value,
        category: currentQuestion.category,
      },
    }));
  };

  const onEmailChange = (value: string) => {
    setEmail(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    runViewTransition(() => setStep("generate-result"));
  };

  const handleRetakeQuiz = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("miniQuiz");
    }
    runViewTransition(() => {
      setStep("question");
      setQuestionIndex(0);
      setSelectedOption(null);
      setResults({});
      setEmail("");
    });
  };

  const scoreResult = calculateTotalScore(results);

  const scoreRange = findScoreRange(scoreRanges, scoreResult)!;

  const categoryScores = calculateCategoryScores(results);

  const categoriesThreshold = getCategoriesThreshold(
    categories,
    categoryScores,
  );

  const categoriesForDisplay: CategoryForDisplay[] = Object.entries(
    categoriesThreshold,
  ).map(([categoryKey, categoryResult]) => ({
    ...categoryResult,
    category: categoryKey as CategoryName,
  }));

  return (
    <main data-step={step}>
      {step === "question" && (
        <Question
          question={currentQuestion}
          handleOptionClick={handleOptionClick}
          selectedOption={selectedOption}
          handleNextButtonClick={handleNextButtonClick}
          questionNumber={questionNumber}
        />
      )}
      {step === "email" && (
        <Email
          email={email}
          onEmailChange={onEmailChange}
          handleSubmit={handleSubmit}
        />
      )}
      {step === "generate-result" && <ResultsGeneration />}
      {step === "result" && (
        <Results
          email={email}
          maxScore={maxScore}
          handleRetakeQuiz={handleRetakeQuiz}
          scoreRangeResult={scoreRange}
          score={scoreResult}
          categoriesForDisplay={categoriesForDisplay}
        />
      )}
    </main>
  );
}

export default App;
