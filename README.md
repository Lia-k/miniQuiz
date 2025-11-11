# MiniQuiz

MiniQuiz is a mini React quiz app built with Vite. It presents a sequence of multiple-choice questions, collects an email after the last question, and shows a summary with your score.

Key behavior: once you select an option, the UI immediately highlights the correct answer, marks a wrong selection, and locks the choices so the click is final before moving on.

## Features

- Minimal quiz flow: Questions → Email → Results
- Immediate visual feedback on option select
- Answer lock after each selection to avoid accidental double changes
- Progress persistence via `localStorage`
- Score summary with correct count and percentage

## Tech Stack

- React 18
- Vite
- React hooks for state handling
- `localStorage` for persistence

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

- `src/App.jsx` — Top-level app wiring, step routing, state, and persistence
- `src/data/questions.js` — Question data
- `src/sections/Questions.jsx` — Question UI and option selection
- `src/sections/Email.jsx` — Email capture form
- `src/sections/Results.jsx` — Results summary
- `src/components/ui/button.jsx` — Button component and styles

## State & Flow

`src/App.jsx` uses `useState` to track:
- `step`: `"question" | "email" | "result"`
- `questionIndex`
- `selectedOption`
- `results` map keyed by question id
- `email`

Every change is saved to `localStorage`, so reloading the page restores progress. Selecting an option immediately records the result for the current question and enables the Next button.

## Option Select Highlighting

File: `src/sections/Questions.jsx`

- When a user selects an option, the UI immediately:
  - Highlights the correct option with the `correct` style.
  - Marks a wrong selection with the `wrong` style.
  - Disables all buttons to lock in the answer until “Next” is clicked.
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

- `handleOptionClick` in `src/App.jsx` records correctness immediately, so the results screen always reflects the last locked-in choice.
- `handleNextButtonClick` clears `selectedOption` and advances the quiz or transitions to the email step when the last question is complete.
