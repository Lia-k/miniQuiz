import Button from "../components/ui/button";
import QuizSection from "./ui/QuizSection";
import "./email.css";

const Email = ({ email, onEmailChange, handleSubmit }) => {
  return (
    <QuizSection
      headerText="Unlock your Screen-Life Balance results"
      subHeadingText="Drop your email to view your score, recommendations, and pick the right plan"
      badgeText="Step 2 of 3"
      headerTag="h2"
      eyebrowText="Screen Life Balance Quiz"
      className='screen-shell'
    >
      <div className="quiz-email">
        <ul className="quiz-email__list">
          <li>Score breakdown with focus areas</li>
          <li>Personalized reset steps</li>
          <li>Choose a plan: Lite, Pro, or Coaching</li>
        </ul>

        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="quiz-email__form"
        >
          <label htmlFor="email-input">Where should we send it?</label>
          <div className="quiz-email__field">
            <input
              id="email-input"
              type="email"
              placeholder="example@gmail.com"
              required
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
            />
            <p className="quiz-email__helper">
              One email with your plan. No spam, unsubscribe anytime.
            </p>
          </div>
          <Button type="submit" className="primary-button full-width">
            Email me my plan
          </Button>
        </form>
      </div>
    </QuizSection>
  );
};

export default Email;
