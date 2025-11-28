import { flushSync } from "react-dom";

// Runs the given callback inside the browser View Transitions API when available.
// Falls back to a normal synchronous update so state changes still occur on browsers that do not support it.
const runViewTransition = (callback) => {
  const runUpdate = () => flushSync(callback);

  if (typeof document !== "undefined" && document.startViewTransition) {
    document.startViewTransition(runUpdate);
    return;
  }

  runUpdate();
};

export default runViewTransition;
