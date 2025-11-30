import { useEffect, useState } from "react";
import QuizSection from "./ui/QuizSection";
import classNames from "classnames";
import "./resultsGeneration.css";

const stages = [
  "Scoring your answers",
  "Spotting focus areas",
  "Personalizing your plan",
] as const;

const ResultsGeneration = () => {
  const [progress, setProgress] = useState<number>(14);
  const [activeStage, setActiveStage] = useState<number>(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProgress((prev) => {
        const next = prev + 10;
        return Math.min(next, 100);
      });
    }, 400);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    setActiveStage(Math.min(stages.length - 1, Math.floor(progress / 33)));
  }, [progress]);

  return (
    <QuizSection
      headerText="Generating results"
      subHeadingText="Crunching your answers and tailoring the best reset for you."
      className="screen-shell"
    >
      <div className="quiz-results-generation">
        <div
          className="quiz-results-generation__bar"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
          aria-label="Generating your results"
        >
          <div
            className="quiz-results-generation__bar-fill"
            style={{ width: `${progress}%` }}
          >
            <span className="quiz-results-generation__bar-shine" />
          </div>
        </div>

        <div className="quiz-results-generation__meta">
          <p className="quiz-results-generation__percent">
            {Math.round(progress)}%
          </p>
          <p className="quiz-results-generation__status">
            Personalizing your plan...
          </p>
        </div>

        <div className="quiz-results-generation__steps" role="list">
          {stages.map((label, index) => (
            <div
              key={label}
              className={classNames("quiz-results-generation__step", {
                "is-active": index <= activeStage,
              })}
              role="listitem"
            >
              <span className="quiz-results-generation__dot" />
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </QuizSection>
  );
};

export default ResultsGeneration;
