import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import RedoAnimText from "./RedoAnimText";
import CursorBlinker from "./CursorBlinker";

export default function AnimText({ delay }) {
  const [done, setDone] = useState(false);
  const baseText = "Hello World,";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      delay: delay,
      duration: 1.5,
      ease: "easeInOut",
      onComplete: () => {
        setDone(true);
      },
    });
    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span className="lead">
      <div className="d-flex flex-column">
        <motion.span className="bebas" style={{ fontSize: "60px" }}>
          {displayText}
        </motion.span>
        <RedoAnimText delay={delay + 2} />
      </div>
    </span>
  );
}
