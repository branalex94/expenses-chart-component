const DAYS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

export default function Singlebar({ day, amount, containerHeight }) {
  const cleanHeight = parseInt(containerHeight.replace("px", ""));
  const today = new Date().getDay();
  return (
    <div className="bar">
      <span className="bar__day">{day}</span>
      <span
        className={`bar__amount ${day === DAYS[today] ? "active" : ""}`}
        style={{
          height: `${(parseInt(amount) * cleanHeight) / 100}px`,
        }}
      ></span>
    </div>
  );
}
