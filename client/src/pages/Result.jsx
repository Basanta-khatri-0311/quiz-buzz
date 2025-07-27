import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";
import { useGame } from "../context/GameContext";

const ResultPage = () => {
  const navigate = useNavigate();
  const { username } = useGame();
  const {
    score,
    questions,
    setScore,
    setSelectedOptions,
    setCurrentQuestionIndex,
    getTimeTaken,
  } = useQuiz();

  const total = questions.length;
  const percentage = Math.round((score / total) * 100);

  const handlePlayAgain = () => {
    setScore(0);
    setSelectedOptions([]);
    setCurrentQuestionIndex(0);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-6 py-10 text-gray-200">
      <div className="bg-gray-800 rounded-3xl p-8 w-full max-w-md shadow-2xl border border-gray-700 text-center">
        <h2 className="text-3xl font-extrabold text-indigo-400 mb-6">
          🎉 Quiz Completed!
        </h2>

        <div className="space-y-3 text-lg">
          <p className="text-gray-300">
            Well done,{" "}
            <span className="font-semibold text-white">{username}</span>!
          </p>

          <p className="text-white font-semibold text-xl">
            Score: {score} / {total}
          </p>

          <p className="text-pink-400 text-md">
            Accuracy: {percentage}% 🎯
          </p>

          <p className="text-indigo-300 text-md">
            ⏱️ Time Taken:{" "}
            <span className="font-semibold text-white">
              {getTimeTaken()}
            </span>
          </p>
        </div>

        <button
          onClick={handlePlayAgain}
          className="mt-6 w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-xl font-bold transition duration-200"
        >
          🔁 Play Again
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
