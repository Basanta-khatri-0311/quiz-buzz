import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [category, setCategory] = useState("");
  const [roomCode, setRoomCode] = useState("");

  return (
    
    <GameContext.Provider
      value={{
        username,
        setUsername,
        category,
        setCategory,
        roomCode,
        setRoomCode,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
