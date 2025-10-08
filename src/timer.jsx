import React, { useState, useEffect } from "react";

function TimerComponent() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (timeInMs) => {
    const totalSeconds = Math.floor(timeInMs / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (num) => String(num).padStart(2, "0");

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "30px",
        border: "2px solid #333",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "50px auto",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      {/* Timer Display Box - Size increased */}
      <div
        style={{
          fontSize: "3.5em",
          marginBottom: "25px",
          padding: "15px 20px",
          border: "1px solid #000",
          borderRadius: "6px",
          fontFamily: "monospace",
          fontWeight: "bold",
        }}
      >
        {formatTime(time)}
      </div>

      <div
        style={{ display: "flex", justifyContent: "space-around", gap: "10px" }}
      >
        {/* Start Button - Cursor changed to pointer (hand) */}
        <button
          onClick={handleStart}
          disabled={isRunning}
          style={{
            padding: "12px 20px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "1em",
            cursor: isRunning ? "not-allowed" : "pointer", // Here is the change
          }}
        >
          Start
        </button>

        {/* Stop Button - Cursor changed to pointer (hand) */}
        <button
          onClick={handleStop}
          disabled={!isRunning}
          style={{
            padding: "12px 20px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "1em",
            cursor: !isRunning ? "not-allowed" : "pointer", // Here is the change
          }}
        >
          Stop
        </button>

        {/* Reset Button - Cursor changed to pointer (hand) */}
        <button
          onClick={handleReset}
          disabled={time === 0 && !isRunning}
          style={{
            padding: "12px 20px",
            backgroundColor: "gray",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "1em",
            cursor: time === 0 && !isRunning ? "not-allowed" : "pointer", // Here is the change
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default TimerComponent;
