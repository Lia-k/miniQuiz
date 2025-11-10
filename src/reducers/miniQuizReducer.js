import { questions } from "../data/questions";

export const MINI_QUIZ_ACTIONS = {
  SELECT_OPTION: "select_option",
  NEXT: "next",
  SET_EMAIL: "set_email",
  SUBMIT_EMAIL: "submit_email",
};

export const initialState = {
  currentQuestionIndex: 0,
  currentSelectedOption: null,
  results: {}, // 'q1': {selectedOptionId: 'anchor', isCorrect: true},
  email: "",
  step: "question",
  questions: questions,
};

export function miniQuizReducer(state, action) {
  switch (action.type) {
    case MINI_QUIZ_ACTIONS.SELECT_OPTION: {
      const currentQuestion = state.questions[state.currentQuestionIndex];
      const selectedOption = currentQuestion.options.find(
        (opt) => opt.id === action.optionId
      );
      const isCorrect = Boolean(selectedOption && selectedOption.isCorrect);
      return {
        ...state,
        currentSelectedOption: action.optionId,
        results: {
          ...state.results,
          [currentQuestion.id]: {
            selectedOptionId: action.optionId,
            isCorrect,
          },
        },
      };
    }
    case MINI_QUIZ_ACTIONS.NEXT: {
      const nextQuestionIndex = state.currentQuestionIndex + 1;
      const updatedResults = {
        ...state.results,
        [action.questionId]: {
          selectedOptionId: action.selectedOptionId,
          isCorrect: action.isCorrect,
        },
      };

      if (nextQuestionIndex === questions.length) {
        return {
          ...state,
          results: updatedResults,
          step: "email",
        };
      }
      return {
        ...state,
        currentQuestionIndex: nextQuestionIndex,
        currentSelectedOption: null,
        results: updatedResults,
      };
    }
    case MINI_QUIZ_ACTIONS.SET_EMAIL: {
      return {
        ...state,
        email: action.email,
      };
    }
    case MINI_QUIZ_ACTIONS.SUBMIT_EMAIL: {
      return {
        ...state,
        step: "result",
      };
    }
    default: {
      return state;
    }
  }
}
