import Button from "./ui/button";
import QuizSection from "./ui/QuizSection";
import type { ChangeEvent, FormEvent } from "react";
import "./email.css";

interface EmailProps {
  email: string;
  onEmailChange: (value: string) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const Email = ({ email, onEmailChange, handleSubmit }: EmailProps) => {
  return (
    <QuizSection
      headerText="Unlock your Screen-Life Balance results"
      subHeadingText="Drop your email to view your score, recommendations, and pick the right plan"
      badgeText="Step 2 of 3"
      headerTag="h2"
      eyebrowText="Screen Life Balance Quiz"
      className="screen-shell"
    >
      <div className="quiz-email">
        <ul className="quiz-email__list">
          <li>Score breakdown with focus areas</li>
          <li>Personalized reset steps</li>
          <li>Choose a plan: Lite, Pro, or Coaching</li>
        </ul>

        <form
          onSubmit={(event: FormEvent<HTMLFormElement>) => {
            handleSubmit(event);
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
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                onEmailChange(event.target.value)
              }
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
