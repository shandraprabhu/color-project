import React, { useState } from "react";
import "./changer.css";

function Changer() {
  const [boxColor, setBoxColor] = useState("white");

  const changeBoxColor = (color) => {
    setBoxColor(color);
  };

  return (
    <div className="container">
      <h1> Color Changer</h1>

    
      <div className="color-box" style={{ backgroundColor: boxColor }}>
        <p>{boxColor.toUpperCase()}</p>
      </div>

      <div className="button-group">
       
        <button
          className="color-button green-button"
          onClick={() => changeBoxColor("green")}
        >
          Green
        </button>

        
        <button
          className="color-button red-button"
          onClick={() => changeBoxColor("red")}
        >
          Red
        </button>

        
        <button
          className="color-button yellow-button"
          onClick={() => changeBoxColor("yellow")}
        >
          Yellow
        </button>
      </div>
    </div>
  );
}

export default Changer;
