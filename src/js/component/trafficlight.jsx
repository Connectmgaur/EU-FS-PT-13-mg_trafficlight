import React, { useState, useEffect } from "react";


const TrafficLight = () => {
  const [activeColor, setActiveColor] = useState('red');

 // const handleColorChange = () => {
   // if (color === "red") {
   //   setColor("green");
    //} else if (color === "green") {
     // setColor("orange");
    //} else if (color === "orange") {
     // setColor("red");
    //}
 // };

  const handleClick = (color) => {
    setActiveColor(color);
};

const isLightSelected = (color) => {
  return activeColor === color;
};

return (
  <div>
    <div className="traffic_light">
      <div
        className={`light red ${isLightSelected("red") ? "selected glow" : ""}`}
        onClick={() => handleClick("red")}
      ></div>
      <div
        className={`light orange ${
          isLightSelected("orange") ? "selected glow" : ""
        }`}
        onClick={() => handleClick("orange")}
      ></div>
      <div
        className={`light green ${isLightSelected("green") ? "selected glow" : ""}`}
        onClick={() => handleClick("green")}
      ></div>
    </div>
  </div>
);
};

export default TrafficLight;