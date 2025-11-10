# MiniQuiz

MiniQuiz is a tiny React quiz app built with Vite. It presents a sequence of multiple‑choice questions, collects an email after the last question, and shows a summary with your score.

Key behavior: once you select an option, the UI immediately highlights the correct answer and marks a wrong selection, then you can proceed with Next.

## Features

- Minimal quiz flow: Questions → Email → Results
- Immediate visual feedback on option select
- Score summary with correct count and percentage
- Clean state management via React context + reducer

## Tech Stack

- React 18
- Vite
- Context + Reducer for state handling

## Getting Started

Prerequisites:
- Node.js 18+

Install dependencies:
- `npm install`

Run in development:
- `npm run dev`

Build for production:
- `npm run build`

Preview production build:
- `npm run preview`

## Project Structure

- `src/App.jsx` — Top‑level app wiring and step routing
- `src/context/` — Context providers and hooks
- `src/reducers/miniQuizReducer.js` — Reducer and actions
- `src/data/questions.js` — Question data
- `src/sections/Questions.jsx` — Question UI and option selection
- `src/sections/Email.jsx` — Email capture form
- `src/sections/Results.jsx` — Results summary
- `src/components/ui/button.jsx` — Button component and styles

## State & Actions

Reducer: `src/reducers/miniQuizReducer.js`

- `SELECT_OPTION` — Stores the currently selected option id for the active question.
- `NEXT` — Persists the result for the current question, moves to the next question or to the email step at the end.
- `SET_EMAIL` — Updates the email field.
- `SUBMIT_EMAIL` — Moves to the results step.

State shape (high‑level):
- `currentQuestionIndex: number`
- `currentSelectedOption: string | null`
- `results: Record<questionId, { selectedOptionId: string; isCorrect: boolean }>`
- `email: string`
- `step: "question" | "email" | "result"`
- `questions: Array<Question>`

## Option Select Highlighting

File: `src/sections/Questions.jsx`

- When a user selects an option, the UI immediately:
  - Disables all options to lock the answer.
  - Highlights the correct option with the `correct` style.
  - If the selected option is wrong, marks the selected one with the `wrong` style.
- The Next button becomes enabled once an option is selected.

Related styles: `src/components/ui/button.css`
- `.option-button.correct` — correct highlight
- `.option-button.wrong` — wrong highlight

## Customizing Questions

Edit `src/data/questions.js` to change, add, or remove questions. Each option requires:
- `id: string`
- `optionText: string`
- `isCorrect: boolean`

## Notes

- The reducer records results on `NEXT` so scoring and the summary are based on the final selection for each question.
- If you want to persist the result immediately on select, you can extend `SELECT_OPTION` to compute `isCorrect` and write to `results` at selection time.
