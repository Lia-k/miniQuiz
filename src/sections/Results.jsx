import classNames from "classnames";
import "./results.css";

const Results = ({
  headerText = "Check your results",
  email,
  questions,
  results,
}) => {
  console.log(results)
  const totalQuestions = questions.length;
  const correctAnswers = Object.values(results).filter(
    (r) => r.isCorrect
  ).length;
  const score = `${correctAnswers}/${totalQuestions}`;
  const scorePercent = Math.round((correctAnswers / totalQuestions) * 100);
  const scoreLabel =
    scorePercent === 100
      ? "Perfect score 🤩"
      : scorePercent >= 50
      ? "Almost there 🏃‍♂️"
      : "Keep practicing 💪";

  return (
    <section className="container">
      <h2>{headerText}</h2>
      <div className="score-summary">
        <h3>{scoreLabel}</h3>
        <p className="score-result">
          Your score: {score} ({scorePercent}%)
        </p>
        <p>Email: {email}</p>
      </div>
      <div className="results-list">
        <h2>Summary</h2>
        {questions.map((question) => {
          const result = results[question.id];

          // Find selected option
          const selectedOption = question.options.find(
            (opt) => opt.id === result.selectedOptionId
          );

          // Check isCorrect
          const isCorrect = result.isCorrect;

          return (
            <div key={question.id} className="result-item">
              <h3>{question.questionText}</h3>
              <div
                className={classNames("answers-container", {
                  correct: isCorrect,
                })}
              >
                Your answer: {selectedOption.optionText}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Results;
