import { useEffect, useState } from "react";
import Questions from "./sections/Questions";
import Email from "./sections/Email";
import Results from "./sections/Results";
import { questions } from "./data/questions";

function App() {
  const [step, setStep] = useState("question");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [results, setResults] = useState({}); // 'q1': {selectedOptionId: 'anchor', isCorrect: true},
  const [email, setEmail] = useState("");
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem("miniQuiz");

    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setStep(parsedData.step ?? "question");
      setQuestionIndex(parsedData.questionIndex ?? 0);
      setSelectedOption(parsedData.selectedOption ?? null);
      setResults(parsedData.results ?? {});
      setEmail(parsedData.email ?? "");
    }
    setHasLoaded(true);
  }, []);

  useEffect(() => {
    if (!hasLoaded) return;
    const data = {
      step,
      questionIndex,
      selectedOption,
      results,
      email,
    };

    localStorage.setItem("miniQuiz", JSON.stringify(data));
  }, [step, questionIndex, selectedOption, results, email, hasLoaded]);

  if (!hasLoaded) {
    return null;
  }

  const currentQuestion = questions[questionIndex];
  const questionNumber = questionIndex + 1;
  const totalQuestions = questions.length;

  const handleNextButtonClick = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex((prev) => prev + 1);
    } else {
      setStep("email");
    }
    setSelectedOption(null);
  };

  const handleOptionClick = (id) => {
    setSelectedOption(id);

    const option = currentQuestion.options.find((item) => item.id === id);

    setResults((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        selectedOptionId: id,
        isCorrect: option.isCorrect,
      },
    }));
  };

  const onEmailChange = (value) => {
    setEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep("result");
  };

  return (
    <>
      {step === "question" && (
        <Questions
          question={currentQuestion}
          handleOptionClick={handleOptionClick}
          selectedOption={selectedOption}
          handleNextButtonClick={handleNextButtonClick}
          questionNumber={questionNumber}
          totalQuestions={totalQuestions}
        />
      )}
      {step === "email" && (
        <Email
          email={email}
          onEmailChange={onEmailChange}
          handleSubmit={handleSubmit}
        />
      )}
      {step === "result" && (
        <Results results={results} email={email} questions={questions} />
      )}
    </>
  );
}

export default App;
