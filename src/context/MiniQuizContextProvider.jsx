import { useEffect, useReducer } from "react";
import { MiniQuizContext, MiniQuizDispatchContext } from "./miniQuizContext";
import { initialState, miniQuizReducer } from "../reducers/miniQuizReducer";

const STORAGE_KEY = "miniQuizState";

const loadState = () => {
  if (typeof window === "undefined" || !window.localStorage) {
    return initialState;
  }
  
  try {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      if (parsedState?.step === "result") {
        localStorage.removeItem(STORAGE_KEY);
        return initialState;
      }
      return parsedState;
    }
  } catch (error) {
    console.error("Failed to load state from localStorage:", error);
  }
  return initialState;
};

export function MiniQuizProvider({ children }) {
  const [state, dispatch] = useReducer(
    miniQuizReducer,
    initialState,
    loadState
  );

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.error("Failed to save data to localStorage", error);
    }
  }, [state]);

  return (
    <MiniQuizContext.Provider value={state}>
      <MiniQuizDispatchContext.Provider value={dispatch}>
        {children}
      </MiniQuizDispatchContext.Provider>
    </MiniQuizContext.Provider>
  );
}
