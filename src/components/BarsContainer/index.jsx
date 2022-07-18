import { useEffect, useRef, useState } from "react";
import SingleBar from "../SingleBar";

export default function BarsContainer({ dailyValues }) {
  const containerRef = useRef(undefined);
  const [styles, setStyles] = useState(undefined);

  useEffect(() => {
    const styles = getComputedStyle(containerRef.current);

    setStyles(styles);
  }, [containerRef.current]);

  return (
    <div className="bars__container" ref={containerRef}>
      {styles &&
        dailyValues.map(({ day, amount }) => (
          <SingleBar
            key={day}
            day={day}
            amount={amount}
            containerHeight={styles.height}
          />
        ))}
    </div>
  );
}
