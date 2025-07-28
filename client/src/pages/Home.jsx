import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { useGame } from "../context/GameContext";

const Home = () => {
  const { username, setUsername, category, setCategory } = useGame();
  const navigate = useNavigate();

  const handleCreateRoom = () => {
    if (!username || !category) return alert("Please fill all fields");
    navigate('/create')
  };

  const handleJoinRoom = () => {
    if (!username || !category) return alert("Please fill all fields");
    navigate("/join");
  };

  const categories = [
    { id: "computer", label: "💻 Computer Science" },
    { id: "geography", label: "🗺️ Geography" },
    { id: "history", label: "📜 History" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 px-6 py-12">
      <div className="bg-gray-800 rounded-xl shadow-xl p-10 max-w-xl w-full border border-gray-700">
        <h1 className="text-5xl font-extrabold text-center text-indigo-400 mb-10 select-none drop-shadow-lg">
          🎮 QuizBuzz Lobby
        </h1>

        <div className="space-y-8">
          <div>
            <label className="block text-lg font-semibold text-gray-300 mb-3">
              Your Name
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g. Basanta"
              className="w-full px-5 py-3 rounded-xl bg-gray-900 border border-gray-700 text-gray-200 placeholder-gray-500 
              focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg transition"
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-300 mb-4">
              Pick a Quiz Topic
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={clsx(
                    "text-base px-6 py-4 rounded-xl font-semibold shadow-md transition-transform duration-300",
                    category === cat.id
                      ? "bg-indigo-600 text-white scale-105 shadow-indigo-700"
                      : "bg-gray-800 text-gray-300 hover:bg-indigo-700 hover:text-white hover:scale-105"
                  )}
                  style={{
                    boxShadow:
                      category === cat.id
                        ? "0 8px 20px rgba(99,102,241,0.6)"
                        : "none",
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mt-10">
            <button
              onClick={handleCreateRoom}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-bold shadow-lg transform transition-transform duration-200 hover:scale-105"
            >
              🚀 Create Room
            </button>
            <button
              onClick={handleJoinRoom}
              className="w-full bg-pink-600 hover:bg-pink-700 text-white py-4 rounded-xl font-bold shadow-lg transform transition-transform duration-200 hover:scale-105"
            >
              🔗 Join Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
