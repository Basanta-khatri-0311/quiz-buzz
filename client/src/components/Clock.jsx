const Clock = ({ seconds }) => {
  const formatTime = (s) => {
    const mins = String(Math.floor(s / 60)).padStart(2, "0");
    const secs = String(s % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        backgroundColor: "#1e40af", // Indigo-800
        color: "#e0e7ff", // Indigo-200
        fontFamily: "monospace",
        fontWeight: "bold",
        fontSize: "28px",
        padding: "12px 20px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
        zIndex: 9999,
        userSelect: "none",
      }}
    >
      ⏰ {formatTime(seconds)}
    </div>
  );
};


export default Clock