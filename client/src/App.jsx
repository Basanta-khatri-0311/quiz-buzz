import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, CreateRoom, JoinRoom, Quiz, Result } from "./pages/import";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateRoom />} />
        <Route path="/join" element={<JoinRoom />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz/:roomCode" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
};

export default App;
