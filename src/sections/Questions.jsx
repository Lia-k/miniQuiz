import Button from "../components/ui/button";
import classNames from "classnames";
import "./questions.css";

const Questions = ({
  headerText = "Pass a mini quiz",
  subHeadingText = "Answer the question below:",
  question,
  handleOptionClick,
  currentSelectedOption,
  handleNextButtonClick,
  results,
}) => {
  return (
    <section className="container">
      <h1>{headerText}</h1>
      <p>{subHeadingText}</p>
      <p className="question-text">{question.questionText}</p>
      <div className="question-options">
        {question.options.map((option) => {
          const isSelected = currentSelectedOption === option.id;
          const hasChecked = results[question.id];
          const isCorrect = hasChecked && option.isCorrect;
          const isWrong = hasChecked && isSelected && !option.isCorrect;
          return (
            <div key={option.id}>
              <Button
                onClick={() => handleOptionClick(option.id)}
                className={classNames("option-button", {
                  selected: isSelected,
                  correct: isCorrect,
                  wrong: isWrong,
                })}
                disabled={hasChecked}
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
          disabled={!currentSelectedOption}
        >
          Next
        </Button>
      </div>
    </section>
  );
};

export default Questions;
