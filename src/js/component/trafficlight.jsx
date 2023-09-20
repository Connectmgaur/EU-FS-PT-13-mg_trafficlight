import React, { useState, useEffect } from "react";


const TrafficLight = () => {
  const [color, setColor] = useState("red");

  const handleColorChange = () => {
    if (color === "red") {
      setColor("green");
    } else if (color === "green") {
      setColor("orange");
    } else if (color === "orange") {
      setColor("red");
    }
  };

  return (
    <div>
      <div className="traffic_light">
        <div className={"light red" + (color === "red" ? " glow" : "")}></div>
        <div
          className={"light orange" + (color === "orange" ? " glow" : "")}
        ></div>
        <div className={"light green" + (color === "green" ? " glow" : "")}></div>
      </div>
      <button className="btn" onClick={handleColorChange}>Change Color</button>
    </div>
  );
};
export default TrafficLight;