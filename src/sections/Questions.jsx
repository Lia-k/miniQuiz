import Button from "../components/ui/button";
import classNames from "classnames";
import "./questions.css";

const Questions = ({
  headerText = "Pass a mini quiz",
  subHeadingText = "Answer the question below:",
  question,
  handleOptionClick,
  selectedOption,
  handleNextButtonClick,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <section className="container">
      <h1>{headerText}</h1>
      <p>
        {subHeadingText} ({questionNumber}/{totalQuestions})
      </p>
      <p className="question-text">
        {questionNumber}. {question.questionText}
      </p>
      <div className="question-options">
        {question.options.map((option) => {
          const isSelected = selectedOption === option.id;
          const isCorrect = selectedOption && option.isCorrect;
          const isWrong = selectedOption && isSelected && !option.isCorrect;
          return (
            <div key={option.id}>
              <Button
                onClick={() => handleOptionClick(option.id)}
                className={classNames("option-button", {
                  selected: isSelected,
                  correct: isCorrect,
                  wrong: isWrong,
                })}
                disabled={selectedOption}
              >
                {option.optionText}
              </Button>
            </div>
          );
        })}
      </div>
      <div className="navigation">
        <Button
          className="ghost-button"
          onClick={handleNextButtonClick}
          disabled={!selectedOption}
        >
          Next
        </Button>
      </div>
    </section>
  );
};

export default Questions;
