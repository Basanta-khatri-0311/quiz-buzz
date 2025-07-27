import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGame } from "../context/GameContext";
import { useQuiz } from "../context/QuizContext";
import Clock from "../components/Clock";

const Quiz = () => {
  const { username, category } = useGame();
  const {
    questions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    selectedOptions,
    setSelectedOptions,
    score,
    setScore,
    loadQuestions,
    setStartTime,
    setEndTime,
  } = useQuiz();
  const { roomCode } = useParams();
  const navigate = useNavigate();

  const currentQuestion = questions[currentQuestionIndex];

  const [elapsedTime, setElapsedTime] = useState(0);

  // Format seconds as MM:SS
  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  useEffect(() => {
    if (!username || !category) {
      navigate("/");
    } else {
      loadQuestions(category);
      setStartTime(Date.now());

      const timer = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, []);

  const handleOptionClick = (option) => {
    const alreadyAnswered = selectedOptions[currentQuestionIndex];
    if (alreadyAnswered) return;

    const correct = option === currentQuestion.answer;
    if (correct) setScore(score + 1);

    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestionIndex] = option;
    setSelectedOptions(updatedOptions);
  };

  const handleNext = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setEndTime(Date.now());
      navigate("/result");
    }
  };

  if (!currentQuestion)
    return <div className="text-center text-white mt-20">Loading Quiz...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-6 py-10 text-gray-200">
      <Clock seconds={elapsedTime} />
      <div className="bg-gray-850 rounded-3xl p-8 w-full max-w-xl shadow-lg border border-gray-700">
        <h2 className="text-2xl font-bold mb-2 text-center text-indigo-400">
          Room Code: {roomCode}
        </h2>

        <p className="text-lg mb-2 font-semibold text-gray-300">
          Question {currentQuestionIndex + 1} of {questions.length}
        </p>
        <p className="text-xl font-bold mb-6 text-white">
          {currentQuestion.question}
        </p>

        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedOptions[currentQuestionIndex] === option;
            const isCorrect = option === currentQuestion.answer;
            const showFeedback = !!selectedOptions[currentQuestionIndex];

            return (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                disabled={showFeedback}
                className={`w-full px-5 py-3 rounded-xl text-left transition font-semibold
                  ${
                    showFeedback
                      ? isCorrect
                        ? "bg-green-600 text-white"
                        : isSelected
                        ? "bg-red-600 text-white"
                        : "bg-gray-800 text-gray-400"
                      : "bg-gray-800 hover:bg-indigo-600"
                  }`}
              >
                {option}
              </button>
            );
          })}
        </div>

        {selectedOptions[currentQuestionIndex] && (
          <button
            onClick={handleNext}
            className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-bold transition"
          >
            {currentQuestionIndex + 1 === questions.length
              ? "🎉 Finish Quiz"
              : "Next →"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
