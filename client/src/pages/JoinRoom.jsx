import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGame } from '../context/GameContext'

const JoinRoom = () => {
  const navigate = useNavigate()
  const { username, category, roomCode, setRoomCode } = useGame()
  const [inputCode, setInputCode] = useState('')

  useEffect(() => {
    if (!username || !category) {
      navigate('/')
    }
  }, [])

  const handleJoin = () => {
    if (!inputCode.trim()) {
      alert('Please enter a room code')
      return
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-6">
      <div className="bg-gray-850 p-8 rounded-3xl w-full max-w-md shadow-lg border border-gray-700 text-gray-200">
        <h2 className="text-3xl font-bold text-pink-400 mb-6 text-center">🔗 Join a Room</h2>

        <div className="space-y-4 text-center">
          <p><span className="font-semibold text-gray-400">Username:</span> {username}</p>
          <p><span className="font-semibold text-gray-400">Category:</span> {category}</p>

          <input
            type="text"
            placeholder="Enter Room Code"
            className="w-full px-4 py-3 mt-4 rounded-xl bg-gray-900 border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
          />

          <button
            onClick={handleJoin}
            className="mt-6 w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-xl font-bold transition transform hover:scale-105"
          >
            ✅ Join Quiz
          </button>
        </div>
      </div>
    </div>
  )
}

export default JoinRoom
