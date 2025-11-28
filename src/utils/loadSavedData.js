const loadSavedData = () => {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const saved = window.localStorage.getItem("miniQuiz");
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
};

export default loadSavedData;
