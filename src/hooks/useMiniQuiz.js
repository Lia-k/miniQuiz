import { useContext } from "react";
import { MiniQuizContext } from "../context/miniQuizContext";

export default function useMiniQuiz() {
  return useContext(MiniQuizContext);
}
