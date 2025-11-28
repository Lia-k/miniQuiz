import classNames from "classnames";
import Button from "../components/ui/button";
import QuizSection from "./ui/QuizSection";
import "./question.css";

const Question = ({
  question,
  handleOptionClick,
  selectedOption,
  handleNextButtonClick,
  questionNumber,
}) => {
  return (
    <QuizSection
      headerText="Screen Life Balance Quiz"
      subHeadingText="Get personalized insights on your digital wellbeing"
    >
      <div className="quiz-question quiz-shell">
        <div className="quiz-question__card">
          <p className="quiz-question__prompt">
            {questionNumber}. {question.questionText}
          </p>
          <div className="quiz-question__options">
            {question.options.map((option) => {
              const isSelected = selectedOption === option.id;
              return (
                <Button
                  onClick={() => handleOptionClick(option.id)}
                  className={classNames("option-button", {
                    selected: isSelected,
                  })}
                  key={option.id}
                >
                  {option.optionText}
                </Button>
              );
            })}
          </div>
        </div>

        <div className="quiz-question__navigation">
          <Button
            className="ghost-button"
            onClick={handleNextButtonClick}
            disabled={!selectedOption}
          >
            Continue
          </Button>
        </div>
      </div>
    </QuizSection>
  );
};

export default Question;
