import Questions from "./sections/Questions";
import Email from "./sections/Email";
import Results from "./sections/Results";
import useMiniQuiz from "./hooks/useMiniQuiz";
import useMiniQuizDispatchContext from "./hooks/useMiniQuizDispatchContext";
import { MINI_QUIZ_ACTIONS } from "./reducers/miniQuizReducer";

function App() {
  const {
    currentQuestionIndex,
    currentSelectedOption,
    step,
    results,
    email,
    questions,
  } = useMiniQuiz();
  const dispatch = useMiniQuizDispatchContext();
  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (optionId) => {
    dispatch({
      type: MINI_QUIZ_ACTIONS.SELECT_OPTION,
      optionId: optionId,
    });
  };

  const handleNextButtonClick = () => {
    if (currentSelectedOption) {
      const selectedOption = currentQuestion.options.find(
        (opt) => opt.id === currentSelectedOption
      );
      dispatch({
        type: MINI_QUIZ_ACTIONS.NEXT,
        questionId: currentQuestion.id,
        selectedOptionId: currentSelectedOption,
        isCorrect: selectedOption.isCorrect,
      });
    }
  };

  const onEmailChange = (newEmail) => {
    dispatch({ type: MINI_QUIZ_ACTIONS.SET_EMAIL, email: newEmail });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: MINI_QUIZ_ACTIONS.SUBMIT_EMAIL });
  };

  return (
    <>
      {step === "question" && (
        <Questions
          question={currentQuestion}
          handleOptionClick={handleOptionClick}
          currentSelectedOption={currentSelectedOption}
          results={results}
          handleNextButtonClick={handleNextButtonClick}
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
