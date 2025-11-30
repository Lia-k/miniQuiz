import "./quizSection.css";
import classNames from "classnames";
import type { ElementType, ReactNode } from "react";

interface QuizSectionProps {
  headerText: string;
  subHeadingText?: string;
  badgeText?: string;
  eyebrowText?: string;
  headerTag?: ElementType;
  children: ReactNode;
  className?: string;
}

const QuizSection = ({
  headerText = "Screen Life Balance Quiz",
  subHeadingText,
  badgeText,
  eyebrowText,
  headerTag = "h1",
  children,
  className,
}: QuizSectionProps) => {
  const HeadingLevel = headerTag;
  return (
    <section className={classNames("quiz-section", className)}>
      {badgeText && <div className="quiz-section__badge">{badgeText}</div>}
      {eyebrowText && <p className="quiz-section__eyebrow">{eyebrowText}</p>}
      <HeadingLevel>{headerText}</HeadingLevel>
      {subHeadingText && (
        <p className="quiz-section__subtitle">{subHeadingText}</p>
      )}
      {children}
    </section>
  );
};

export default QuizSection;
