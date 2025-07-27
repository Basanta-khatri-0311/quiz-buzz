import { createContext, useContext, useState } from "react";

const QuizContext = createContext();

const questionBank = {
  computer: [
    {
      question: "What does CPU stand for?",
      options: [
        "Central Processing Unit",
        "Control Processing Unit",
        "Central Program Unit",
        "Control Panel Unit",
      ],
      answer: "Central Processing Unit",
    },
    {
      question: "Which language is used for web development?",
      options: ["Python", "HTML", "C++", "Java"],
      answer: "HTML",
    },
  ],
  geography: [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Madrid", "Berlin", "Rome"],
      answer: "Paris",
    },
  ],
  history: [
    {
      question: "Who was the first President of the United States?",
      options: [
        "Abraham Lincoln",
        "George Washington",
        "Thomas Jefferson",
        "John Adams",
      ],
      answer: "George Washington",
    },
  ],
};

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const loadQuestions = (category) => {
    const selectedQuestions = questionBank[category] || [];
    setQuestions(selectedQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOptions([]);
  };

  const getTimeTaken = () => {
    if (!startTime || !endTime) return null;
    const diff = Math.floor((endTime - startTime) / 1000);
    const mins = Math.floor(diff / 60);
    const secs = diff % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        score,
        setScore,
        selectedOptions,
        setSelectedOptions,
        loadQuestions,
        startTime,
        setStartTime,
        endTime,
        setEndTime,
        getTimeTaken,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
