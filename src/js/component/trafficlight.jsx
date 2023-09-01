import React, { useState, useEffect } from "react";


const TrafficLight = (props) => {
  const [color, setColor] = useState("red");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (color === "red") {
        setColor("green");
      } else if (color === "green") {
        setColor("orange");
      } else if (color === "orange") {
        setColor("red");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [color]);


  return (
    <div>  <h1>{props.test}</h1>
       <div className="traffic_light">
      <div className={"light red" + (color === "red" ? " glow" : "")}></div>
      <div className={"light orange" + (color === "orange" ? " glow" : "")}></div>
      <div className={"light green" + (color === "green" ? " glow" : "")}></div>
    </div>
    </div>
  );
};

export default TrafficLight;