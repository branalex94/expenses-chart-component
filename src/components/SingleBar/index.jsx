import { useState } from "react";

const DAYS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

export default function Singlebar({ day, amount, containerHeight }) {
  const [isHover, setIsHover] = useState(false);
  const cleanHeight = parseInt(containerHeight.replace("px", ""));
  const today = new Date().getDay();
  const handleMouseOver = (e) => {
    console.log("mouse over");
    setIsHover(true);
  };
  const handleMouseOut = (e) => {
    console.log("mouse out");
    setIsHover(false);
  };
  return (
    <div className="bar">
      <span className="bar__day">{day}</span>
      <span
        className={`bar__amount ${day === DAYS[today] ? "active" : ""}`}
        style={{
          height: `${(parseInt(amount) * cleanHeight) / 100}px`,
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      ></span>
      <span
        className={`bar__price-overlay ${
          isHover ? "bar__price-overlay--active" : ""
        }`}
      >
        ${amount}
      </span>
    </div>
  );
}
