import Button from "../components/ui/button";
import QuizSection from "./ui/QuizSection";
import { categories } from "../data/results";
import "./results.css";
import classNames from "classnames";

const Results = ({
  scoreRangeResult,
  maxScore,
  email,
  handleRetakeQuiz,
  score,
  categoriesForDisplay,
}) => {
  return (
    <QuizSection
      headerText="Your Screen-Life Balance results are ready"
      subHeadingText="Here’s your score, focus areas, and the plan options to fix your biggest time drains."
      badgeText="Step 3 of 3"
      headerTag="h2"
      eyebrowText="Screen Life Balance Quiz"
      className="quiz-shell"
    >
      <div className="quiz-results">
        <div className="quiz-results__score-block">
          <h3
            className={classNames("quiz-results__label", {
              "quiz-results__label--good": scoreRangeResult.status === "good",
              "quiz-results__label--normal":
                scoreRangeResult.status === "normal",
              "quiz-results__label--bad": scoreRangeResult.status === "bad",
            })}
          >
            {scoreRangeResult.label}
          </h3>
          <p className="quiz-results__score">
            Your score: {score} / {maxScore}
          </p>
          <p>Email: {email}</p>
          <p className="quiz-results__description">
            {scoreRangeResult.description}
          </p>
        </div>

        <div className="quiz-results__categories">
          {categoriesForDisplay.map(({ category, threshold, feedback }) => (
            <div
              key={categories[category]?.id ?? category}
              className="quiz-results__category-card"
            >
              <div className="quiz-results__category-meta">
                <h4>{category}</h4>
                <span className="quiz-results__threshold">
                  {(threshold * 100).toFixed(0)}%
                </span>
              </div>
              <p className="quiz-results__feedback">{feedback}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="quiz-results__buttons">
        <Button
          className="primary-button"
          onClick={() => alert("Oops! Try again later")}
        >
          Get a full plan access for $9.95
        </Button>
        <Button className="ghost-button" onClick={handleRetakeQuiz}>
          Retake quiz
        </Button>
      </div>
    </QuizSection>
  );
};

export default Results;
