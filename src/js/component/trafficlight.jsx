import React, { useState } from "react";


const TrafficLight = (props) => {
  const [color, setColor] = useState("red");




  return (
    <div>  <h1>{props.test}</h1>
   
    <div className="traffic_light">
      <div
        onClick={() => setColor("red")}
        className={"light red" + (color === "red" ? " glow" : "")}
      ></div>

      <div
        onClick={() => setColor("orange")}
        className={"light orange" + (color === "orange" ? " glow" : "")}
      ></div>

      <div
        onClick={() => setColor("green")}
        className={"light green" + (color === "green" ? " glow" : "")}
      ></div>
    </div>
    </div>
  );
  }

export default TrafficLight;