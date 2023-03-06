import { useState, useEffect } from "react";
import React from "react";
import "./ball.css";
const Balloon = () => {
  const [fontSize, setFontSize] = useState(50);
  return (
    <>
      <p style={{ fontSize: `${fontSize}px` }}>🎈</p>
      <div className="btn">
        <button onClick={() => setFontSize(fontSize + 5)}>Increase</button>
        <button onClick={() => setFontSize(fontSize - 5)}>Decrease</button>
      </div>
    </>
  );
};

export default Balloon;
