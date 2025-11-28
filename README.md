# MiniQuiz

MiniQuiz is a Vite + React single-page quiz about screen-life balance. It asks 15 weighted multiple-choice questions, collects an email after the final question, and shows a scored summary with category feedback.

## Features

- Flow: Questions → Email capture → Results
- Weighted scoring (0–150) with descriptive ranges (e.g., Digital Zen Master, Burnout Risk)
- Category breakdown cards with thresholds and tailored feedback
- Progress saved in `localStorage` and restored on reload
- View Transitions API for smoother step changes (with graceful fallback)

## Tech Stack

- React 19
- Vite
- classnames for conditional classes
- Local storage for persistence

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

- `src/App.jsx` — Orchestrates steps, quiz state, scoring, and persistence
- `src/components/Question.jsx` — Question UI with selectable options and navigation
- `src/components/Email.jsx` — Email capture form (step 2 of 3)
- `src/components/Results.jsx` — Score label, total, email echo, and category cards
- `src/components/ui/QuizSection.jsx` — Shared layout shell used across steps
- `src/data/questions.js` — Question copy, categories, and weighted options
- `src/data/results.js` — Score ranges and category metadata (thresholds, feedback)
- `src/utils` — Helpers for scoring, hydration (`loadSavedData`), and view transitions

## How the flow works

- State in `App.jsx`: `step`, `questionIndex`, `selectedOption`, `results`, `email`.
- Selecting an option stores `{ selectedOptionId, value, category }` for the current question and enables Continue. You can change the selection before continuing.
- After the last question, clicking Continue moves to the email step; submitting the form shows results.
- Results show:
  - A labeled status based on `scoreRanges` (see `src/data/results.js`)
  - Total score vs. computed max (from `calculateMaxScore`)
  - Entered email
  - Category cards with percentage-to-threshold and feedback text
- Retake resets state and clears the `miniQuiz` key in `localStorage`.

## Customization

- Add or edit questions in `src/data/questions.js` (each option needs `id`, `optionText`, and `value`).
- Adjust score ranges or category thresholds/feedback in `src/data/results.js`.
- Update styling in component-level CSS files (e.g., `src/components/question.css`, `src/components/ui/button.css`).
