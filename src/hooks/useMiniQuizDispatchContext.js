import { useContext } from "react";
import { MiniQuizDispatchContext } from "../context/miniQuizContext";

export default function useMiniQuizDispatchContext() {
  return useContext(MiniQuizDispatchContext);
}
