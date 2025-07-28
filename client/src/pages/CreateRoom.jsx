import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useGame } from "../context/GameContext";

const CreateRoom = () => {
  const navigate = useNavigate();
  const { username, category, roomCode, setRoomCode } = useGame();

  useEffect(() => {
    if (!username || !category) {
      navigate("/");
    } else {
      const code = uuidv4().slice(0, 6).toUpperCase();
      setRoomCode(code);
    }
  }, []);

  const handleStartQuiz = () => {
    navigate(`/quiz/${roomCode}`, {
      state: { username, category },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4">
      <div className="bg-gray-850 p-8 rounded-3xl w-full max-w-md shadow-lg border border-gray-700 text-gray-200">
        <h2 className="text-3xl font-bold text-indigo-400 mb-6 text-center">
          🎯 Room Created
        </h2>

        <div className="space-y-4 text-center">
          <p>
            <span className="font-semibold text-gray-400">Username:</span>{" "}
            {username}
          </p>
          <p>
            <span className="font-semibold text-gray-400">Category:</span>{" "}
            {category}
          </p>
          <p>
            <span className="font-semibold text-gray-400">Room Code:</span>{" "}
            <span className="text-xl font-bold text-pink-400">{roomCode}</span>
          </p>

          <button
            onClick={handleStartQuiz}
            className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-bold transition transform hover:scale-105"
          >
            🚀 Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
